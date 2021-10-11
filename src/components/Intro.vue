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
      opacity: 0,
      rotate: 5,
      transformOrigin: 'left bottom',
      yPercent: 100,
    });

    gsap.set('.c-intro__list', {
      opacity: 1,
    });

    gsap.timeline({ onComplete: () => this.$store.commit('setIntroFinished') })
      .to('.g-intro__item', {
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
      })
      .to('.g-intro__item', {
        delay: 0.6,
        duration: 0.6,
        ease: ease.leave,
        opacity: 0,
        rotate: 5,
        stagger: 0.1,
        transformOrigin: 'top right',
        yPercent: -100,
      })
      .to('.g-intro', {
        autoAlpha: 0,
        duration: 1,
        ease: ease.leave,
      }, '-=0.4');
  },
};
</script>
