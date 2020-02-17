<template>
  <div
    ref="cursor"
    class="app-cursor u-hidden@xs u-zindex-cursor"
  >
    <div
      ref="dot"
      class="app-cursor__dot"
    />
  </div>
</template>

<script>
import gsap from 'gsap';

const cursor = {
  scale: 1.4,
  duration: {
    move: 0.3,
    scale: 0.4,
  },
};

export default {
  data() {
    return {
      isHoverLink: false,
      linkElement: [
        'button',
        'a',
      ],
    };
  },

  beforeMount() {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mousedown', this.onMouseDown);
    document.addEventListener('mouseup', this.onMouseUp);
  },

  beforeDestroy() {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mousedown', this.onMouseDown);
    document.removeEventListener('mouseup', this.onMouseUp);
  },

  methods: {
    onMouseMove(event) {
      // show cursur if inside the dom
      if (this.isOutsideDom) {
        this.isOutsideDom = false;
        this.scaleCursor(1);
      }

      // hide cursor when exiting the window
      if (event.clientY <= 0
         || event.clientX <= 0
         || (event.clientX + 20 >= window.innerWidth || event.clientY + 20 >= window.innerHeight)) {
        this.isOutsideDom = true;
        this.scaleCursor(0);
      }

      // move cursor
      gsap.to(this.$refs.cursor, {
        duration: cursor.duration.move,
        x: event.clientX,
        y: event.clientY,
      });

      // onMouseEnter
      if (this.linkElement.includes(event.target.localName) && !this.isHoverLink) {
        this.onMouseEnter();
      }

      // onMouseLeave
      if (!this.linkElement.includes(event.target.localName) && this.isHoverLink) {
        this.onMouseLeave();
      }
    },

    onMouseEnter() {
      this.isHoverLink = true;
      this.scaleCursor(cursor.scale);
    },

    onMouseLeave() {
      this.isHoverLink = false;
      this.scaleCursor(1);
    },

    onMouseDown() {
      const scale = this.isHoverLink ? cursor.scale * 1.2 : 0.8;
      this.scaleCursor(scale);
    },

    onMouseUp() {
      const scale = this.isHoverLink ? cursor.scale : 1;
      this.scaleCursor(scale);
    },

    scaleCursor(scale) {
      gsap.to(this.$refs.dot, {
        duration: cursor.duration.scale,
        ease: 'back.out(3)',
        scale,
      });
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
  mix-blend-mode: multiply;
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
