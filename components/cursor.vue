<template>
  <div
    ref="cursor"
    class="app-cursor u-hidden@xs u-text-center"
  >
    <div
      ref="dot"
      class="app-cursor__dot"
    />
    <TransitionCollapseY :class="{ 'u-float-right': actionPosition === 'right' }">
      <div
        v-if="action"
        ref="action"
        class="o-type-s u-color-primary"
      >
        {{ action }}
      </div>
    </TransitionCollapseY>
  </div>
</template>


<script>
import anime from 'animejs';
import TransitionCollapseY from '~/components/transitions/collapse-y';

const animeDot = {
  scale: 1.5,
  duration: {
    move: 300,
    scale: 800,
  },
};

export default {
  components: {
    TransitionCollapseY,
  },

  data() {
    return {
      action: null,
      actionPosition: null,
      isHoverLink: false,
      linkElement: [
        'button',
        'a',
      ],
    };
  },

  beforeMount() {
    window.addEventListener('mousemove', this.moveCursor);
    document.addEventListener('click', this.onClick);
  },

  beforeDestroy() {
    window.removeEventListener('mousemove', this.moveCursor);
    document.removeEventListener('click', this.onClick);
  },

  methods: {
    moveCursor(event) {
      anime({
        targets: this.$refs.cursor,
        translateX: event.clientX,
        translateY: event.clientY,
        easing: 'easeOutQuart',
        duration: animeDot.duration.move,
      });

      // active cursor
      if (this.linkElement.includes(event.target.localName) && !this.isHoverLink) {
        // display action message if any
        if (event.target.dataset.cursor) {
          this.action = event.target.dataset.cursor;
        }

        // animate cursor
        anime({
          targets: this.$refs.dot,
          scale: animeDot.scale,
          duration: animeDot.duration.scale,
        });

        this.isHoverLink = true;
      }

      // reset cursor
      if (!this.linkElement.includes(event.target.localName) && this.isHoverLink) {
        anime({
          targets: this.$refs.dot,
          scale: 1,
          duration: animeDot.duration.scale,
        });

        this.isHoverLink = false;
        this.action = null;

        const delayResetPosition = 300;
        setTimeout(() => {
          this.actionPosition = null;
        }, delayResetPosition);
      }

      // action message position
      if (this.action) {
        this.$nextTick(() => {
          const isElementOut = this.isOutOfViewport(this.$refs.action);
          if (isElementOut.right && !this.actionPosition) {
            this.actionPosition = 'right';
          }
        });
      }
    },

    // https://gomakethings.com/how-to-check-if-any-part-of-an-element-is-out-of-the-viewport-with-vanilla-js
    isOutOfViewport(elem) {
      // get element's bound
      const bound = elem.getBoundingClientRect();

      // check if it's out of the viewport on each side
      return {
        top: bound.top < 0,
        left: bound.left < 0,
        bottom: bound.bottom > (window.innerHeight || document.documentElement.clientHeight),
        right: bound.right > (window.innerWidth || document.documentElement.clientWidth),
      };
    },

    onClick() {
      if (this.isHoverLink) {
        anime({
          targets: this.$refs.dot,
          scale: [animeDot.scale * 1.1, 1],
          duration: animeDot.duration.scale,
        });
      }
    },
  },
};
</script>


<style lang="scss">
.app-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  top: -10px;
  left: -10px;
  user-select: none;
  pointer-events: none;
  z-index: map-get($iota-global-zindex, cursor);
}

.app-cursor__dot {
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: $color-accent-primary;
  border-radius: 100%;
}
</style>
