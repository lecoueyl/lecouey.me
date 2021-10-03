<template>
  <Component
    :is="componentType"
    :tag="tag"
    :mode="mode"
    @enter="enter"
    @leave="leave"
    @css="false"
  >
    <slot />
  </Component>
</template>

<script>
import gsap from 'gsap';
import mixins from '~/components/transition/mixins';

export default {
  mixins: [mixins],

  methods: {
    enter(el, done) {
      gsap.fromTo(el, {
        opacity: 0,
        yPercent: -100,
      },
      {
        duration: this.durationEnter,
        opacity: 1,
        yPercent: 0,
        onComplete: done,
      });
    },

    leave(el, done) {
      gsap.to(el, {
        duration: this.durationLeave,
        opacity: 0,
        yPercent: -100,
        onComplete: done,
      });
    },
  },
};
</script>
