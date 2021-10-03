<template>
  <div
    ref="pointer"
    class="hidden fixed inset-0 -left-5 -top-5 w-10 h-10 select-none pointer-events-none sm:block"
  >
    <div
      ref="dot"
      class="w-full h-full border-2 border-primary rounded-full"
    />
  </div>
</template>

<script>
import gsap from 'gsap';

const pointer = {
  scale: 1.4,
  duration: {
    move: 0.3,
    scale: 0.4,
  },
};

export default {
  data() {
    return {
      isHoverActionElement: false,
      actionElements: [
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
      // onMouseEnter
      if (actionElement && !this.isHoverActionElement) {
        this.onMouseEnter(actionElement);
      }

      // onMouseLeave
      if (!actionElement && this.isHoverActionElement) {
        this.onMouseLeave();
      }
    },

    onMouseEnter(element) {
      if (element.getAttribute('disabled')) return;

      this.isHoverActionElement = true;
      this.scalePointer(pointer.scale);
    },

    onMouseLeave() {
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
      gsap.to(this.$refs.dot, {
        duration: pointer.duration.scale,
        ease: 'back.out(3)',
        scale,
      });
    },
  },
};
</script>
