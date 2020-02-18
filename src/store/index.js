/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  chatThread: [],
  loading: false,
  showMenu: false,
});

export const mutations = {
  updateChatThread: (state, message) => {
    state.chatThread.push(message);
  },
  updateLoading: (state, status) => {
    state.loading = status;
  },
  updateShowMenu: (state, status) => {
    state.showMenu = status;
  },
};
