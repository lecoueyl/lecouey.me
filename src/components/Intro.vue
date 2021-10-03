<template>
  <div class="g-intro fixed inset-0 z-50 bg-background">
    <div class="flex items-center justify-center w-full h-full">
      <ul class="text-4xl sm:text-7xl">
        <li
          v-for="i in 4"
          :key="i"
        >
          <span class="g-intro__item block">{{ $t('head.title') }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import { ease } from '~/components/transition';

export default {
  mounted() {
    gsap.set('.g-intro__item', {
      yPercent: 100,
      rotate: 5,
      opacity: 0,
      transformOrigin: 'left bottom',
    });

    gsap.set('.c-intro__list', {
      opacity: 1,
    });

    gsap.timeline({ onComplete: () => this.$store.commit('setIntroFinished') })
      .to('.g-intro__item', {
        duration: 0.6,
        delay: 0.6,
        ease: ease.leave,
        stagger: {
          from: 'end',
          amount: 0.2,
        },
        yPercent: 0,
        rotate: 0,
        opacity: 1,
      })
      .to('.g-intro__item', {
        duration: 0.6,
        delay: 0.6,
        ease: ease.leave,
        stagger: 0.1,
        yPercent: -100,
        rotate: 5,
        opacity: 0,
        transformOrigin: 'top right',
      })
      .to('.g-intro', {
        duration: 1,
        ease: ease.leave,
        autoAlpha: 0,
      }, '-=0.4');
  },
};
</script>
