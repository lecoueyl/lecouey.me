<template>
  <section>
    <div class="o-container">
      <div class="o-media">
        <div class="o-media__fluid">
          <h2 class="o-type-m u-weight-normal u-color-secondary">
            Skills
          </h2>
        </div>

        <div class="o-media__fixed">
          <button
            class="c-button c-button-outline c-button--primary u-ph-x2"
            :class="{ 'c-button--disabled': !canSlideLeft }"
            :disabled="!canSlideLeft"
            @click="slideLeft()"
          >
            <SvgArrowLeft class="u-block" />
          </button>

          <button
            class="c-button c-button-outline c-button--primary u-ml u-ph-x2"
            :class="{ 'c-button--disabled': !canSlideRight }"
            :disabled="!canSlideRight"
            @click="slideRight()"
          >
            <SvgArrowRight class="u-block" />
          </button>
        </div>
      </div>
    </div>

    <div
      ref="slides"
      class="c-slides"
      @mousedown="onMouseDown($event)"
      @mouseup="onMouseUp()"
      @mousemove="onMouseMove($event)"
      @scroll="scrollLeft = $refs.slides.scrollLeft"
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
              :style="{ height: maxSlideDescriptionHeight }"
            >
              {{ skill.description }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap/dist/gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import SvgArrowLeft from '~/assets/svg/arrow-left.svg?inline';
import SvgArrowRight from '~/assets/svg/arrow-right.svg?inline';

gsap.registerPlugin(ScrollToPlugin);

export default {
  components: {
    SvgArrowLeft,
    SvgArrowRight,
  },

  data() {
    return {
      mouseDownPositionX: null,
      slidesBoundaryWidth: 0,
      slideWidth: 0,
      maxSlideDescriptionHeight: 'auto',
      scrollLeft: 0,
    };
  },

  computed: {
    canSlideLeft() {
      return this.scrollLeft > 0;
    },

    canSlideRight() {
      return this.scrollLeft < this.slidesBoundaryWidth;
    },
  },

  beforeMount() {
    window.addEventListener('resize', this.onWindowResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  },

  mounted() {
    this.setSlidesBoundaries();
    this.setPanelDescriptionHeight();
  },

  methods: {
    setSlidesBoundaries() {
      const slides = Array.from(this.$refs.slides.getElementsByClassName('c-slides__panel'));
      this.slidesBoundaryWidth = 0;
      this.slideWidth = slides[0].clientWidth;
      slides.forEach((slide) => {
        this.slidesBoundaryWidth += slide.clientWidth;
      });
      this.slidesBoundaryWidth -= window.innerWidth;
    },

    setPanelDescriptionHeight() {
      const slides = this.$refs.slides.getElementsByClassName('c-slides__description');
      const descriptionHeights = Array.from(slides).map((slide) => slide.clientHeight);
      this.maxSlideDescriptionHeight = `${Math.max(...descriptionHeights)}px`;
    },

    slideLeft() {
      if (this.canSlideLeft) {
        this.scrollLeft -= this.slideWidth;
        this.scrollSlide();
      }
    },

    slideRight() {
      if (this.canSlideRight) {
        this.scrollLeft += this.slideWidth;
        this.scrollSlide();
      }
    },

    onMouseMove(event) {
      if (this.mouseDownPositionX) {
        const dragDistance = this.mouseDownPositionX - event.clientX;
        this.scrollLeft += dragDistance;

        if (!this.canSlideLeft) this.scrollLeft = 0;
        if (!this.canSlideRight) this.scrollLeft = this.slidesBoundaryWidth;

        this.scrollSlide();
      }
    },

    scrollSlide() {
      gsap.to(this.$refs.slides, {
        duration: 0.1,
        scrollTo: { x: this.scrollLeft },
      });
    },

    onMouseDown(event) {
      this.scrollLeft = this.$refs.slides.scrollLeft;
      this.mouseDownPositionX = event.clientX;
    },

    onMouseUp() {
      this.mouseDownPositionX = null;
    },

    onWindowResize() {
      this.maxSlideDescriptionHeight = 'auto';
      this.$nextTick(() => {
        this.setPanelDescriptionHeight();
        this.setSlidesBoundaries();
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
