<template>
  <TransitionFadeY>
    <header
      v-if="scrolledOut"
      class="c-header o-container o-container--full u-pt-x2@xs u-pt-x4@sm u-pt-x6@md u-fixed u-12/12 o-type-s u-weight-medium u-zindex-header"
    >
      <div class="o-media o-media--middle u-overflow-hidden">
        <div
          class="c-header__item o-media__fixed"
        >
          <nuxt-link
            key="logo"
            :to="localePath('index')"
            :aria-label="$t('links.index')"
            class="c-link u-color-foreground u-block"
            @click.native="clickedIndex = 0"
          >
            <SvgLogo class="c-header__logo u-block" />
          </nuxt-link>
        </div>

        <div class="c-header__item o-media__fluid u-pl">
          <nuxt-link
            key="name"
            :to="localePath('index')"
            class="c-link u-color-foreground"
            @click.native="clickedIndex = 1"
          >
            {{ $t('head.title') }}
          </nuxt-link>
        </div>

        <nav
          key="nav"
          class="o-media__fluid u-text-right"
        >
          <ul class="o-list o-list--inline">
            <li
              v-for="(item, index) in menu"
              :key="item"
              class="c-header__item o-list__item"
              @click="clickedIndex = index + 2"
            >
              <nuxt-link
                :to="localePath(item)"
                class="c-link c-link--foreground"
              >
                {{ $t(`links.${item}`) }}
              </nuxt-link>
            </li>

            <template v-for="(locale, index) in $i18n.locales">
              <li
                v-if="locale.code !== $i18n.locale"
                :key="locale.code"
                class="c-header__item o-list__item"
                @click="clickedIndex = menu.length + index + 1"
              >
                <a
                  class="c-link c-link--foreground"
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
import gsap from 'gsap';
import { mapState } from 'vuex';
import { ease } from '~/components/transitions';
import TransitionFadeY from '~/components/transitions/FadeY';
import SvgLogo from '~/assets/svg/logo.svg?inline';

const animeHeader = {
  targets: '.c-header__item',
  duration: 1,
  stagger: 0.3,
  yPercent: 150,
};

export default {
  components: {
    TransitionFadeY,
    SvgLogo,
  },

  data() {
    return {
      currentScrollPosition: 0,
      scrolledOut: true,
      clickedIndex: 0,
      menu: ['about'],
    };
  },

  computed: mapState([
    'loading',
    'pageTransitioning',
  ]),

  watch: {
    pageTransitioning(showMenu) {
      this.animeMenu(!showMenu);
    },
    loading(loading) {
      this.animeMenu(!loading);
    },
  },

  beforeMount() {
    gsap.set(animeHeader.targets, {
      yPercent: animeHeader.yPercent,
      rotate: 5,
      transformOrigin: 'left bottom',
    });
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    animeMenu(show = true) {
      const timeoutAnime = 100;
      setTimeout(() => {
        gsap.to(animeHeader.targets, {
          duration: animeHeader.duration,
          ease: ease.leave,
          yPercent: show ? 0 : animeHeader.yPercent,
          rotate: show ? 0 : 5,
          transformOrigin: 'left bottom',
          stagger: {
            amount: animeHeader.stagger,
            from: this.clickedIndex,
            grid: 'auto',
          },
        });
      }, timeoutAnime);
    },

    handleScroll() {
      if ((window.scrollY > this.currentScrollPosition) && this.currentScrollPosition > 0) {
        this.scrolledOut = false;
      } else {
        this.scrolledOut = true;
      }
      this.currentScrollPosition = window.scrollY;
    },

    switchLocale(localeCode) {
      const timeoutLoading = 1000;
      this.$store.commit('setLoading', true);
      setTimeout(() => {
        this.$router.push(this.switchLocalePath(localeCode));
        setTimeout(() => {
          this.$store.commit('setLoading', false);
        }, timeoutLoading);
      }, timeoutLoading);
    },
  },
};
</script>

<style lang="scss">
.c-header__logo {
  width: 30px;
  height: 30px;
}
</style>
