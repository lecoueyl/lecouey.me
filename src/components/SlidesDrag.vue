<template>
  <section
    ref="slides"
    class="c-slides"
    @mousedown="onMouseDown($event)"
    @mouseup="onMouseUp()"
    @mousemove="onMouseMove($event)"
  >
    <article
      v-for="(skill, key, index) in $t('about.skills')"
      :key="key"
      class="c-slides__panel u-10/12@xs u-5/12@sm u-inline-block u-pl-x2@xs u-pl-x4@sm u-pl-x6@md"
      :class="{ 'u-pr-x2@xs u-pr-x4@sm u-pr-x6@md': index + 1 === Object.keys($t('about.skills')).length }"
    >
      <div
        class="u-relative u-height-100p"
        :class="[['frontend', 'backend', 'devops'].includes(key) ? 'u-bgcolor-tertiary' : 'u-bgcolor-quaternary']"
      >
        <div class="u-absolute u-bottom u-p-x4 u-12/12">
          <h2 class="o-type-m u-weight-normal u-color-background">
            {{ skill.title }}
          </h2>

          <div
            class="u-mv-x2 u-bgcolor-background"
            style="height: 0.1rem;"
          />

          <p
            class="c-slides__description o-type-s u-color-background"
            :style="{ height: maxDescriptionHeight }"
          >
            {{ skill.description }}
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import gsap from 'gsap/dist/gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

let slidePosition = 0;

export default {
  data() {
    return {
      mouseDownPositionX: null,
      slidesBoundaryWidth: 0,
      maxDescriptionHeight: 'auto',
    };
  },

  beforeMount() {
    window.addEventListener('resize', this.onWindowResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  },

  mounted() {
    this.setSlidesBoundaryWidth();
    this.setPanelDescriptionHeight();
  },

  methods: {
    setSlidesBoundaryWidth() {
      const slides = this.$refs.slides.getElementsByClassName('c-slides__panel');
      Array.from(slides).forEach((slide) => {
        this.slidesBoundaryWidth += slide.clientWidth;
      });
      this.slidesBoundaryWidth -= window.innerWidth;
    },

    setPanelDescriptionHeight() {
      const slides = this.$refs.slides.getElementsByClassName('c-slides__description');
      const descriptionHeights = Array.from(slides).map((slide) => slide.clientHeight);
      this.maxDescriptionHeight = `${Math.max(...descriptionHeights)}px`;
    },

    onMouseMove(event) {
      if (this.mouseDownPositionX) {
        const dragDistance = event.clientX - this.mouseDownPositionX;
        slidePosition += dragDistance * 0.1;

        // block swipe right
        if (slidePosition > 0) {
          slidePosition = 0;
        }

        // block swipe left
        if (slidePosition < this.slidesBoundaryWidth * -1) {
          slidePosition = this.slidesBoundaryWidth * -1;
        }

        gsap.to(this.$refs.slides, {
          duration: 0.1,
          scrollTo: { x: slidePosition * -1 },
        });
      }
    },

    onMouseDown(event) {
      this.mouseDownPositionX = event.clientX;
    },

    onMouseUp() {
      this.mouseDownPositionX = null;
    },

    onWindowResize() {
      this.maxDescriptionHeight = 'auto';
      this.$nextTick(() => {
        this.setPanelDescriptionHeight();
        this.setSlidesBoundaryWidth();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/settings/_core.scss';
@import '~/assets/scss/tools/_breakpoint.scss';

.c-slides {
  overflow-x: scroll;
  white-space: nowrap;
  cursor: grab;
  user-select: none;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -webkit-overflow-scrolling: touch;
}

.c-slides::-webkit-scrollbar {
  display: none;
}

.c-slides__panel {
  height: 14em;
  white-space: initial;
  scroll-snap-align: start;
}
</style>
