<template>
  <div class="c-intro u-fixed u-top u-right u-bottom u-left u-zindex-loader u-bgcolor-background u-12/12">
    <section class="u-table u-relative u-height-100p u-height-100p u-12/12">
      <ul class="c-intro__list u-table-cell o-list o-list--block u-text-center">
        <li
          v-for="i in 4"
          :key="i"
          class="o-list__item o-type-l u-bgcolor-background"
        >
          <span class="c-intro__item u-block">{{ $t('head.title') }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import gsap from 'gsap';
import { ease } from '~/components/transitions';

export default {
  beforeMount() {
    gsap.set('.c-intro__item', {
      yPercent: 100,
      rotate: 5,
      opacity: 0,
      transformOrigin: 'left bottom',
    });
    gsap.set('.c-intro__list', {
      opacity: 1,
    });
  },

  mounted() {
    gsap.timeline({ onComplete: () => this.$store.commit('updateIntroFinished', true) })
      .to('.c-intro__item', {
        duration: 0.6,
        delay: 0.6,
        ease: ease.leave,
        stagger: 0.1,
        yPercent: 0,
        rotate: 0,
        opacity: 1,
      })
      .to('.c-intro__item', {
        duration: 0.6,
        delay: 0.6,
        ease: ease.leave,
        stagger: 0.1,
        yPercent: -100,
        rotate: 5,
        opacity: 0,
        transformOrigin: 'top right',
      })
      .to('.c-intro', {
        duration: 1,
        ease: ease.leave,
        autoAlpha: 0,
      }, '-=0.6');
  },
};
</script>

<style lang="scss" scoped>
.c-intro__list {
  vertical-align: middle;
  opacity: 0;
}
</style>
