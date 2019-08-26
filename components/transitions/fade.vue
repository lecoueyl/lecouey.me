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
import anime from 'animejs';
import mixins from '~/components/transitions/mixins';

export default {
  mixins: [mixins],

  methods: {
    enter(el, done) {
      anime({
        targets: el,
        opacity: [0, 1],
        duration: this.durationEnter,
        easing: 'linear',
        complete: done,
      });
    },

    leave(el, done) {
      anime({
        targets: el,
        opacity: 0,
        duration: this.durationEnter,
        easing: 'linear',
        complete: done,
      });
    },
  },
};
</script>
