<template>
  <div
    class="fixed inset-0 z-50 bg-background"
    data-gsap="loading"
  >
    <div class="flex justify-center items-center w-full h-full">
      <ul class="text-4xl sm:text-7xl">
        <li
          v-for="i in 4"
          :key="i"
        >
          <span
            class="block"
            data-gsap="loading-item"
          >
            {{ $t('head.title') }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import { ease } from '~/components/transition';

export default {
  beforeDestroy() {
    this.$nuxt.$off('loading');
  },

  async mounted() {
    this.$nuxt.$on('loading', (state) => (state ? this.start() : this.finish()));

    await this.start();
    await this.finish();
  },

  methods: {
    async start() {
      this.$store.commit('setLoading', true);
      await gsap.set('[data-gsap="loading-item"]', {
        opacity: 0,
        rotate: 5,
        transformOrigin: 'left bottom',
        yPercent: 100,
      });

      await gsap.timeline()
        .to('[data-gsap="loading"]', {
          autoAlpha: 1,
          duration: 0.4,
          ease: ease.enter,
        })
        .to('[data-gsap="loading-item"]', {
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
        .to('[data-gsap="loading-item"]', {
          delay: 0.6,
          duration: 0.6,
          ease: ease.leave,
          opacity: 0,
          rotate: 5,
          stagger: 0.1,
          transformOrigin: 'top right',
          yPercent: -100,
        })
        .to('[data-gsap="loading"]', {
          autoAlpha: 0,
          duration: 0.5,
        }, '-=0.2');
      this.$store.commit('setLoading', false);
    },
  },
};
</script>
