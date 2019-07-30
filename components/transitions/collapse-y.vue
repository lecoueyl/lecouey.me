<template>
  <div class="u-overflow-hidden u-inline-block">
    <Component
      :is="componentType"
      :tag="tag"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <slot />
    </Component>
  </div>
</template>

<script>
import anime from 'animejs';
import { easeEnter, easeLeave } from '~/components/transitions';
import mixins from '~/components/transitions/mixins';

// const tl = new TimelineMax();

export default {
  mixins: [mixins],

  methods: {
    beforeEnter(el) {
      anime({
        targets: el,
        opacity: 0,
        translateY: '100%',
        duration: 0,
      });
    },

    enter(el, done) {
      anime({
        targets: el,
        duration: this.durationEnter,
        easing: easeEnter,
        translateY: 0,
        opacity: 1,
        complete: () => done(),
      });
    },

    leave(el, done) {
      anime({
        targets: el,
        duration: this.durationLeave,
        easing: easeLeave,
        translateY: '100%',
        opacity: 0,
        complete: () => done(),
      });
    },
  },
};
</script>
