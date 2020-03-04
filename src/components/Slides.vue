<template>
  <section
    ref="slides"
    class="c-slides u-mt_-x10"
  >
    <article class="o-type-m c-slides__panel u-6/12@xs u-3/12@sm u-inline-block u-mr-x2 u-pl-x2@xs u-pl-x4@sm u-pl-x6@md">
      What I can do
    </article>

    <article
      v-for="type in ['frontend', 'backend', 'design', 'frontend1', 'backend1', 'design1']"
      :key="type"
      class="c-slides__panel u-8/12@xs u-4/12@sm u-inline-block u-pr-x2@xs u-pr-x4@sm u-pr-x6@md"
    >
      <div class="u-p-x4 u-bgcolor-secondary">
        <h2 class="o-type-m u-weight-normal u-color-background u-pt-x10">
          {{ type }}
        </h2>

        <div
          class="u-mv-x2 u-bgcolor-background"
          style="height: 0.1rem;"
        />

        <p class="o-type-s u-color-background">
          {{ type }}
        </p>
      </div>
    </article>
  </section>
</template>

<script>
import gsap from 'gsap';

let slidePosition = 0;

export default {
  data() {
    return {
      mouseDownPositionX: null,
      sliderWidth: 0,
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

  mounted() {
    this.setSlidesWidth();
  },

  methods: {
    setSlidesWidth() {
      const slides = this.$refs.slides.getElementsByClassName('c-slides__panel');
      Array.from(slides).forEach((slide) => {
        this.sliderWidth += slide.clientWidth;
      });
    },

    onMouseMove(event) {
      // move cursor
      if (this.mouseDownPositionX) {
        const dragDistance = event.clientX - this.mouseDownPositionX;
        slidePosition += dragDistance * 0.05;

        if (slidePosition > 0) {
          slidePosition = 0;
        }

        if (slidePosition < this.sliderWidth * -1) {
          slidePosition = this.sliderWidth * -1;
        }
        console.log('dragDistance', this.sliderWidth * -1);
        console.log('slidePosition', slidePosition);
        // console.log(dragDistance, slidePosition);
        gsap.to('.c-slides__panel', {
          duration: 0.3,
          x: slidePosition,
          ease: 'expo.out',
        });
      }
    },

    onMouseDown(event) {
      this.mouseDownPositionX = event.clientX;
    },

    onMouseUp() {
      this.mouseDownPositionX = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.c-slides {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  scroll-behavior: smooth;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -webkit-overflow-scrolling: touch;
  user-select: none;
}

.c-slides::-webkit-scrollbar {
  display: none;
}

.c-slides__panel {
  scroll-snap-align: start;
}
</style>
