<template>
  <div
    ref="container"
    class="c-intro u-fixed u-top u-right u-bottom u-left u-zindex-loader u-bgcolor-background u-12/12"
  >
    <section class="u-table u-relative u-height-100p u-height-100p u-12/12">
      <ul class="c-intro__list u-table-cell o-list o-list--block u-text-center">
        <li
          v-for="i in 4"
          :key="i"
          class="o-list__item o-type-l u-bgcolor-background u-overflow-hidden"
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
    gsap.to('.c-intro__item', {
      ease: ease.leave,
      yPercent: 110,
      rotate: 5,
    });
  },

  mounted() {
    gsap.timeline({ onComplete: () => this.$emit('introFinished') })
      .to('.c-intro__item', {
        duration: 0.6,
        delay: 0.6,
        ease: ease.leave,
        yPercent: 0,
        rotate: 0,
        stagger: 0.1,
      })
      .to('.c-intro__item', {
        duration: 0.6,
        delay: 0.6,
        ease: ease.leave,
        yPercent: -110,
        rotate: -5,
        stagger: 0.1,
      });
  },
};
</script>

<style lang="scss" scoped>
.c-intro__list {
  vertical-align: middle;
}
</style>
