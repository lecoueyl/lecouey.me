#!/usr/bin/env bash
# Single remote server automation deployment


set -o pipefail
set -o nounset


# Options
################################################################################


_usage() {
  echo -e "Available options:" && grep " .)\ #" $0;
  exit 0;
}

rollback=false
while getopts ":s:d:k:e:p:rh:" arg; do
  case $arg in
    s) # Name or IP of the server to deploy to
      readonly __server=${OPTARG}
      ;;
    d) # The path on the remote server where the application should be deployed
      readonly __deploy_to=${OPTARG}
      ;;
    k) # The last n releases are kept for possible rollbacks
      keep_releases=${OPTARG}
      ;;
    e) # Files to exclude from being deployed
      exclude=${OPTARG}
      ;;
    p) # Relative path to deploy (eg: '..')
      relative_path=${OPTARG}
      ;;
    r) # Rollback to previous release
      rollback=true
      ;;
    h) # Display help
      _usage
      ;;
  esac
done

if [ -z "${__server}" ]; then
  echo -e "You need to specify the server"
  _usage
fi

if [ -z "${__deploy_to}" ]; then
  echo -e "You need to specify where the application should be deployed"
  _usage
fi


# Constant
################################################################################


# Path
readonly __dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly __file="${__dir}/$(basename "${BASH_SOURCE[0]}")"
readonly __base="$(basename "${__file}" .sh)"
readonly __root="$(cd "$(dirname "${__dir}")/${relative_path:-"."}" && pwd)"

# Colors
readonly __info=$'\e[34m'
readonly __alert=$'\e[91m'
readonly __warning=$'\e[33m'
readonly __nocolor=$'\e[0m'

# Assets
readonly __exclude="${exclude:-".git*"}"
readonly __keep_releases="${keep_releases:-3}"
readonly __current_directory="${__deploy_to}/current"
readonly __releases_directory="${__deploy_to}/releases"


# Functions
################################################################################


#
# Global
#

_log::info() {
  echo -e "  $1"
}

_log::error() {
  echo -e "\n  ${__alert}$1${__nocolor}" >&2
  exit 1
}

_ssh() {
  ssh ${__server} $1
}

_check_ssh() {
  ssh -q -o ConnectTimeout=2 "${__server}" exit
  if [[ $? != 0 ]] ; then
    _log::error "Can't connect to server ${__server}"
  fi
}

_confirm() {
  while true; do
    local message=$1
    echo -e "${message}"
    read -p "Do you want to continue? (Y/n): " yn
    case $yn in
      [Yy]* ) break;;
      [Nn]* ) exit 0;;
      * ) echo "Please answer yes or no.";;
    esac
  done
}

#
# Check
#


_deploy::start() {
  _set_assets() {
    readonly __timestamp=$(_ssh "date +%Y%m%d%H%M%S" 2>&1)
    readonly __release_directory="${__releases_directory}/${__timestamp}"
  }

  _set_release_directory() {
    _ssh "mkdir -p ${__release_directory}"
    if _ssh "[ ! -d ${__release_directory} ]"; then
      _log::error "Could not create ${__release_directory} on server ${__server}"
    fi
  }

  _confirm "You are about to deploy ${__info}${__root}${__nocolor} on ${__warning}${__server}:${__deploy_to}${__nocolor}"
  _log::info "Initial check"
  _check_ssh
  _set_assets
  _set_release_directory
}


#
# Update
#


_deploy::update() {
  _rsync_project() {
    local excludes="--exclude=.git* --exclude=.DS_Store --exclude=node_modules"
    rsync -az ${excludes} --exclude="${__exclude}" "${__root}/." "${__server}:${__release_directory}"
  }

  _log::info "Updating release"
  _rsync_project
}


#
# Publish
#


_deploy::publish() {
  _set_symlink() {
    _ssh "rm -r ${__current_directory}"
    _ssh "ln -s ${__release_directory} ${__current_directory}"
  }

  _set_revision() {
    _ssh "echo ${__timestamp} > ${__current_directory}/REVISION"
  }

  _log::info "Setting up revision"
  _set_symlink
  _set_revision
}


#
# Clean
#


_deploy::clean() {
  _remove_old_revision() {
    local total_revision
    total_revision=$(_ssh "find ${__releases_directory} -mindepth 1 -maxdepth 1 -type d | wc -l" 2>&1)
    if [[ $total_revision -gt $__keep_releases ]]; then
      _ssh "ls -t --directory ${__releases_directory}/** | sed -e '1,${__keep_releases}d' | xargs -d '\n' rm -r"
    fi
  }

  _log::info "Cleaning old releases"
  _remove_old_revision
}


#
# Finish
#


_deploy::finish() {
  _log::info "Finished the deployment of revision ${__timestamp}"
}


#
# Rollback
#


_rollback::start() {
  _check_releases() {
    local releases_count
    releases_count=$(_ssh "find ${__releases_directory} -mindepth 1 -maxdepth 1 -type d | wc -l" 2>&1)

    if [[ $releases_count -le 1 ]]; then
      _log::error "There is no release to rollback to"
    fi
  }

  _set_assets() {
    readonly __current_release_directory=$(_ssh "readlink ${__current_directory}" 2>&1)
    readonly __current_revision=$(_ssh "cat ${__current_release_directory}/REVISION" 2>&1)

    readonly __rollback_release_directory=$(_ssh "ls -Art --directory ${__releases_directory}/** | tail -n 2 | head -n 1" 2>&1)
    readonly __rollback_revision=$(_ssh "cat ${__rollback_release_directory}/REVISION" 2>&1)
  }

  _log::info "Initial check"
  _check_ssh
  _check_releases
  _set_assets
}


_rollback::publish() {
  _set_symlink() {
    _ssh "rm -r ${__current_directory}"
    _ssh "ln -s ${__rollback_release_directory} ${__current_directory}"
    _ssh "rm -r ${__current_release_directory}"
  }

  _confirm "You are about to rollback from revision ${__current_revision} to ${__rollback_revision} on ${__warning}${__server}:${__deploy_to}${__nocolor}"
  _log::info "Rolling back"
  _set_symlink
}


_rollback::finish() {
  _log::info "Finished rollback from revision ${__current_revision} to ${__rollback_revision}"
}


# Deployment flow
################################################################################

if "${rollback}"; then
  _rollback::start
  _rollback::publish
  _rollback::finish
else
  _deploy::start
  _deploy::update
  _deploy::publish
  _deploy::clean
  _deploy::finish
fi
