<template>
  <div
    ref="cursor"
    class="app-cursor u-hidden@xs u-text-center u-zindex-cursor"
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
import gsap from 'gsap';
import TransitionCollapseY from '~/components/transitions/CollapseY';

const animeCursor = {
  scaleSize: 1.4,
  duration: {
    move: 0.3,
    scale: 0.3,
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
      gsap.to(this.$refs.cursor, {
        duration: animeCursor.duration.move,
        x: event.clientX,
        y: event.clientY,
      });

      // onMouseHover
      if (this.linkElement.includes(event.target.localName) && !this.isHoverLink) {
        this.onMouseEnter(event);
      }

      // onMouseLeave
      if (!this.linkElement.includes(event.target.localName) && this.isHoverLink) {
        this.onMouseLeave();
      }

      // set action text position
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

    onMouseEnter(event) {
      this.isHoverLink = true;

      gsap.to(this.$refs.dot, {
        duration: animeCursor.duration.scale,
        ease: 'back.out(4)',
        scale: animeCursor.scaleSize,
      });

      // display action message if any
      if (event.target.dataset.cursor) {
        this.actionText = event.target.dataset.cursor;
      }
    },

    onMouseLeave() {
      this.isHoverLink = false;

      gsap.to(this.$refs.dot, {
        duration: animeCursor.duration.scale,
        scale: 1,
      });

      this.actionText = null;
    },

    onClick() {
      if (this.isHoverLink) {
        gsap.fromTo(this.$refs.dot, {
          scale: animeCursor.scale * 1.1,
        },
        {
          duration: animeCursor.duration.scale,
          scale: 1,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$cursor-size: 30px;

.app-cursor {
  position: fixed;
  top: -$cursor-size/2;
  left: -$cursor-size/2;
  width: $cursor-size;
  height: $cursor-size;
  user-select: none;
  pointer-events: none;
}

.app-cursor__dot {
  width: 100%;
  height: 100%;
  border-color: $color-accent-primary;
  border-style: solid;
  border-width: 1.5px;
  border-radius: 100%;
}
</style>
