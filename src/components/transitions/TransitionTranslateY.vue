<template>
  <Component
    :is="componentType"
    :tag="tag"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <slot />
  </Component>
</template>

<script>
import gsap from 'gsap';
import { ease } from '~/components/transitions';
import mixins from '~/components/transitions/mixins';

export default {
  mixins: [mixins],

  methods: {
    beforeEnter(el) {
      gsap.set(el, {
        opacity: 0,
        yPercent: 100,
      });
    },

    enter(el, done) {
      gsap.to(el, {
        duration: this.durationEnter,
        ease: ease.enter,
        opacity: 1,
        yPercent: 0,
        onComplete: done,
      });
    },

    leave(el, done) {
      gsap.to(el, {
        duration: this.durationLeave,
        ease: ease.leave,
        opacity: 0,
        yPercent: 100,
        onComplete: done,
      });
    },
  },
};
</script>
