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
        translateY: ['-100%', 1],
        duration: this.durationEnter,
        complete: () => done(),
      });
    },

    leave(el, done) {
      anime({
        targets: el,
        opacity: 0,
        translateY: '-100%',
        duration: this.durationLeave,
        complete: () => done(),
      });
    },
  },
};
</script>
