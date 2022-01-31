<template>
  <TransitionFadeY>
    <header
      v-if="scrolledOut"
      class="fixed inset-x-0 z-40 p-4 sm:py-8 sm:px-6 xl:px-12 w-full"
    >
      <div class="flex overflow-hidden items-center text-lg font-medium">
        <div
          class="flex items-center"
          data-gsap="nav-item"
        >
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

        <div
          class="flex-grow pl-2"
          data-gsap="nav-item"
        >
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
              data-gsap="nav-item"
              @click="clickedIndex = index + 2"
            >
              <nuxt-link :to="localePath(item)">
                {{ $t(`links.${item}`) }}
              </nuxt-link>
            </li>

            <template v-for="(locale, index) in $i18n.locales">
              <li
                v-if="locale.code !== $i18n.locale"
                :key="locale.code"
                data-gsap="nav-item"
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
  targets: '[data-gsap="nav-item"]',
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
      this.$nuxt.$emit('loading', true);
      setTimeout(() => {
        this.$router.push(this.switchLocalePath(localeCode));
        setTimeout(() => {
          this.$nuxt.$emit('loading', false);
        }, timeoutLoading);
      }, timeoutLoading);
    },
  },
};
</script>
