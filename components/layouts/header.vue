<template>
  <TransitionFadeY :duration="{ enter: 800, leave: 1000 }">
    <header
      v-if="scrolledOut"
      class="app-header o-container o-container--full u-pt-x4 u-fixed u-12/12 o-type-s u-weight-medium"
    >
      <div class="o-media o-media--middle u-overflow-hidden">
        <div
          class="app-header__item o-media__fixed"
          @click="clickedIndex = 0"
        >
          <nuxt-link
            key="logo"
            :to="localePath('index')"
            :aria-label="$t('links.index')"
            class="c-link u-color-foreground"
          >
            <SvgLogo class="app-header__logo u-block" />
          </nuxt-link>
        </div>

        <nuxt-link
          key="logo"
          :to="localePath('index')"
          :aria-label="$t('links.index')"
          class="app-header__item o-media__fluid u-pl c-link u-color-foreground"
        >
          Léonard Lecouey
        </nuxt-link>

        <nav
          key="nav"
          class="o-media__fluid u-text-right"
        >
          <ul class="o-list o-list--inline">
            <!-- v-if="!$nuxt.$route.path.includes('about')" -->
            <li
              v-for="(item, index) in menu"
              :key="item"
              class="app-header__item o-list__item"
              @click="clickedIndex = index + 1"
            >
              <nuxt-link
                :to="localePath(item)"
                class="c-link c-link--foreground"
              >
                {{ $t(`links.${item}`) }}
              </nuxt-link>
            </li>
            <!-- <li
              v-if="!$nuxt.$route.path.includes('about')"
              class="o-list__item">
              <nuxt-link
                v-t="'links.about'"
                :to="localePath('about')"
                class="c-link c-link--foreground" />
            </li>

            <li
              v-if="$nuxt.$route.path.includes('about')"
              class="o-list__item">
              <nuxt-link
                v-t="'links.back'"
                :to="localePath('index')"
                class="c-link c-link--foreground" />
            </li> -->

            <!-- <li class="o-list__item">
              —
            </li> -->
            <template v-for="(locale, index) in $i18n.locales">
              <li
                v-if="locale.code !== $i18n.locale"
                :key="locale.code"
                class="app-header__item o-list__item"
                @click="clickedIndex = menu.length + index + 1"
              >
                <a
                  class="c-link c-link--foreground"
                  data-cursor="translate"
                  @click="switchLocale(locale.code)"
                >
                  {{ locale.name }}
                </a>
              </li>
            </template>
          </ul>
        </nav>
      </div>
    </header>
  </TransitionFadeY>
</template>


<script>
import anime from 'animejs';
import { mapState } from 'vuex';
import { easeLeave } from '~/components/transitions';
import TransitionFadeY from '~/components/transitions/fade-y';
import SvgLogo from '~/assets/svg/logo.svg?inline';

const animeHeader = {
  targets: '.app-header__item',
  duration: 800,
  stagger: 200,
};

export default {
  components: {
    TransitionFadeY,
    SvgLogo,
  },

  data() {
    return {
      menu: [
        'about',
      ],
      currentScrollPosition: 0,
      scrolledOut: true,
      clickedIndex: 0,
    };
  },

  computed: mapState([
    'loading',
  ]),

  watch: {
    loading(isLoading) {
      // hide or show header's item
      anime({
        targets: animeHeader.targets,
        translateY: isLoading ? '110%' : 0,
        easing: easeLeave,
        duration: animeHeader.duration,
        delay: anime.stagger(animeHeader.stagger, { from: this.clickedIndex }),
      });
      // if (loading) {
      //   anime({
      //     targets: animeHeader.targets,
      //     translateY: '-100%',
      //     opacity: 0,
      //     easing: easeLeave,
      //     duration: animeHeader.duration,
      //     delay: anime.stagger(animeHeader.stagger),
      //   });
      // } else {
      //   anime({
      //     targets: animeHeader.targets,
      //     translateY: 0,
      //     opacity: 1,
      //     easing: easeEnter,
      //     duration: animeHeader.duration,
      //     delay: anime.stagger(animeHeader.stagger),
      //   });
      // }
    },
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      if ((window.scrollY > this.currentScrollPosition) && this.currentScrollPosition > 0) {
        this.scrolledOut = false;
      } else {
        this.scrolledOut = true;
      }
      this.currentScrollPosition = window.scrollY;
    },

    switchLocale(localeCode) {
      const loadingTimeout = 1000;
      this.$store.commit('updateLoading', true);
      setTimeout(() => {
        this.$router.push(this.switchLocalePath(localeCode));
        setTimeout(() => {
          this.$store.commit('updateLoading', false);
        }, loadingTimeout);
      }, loadingTimeout);
    },
  },
};
</script>


<style lang="scss">
.app-header {
  z-index: map-get($iota-global-zindex, header);
}

.app-header__logo {
  width: 30px;
  height: 30px;
}

.app-header__logo path {
  fill: $color-foreground;
}
</style>
