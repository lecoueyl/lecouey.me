<template>
  <TransitionFadeY>
    <header
      v-if="scrolledOut"
      class="fixed z-40 w-full left-0 top-0 right-0 px-4 py-4 sm:px-6 sm:py-8 xl:px-12"
    >
      <div class="flex items-center font-medium text-lg overflow-hidden">
        <div class="gsap-header__item flex items-center">
          <nuxt-link
            key="logo"
            :to="localePath('index')"
            :aria-label="$t('links.index')"
            class="inline-block"
            @click.native="clickedIndex = 0"
          >
            <SvgLogo class="block w-8 h-8" />
          </nuxt-link>
        </div>

        <div class="gsap-header__item flex-grow pl-2">
          <nuxt-link
            key="name"
            :to="localePath('index')"
            @click.native="clickedIndex = 1"
          >
            {{ $t('head.title') }}
          </nuxt-link>
        </div>

        <nav key="nav">
          <ul class="flex gap-4">
            <li
              v-for="(item, index) in menu"
              :key="item"
              class="gsap-header__item"
              @click="clickedIndex = index + 2"
            >
              <nuxt-link
                :to="localePath(item)"
                class=""
              >
                {{ $t(`links.${item}`) }}
              </nuxt-link>
            </li>

            <template v-for="(locale, index) in $i18n.locales">
              <li
                v-if="locale.code !== $i18n.locale"
                :key="locale.code"
                class="gsap-header__item"
                @click="clickedIndex = menu.length + index + 1"
              >
                <button
                  class="font-medium"
                  @click="switchLocale(locale.code)"
                >
                  {{ locale.name }}
                </button>
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
import { ease } from '~/components/transition';
import SvgLogo from '~/assets/svg/logo.svg?inline';

const animeHeader = {
  targets: '.gsap-header__item',
  duration: 1,
  stagger: 0.3,
  yPercent: 150,
};

export default {
  components: {
    SvgLogo,
  },

  data: () => ({
    clickedIndex: 0,
    currentScrollPosition: 0,
    menu: ['about'],
    scrolledOut: true,
  }),

  watch: {
    '$store.state.pageTransitioning': {
      handler(newValue) {
        if (this.$store.state.loading) return;
        this.animeMenu(!newValue);
      },
    },
    '$store.state.loading': {
      handler(newValue) {
        this.animeMenu(!newValue);
      },
    },
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  mounted() {
    gsap.set(animeHeader.targets, {
      rotate: 5,
      transformOrigin: 'left bottom',
      yPercent: animeHeader.yPercent,
    });
  },

  methods: {
    animeMenu(show = true) {
      // set timeout to handle menu item index position
      const timeoutAnime = 100;
      setTimeout(() => {
        gsap.to(animeHeader.targets, {
          duration: animeHeader.duration,
          ease: ease.leave,
          rotate: show ? 0 : 5,
          stagger: {
            amount: animeHeader.stagger,
            from: this.clickedIndex,
            grid: 'auto',
          },
          transformOrigin: 'left bottom',
          yPercent: show ? 0 : animeHeader.yPercent,
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
      this.$nuxt.$emit('start');
      setTimeout(() => {
        this.$router.push(this.switchLocalePath(localeCode));
        setTimeout(() => {
          this.$nuxt.$emit('finish');
        }, timeoutLoading);
      }, timeoutLoading);
    },
  },
};
</script>
