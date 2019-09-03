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
        v-if="actionText"
        ref="actionText"
        class="o-type-s u-color-primary"
      >
        {{ actionText }}
      </div>
    </TransitionCollapseY>
  </div>
</template>

<script>
import anime from 'animejs';
import TransitionCollapseY from '~/components/transitions/collapse-y';

const animeCursor = {
  dotScale: 1.5,
  duration: {
    translate: 300,
    scale: 800,
  },
};

export default {
  components: {
    TransitionCollapseY,
  },

  data() {
    return {
      actionText: null,
      actionPosition: null,
      isHoverLink: false,
      linkElement: [
        'button',
        'a',
      ],
    };
  },

  beforeMount() {
    window.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('click', this.onClick);
  },

  beforeDestroy() {
    window.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('click', this.onClick);
  },

  methods: {
    onMouseMove(event) {
      anime({
        targets: this.$refs.cursor,
        translateX: event.clientX,
        translateY: event.clientY,
        translateZ: 0,
        easing: 'easeOutQuart',
        duration: animeCursor.duration.translate,
      });

      // active cursor
      if (this.isMouseHoverLink(event)) {
        this.onMouseEnter(event);
      }

      // reset cursor
      if (!this.linkElement.includes(event.target.localName) && this.isHoverLink) {
        this.onMouseLeave();
      }

      // action message position
      if (this.actionText) {
        this.$nextTick(() => {
          const isElementOut = this.isOutOfViewport(this.$refs.actionText);
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

    isMouseHoverLink(event) {
      return this.linkElement.includes(event.target.localName) && !this.isHoverLink;
    },

    onMouseEnter(event) {
      this.isHoverLink = true;

      anime({
        targets: this.$refs.dot,
        scale: animeCursor.dotScale,
        duration: animeCursor.duration.scale,
      });

      // display action message if any
      if (event.target.dataset.cursor) {
        this.actionText = event.target.dataset.cursor;
      }
    },

    onMouseLeave() {
      this.isHoverLink = false;

      anime({
        targets: this.$refs.dot,
        scale: 1,
        duration: animeCursor.duration.scale,
      });

      this.actionText = null;
    },

    onClick() {
      if (this.isHoverLink) {
        anime({
          targets: this.$refs.dot,
          scale: [animeCursor.dotScale * 1.1, 1],
          duration: animeCursor.duration.scale,
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
  border-width: 1.5px;
  border-style: solid;
  border-color: $color-accent-primary;
  border-radius: 100%;
}
</style>
