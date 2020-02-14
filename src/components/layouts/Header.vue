<template>
  <TransitionFadeY>
    <header
      v-if="scrolledOut"
      class="app-header o-container o-container--full u-pt-x4 u-fixed u-12/12 o-type-s u-weight-medium  u-zindex-header"
    >
      <div class="o-media o-media--middle u-overflow-hidden">
        <div
          class="app-header__item o-media__fixed"
        >
          <nuxt-link
            key="logo"
            :to="localePath('index')"
            :aria-label="$t('links.index')"
            class="c-link u-color-foreground"
            :class="[$store.state.theme === 'light' ? 'u-color-foreground' : 'u-color-background']"
            @click.native="clickedIndex = 0"
          >
            <SvgLogo class="app-header__logo u-block" />
          </nuxt-link>
        </div>

        <nuxt-link
          key="name"
          :to="localePath('index')"
          class="app-header__item o-media__fluid u-pl c-link u-color-foreground"
          :class="[$store.state.theme === 'light' ? 'u-color-foreground' : 'u-color-background']"
          @click.native="clickedIndex = 1"
        >
          Léonard Lecouey
        </nuxt-link>

        <nav
          key="nav"
          class="o-media__fluid u-text-right"
        >
          <ul class="o-list o-list--inline">
            <li
              v-for="(item, index) in menu"
              :key="item"
              class="app-header__item o-list__item"
              @click="clickedIndex = index + 2"
            >
              <nuxt-link
                :to="localePath(item)"
                class="c-link"
                :class="[$store.state.theme === 'light' ? 'c-link--foreground' : 'c-link--background']"
              >
                {{ $t(`links.${item}`) }}
              </nuxt-link>
            </li>

            <template v-for="(locale, index) in $i18n.locales">
              <li
                v-if="locale.code !== $i18n.locale"
                :key="locale.code"
                class="app-header__item o-list__item"
                @click="clickedIndex = menu.length + index + 1"
              >
                <a
                  class="c-link"
                  :class="[$store.state.theme === 'light' ? 'c-link--foreground' : 'c-link--background']"
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
import gsap from 'gsap';
import { mapState } from 'vuex';
import { ease } from '~/components/transitions';
import TransitionFadeY from '~/components/transitions/FadeY';
import SvgLogo from '~/assets/svg/logo.svg?inline';

const animeHeader = {
  targets: '.app-header__item',
  duration: 1,
  stagger: 0.2,
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
      const timeoutAnime = 10;
      setTimeout(() => {
        gsap.to(animeHeader.targets, {
          duration: animeHeader.duration,
          ease: ease.leave,
          yPercent: isLoading ? 150 : 0,
          stagger: {
            amount: animeHeader.stagger,
            from: this.clickedIndex,
            grid: 'auto',
          },
        });
      }, timeoutAnime);
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
      const timeoutLoading = 1000;
      this.$store.commit('updateLoading', true);
      setTimeout(() => {
        this.$router.push(this.switchLocalePath(localeCode));
        setTimeout(() => {
          this.$store.commit('updateLoading', false);
        }, timeoutLoading);
      }, timeoutLoading);
    },
  },
};
</script>


<style lang="scss">
.app-header__logo {
  width: 30px;
  height: 30px;
}
</style>
