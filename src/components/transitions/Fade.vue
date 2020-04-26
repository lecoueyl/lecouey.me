<template>
  <Component
    :is="componentType"
    :tag="tag"
    @enter="enter"
    @leave="leave"
    @css="false"
  >
    <slot />
  </Component>
</template>

<script>
import gsap from 'gsap';
import mixins from '~/components/transitions/mixins';

export default {
  mixins: [mixins],

  methods: {
    enter(el, done) {
      gsap.fromTo(el, {
        opacity: 0,
      },
      {
        duration: this.durationEnter,
        opacity: 1,
        onComplete: done,
      });
    },

    leave(el, done) {
      gsap.to(el, {
        duration: this.durationEnter,
        opacity: 0,
        onComplete: done,
      });
    },
  },
};
</script>
