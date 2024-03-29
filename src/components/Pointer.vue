<template>
  <div
    ref="pointer"
    class="fixed inset-0 -top-5 -left-5 w-10 h-10 pointer-events-none select-none sm:block"
  >
    <div class="flex relative justify-center items-center w-full h-full text-primary">
      <div
        ref="cursor"
        class="w-full h-full rounded-full border-2 border-primary"
      />
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

const pointer = {
  duration: {
    move: 0.3,
    scale: 0.4,
  },
  scale: 1.4,
};

export default {
  data: () => ({
    actionElements: [
      'a',
      'button',
    ],
    isHoverActionElement: false,
    pointerShape: 'default',
  }),

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
      // show pointer if inside the dom
      if (this.isOutsideDom) {
        this.isOutsideDom = false;
        this.scalePointer(1);
      }

      // hide pointer when exiting the window
      if (event.clientY <= 0
         || event.clientX <= 0
         || (event.clientX + 20 >= window.innerWidth
         || event.clientY + 20 >= window.innerHeight)
      ) {
        this.isOutsideDom = true;
        this.scalePointer(0);
      }

      // move pointer
      gsap.to(this.$refs.pointer, {
        duration: pointer.duration.move,
        x: event.clientX,
        y: event.clientY,
      });

      const actionElement = event.target.closest(this.actionElements.join(','));
      this.onMouseEnter(actionElement);
      this.onMouseLeave(actionElement);
      this.setCursorShape(event.target);
    },

    onMouseEnter(actionElement) {
      if (!actionElement) return;
      if (this.isHoverActionElement) return;
      if (actionElement.getAttribute('disabled')) return;

      this.isHoverActionElement = true;
      this.scalePointer(pointer.scale);
    },

    onMouseLeave(actionElement) {
      if (!this.isHoverActionElement) return;
      if (actionElement) return;

      this.isHoverActionElement = false;
      this.scalePointer(1);
    },

    onMouseDown() {
      const scale = this.isHoverActionElement ? pointer.scale * 1.2 : 0.8;
      this.scalePointer(scale);
    },

    onMouseUp() {
      const scale = this.isHoverActionElement ? pointer.scale : 1;
      this.scalePointer(scale);
    },

    scalePointer(scale) {
      gsap.to(this.$refs.cursor, {
        duration: pointer.duration.scale,
        ease: 'back.out(3)',
        scale,
      });
    },

    setCursorShape(target) {
      // move
      if (target.closest('[data-pointer="move"]')) {
        this.pointerShape = 'move';
        gsap.to(this.$refs.cursor, {
          duration: pointer.duration.scale,
          ease: 'back.out(3)',
          height: '50%',
        });
      } else if (this.pointerShape === 'move') {
        gsap.to(this.$refs.cursor, {
          duration: pointer.duration.scale,
          ease: 'back.out(3)',
          height: '100%',
        });
        this.pointerShape = 'default';
      }
    },
  },
};
</script>
