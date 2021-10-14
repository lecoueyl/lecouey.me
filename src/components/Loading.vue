<template>
  <div class="anim-loading fixed inset-0 z-50 bg-background">
    <div class="flex items-center justify-center w-full h-full">
      <ul class="text-4xl sm:text-7xl">
        <li
          v-for="i in 4"
          :key="i"
        >
          <span class="anim-loading__item block">{{ $t('head.title') }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import { ease } from '~/components/transition';

export default {
  created() {
    this.$nuxt.$on('start', () => this.start());
    this.$nuxt.$on('finish', () => this.finish());
  },

  beforeDestroy() {
    this.$nuxt.$off('start');
    this.$nuxt.$off('finish');
  },

  async mounted() {
    await this.start();
    await this.finish();
  },

  methods: {
    async start() {
      this.$store.commit('setLoading', true);
      await gsap.set('.anim-loading__item', {
        opacity: 0,
        rotate: 5,
        transformOrigin: 'left bottom',
        yPercent: 100,
      });

      await gsap.timeline()
        .to('.anim-loading', {
          autoAlpha: 1,
          duration: 0.4,
          ease: ease.enter,
        })
        .to('.anim-loading__item', {
          delay: 0.6,
          duration: 0.6,
          ease: ease.leave,
          opacity: 1,
          rotate: 0,
          stagger: {
            from: 'end',
            amount: 0.2,
          },
          yPercent: 0,
        });
    },

    async finish() {
      await gsap.timeline()
        .to('.anim-loading__item', {
          delay: 0.6,
          duration: 0.6,
          ease: ease.leave,
          opacity: 0,
          rotate: 5,
          stagger: 0.1,
          transformOrigin: 'top right',
          yPercent: -100,
        })
        .to('.anim-loading', {
          autoAlpha: 0,
          duration: 0.5,
        }, '-=0.2');
      this.$store.commit('setLoading', false);
    },
  },
};
</script>
