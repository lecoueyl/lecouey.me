<template>
  <div>
    <LayoutContainer>
      <div class="flex items-center pb-4">
        <div class="flex-grow">
          <UiTitle :level="2">
            {{ $t('about.skills.title') }}
          </UiTitle>
        </div>

        <div class="space-x-1">
          <button
            :class="[
              'inline-flex justify-center items-center w-10 h-10 rounded-lg',
              canSlideLeft ? ' cursor-pointer hover:bg-wash-background transition' : 'cursor-default text-wash-muted',
            ]"
            :disabled="!canSlideLeft"
            :aria-label="$t('form.previous')"
            @click="slideLeft()"
          >
            <SvgArrowLeft />
          </button>

          <button
            :class="[
              'inline-flex justify-center items-center w-10 h-10 rounded-lg',
              canSlideRight ? ' cursor-pointer hover:bg-wash-background transition' : 'cursor-default text-wash-muted',
            ]"
            :disabled="!canSlideRight"
            :aria-label="$t('form.next')"
            @click="slideRight()"
          >
            <SvgArrowRight />
          </button>
        </div>
      </div>
    </LayoutContainer>

    <div
      ref="slides"
      class="flex overflow-x-auto select-none sm:overflow-hidden"
      @mousedown="onMouseDown($event)"
      @mouseup="onMouseUp()"
      @mousemove="onMouseMove($event)"
      @scroll="scrollLeft = $refs.slides.scrollLeft"
    >
      <article
        v-for="(skill, key) in $t('about.skills.items')"
        :key="key"
        class="last:pr-4 pl-4 sm:last:pr-10 sm:pl-10"
        data-slide="panel"
      >
        <div class="flex flex-col justify-end p-8 w-[80vw] h-64 rounded-2xl sm:w-96 bg-wash-background">
          <h3 class="flex-grow pb-4 text-xl">
            {{ skill.title }}
          </h3>

          <p>
            {{ skill.description }}
          </p>
        </div>
      </article>
    </div>
  </div>
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

  data: () => ({
    mouseDownPositionX: null,
    scrollLeft: 0,
    slideWidth: 0,
    slidesBoundaryWidth: 0,
  }),

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
  },

  methods: {
    setSlidesBoundaries() {
      const slides = Array.from(this.$refs.slides.querySelectorAll('[data-slide="panel"]'));
      this.slidesBoundaryWidth = 0;
      this.slideWidth = slides[0].clientWidth;
      slides.forEach((slide) => {
        this.slidesBoundaryWidth += slide.clientWidth;
      });
      this.slidesBoundaryWidth -= window.innerWidth;
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
        duration: 0.3,
        scrollTo: { x: this.scrollLeft },
        ease: 'expo.out',
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
      this.$nextTick(() => {
        this.setSlidesBoundaries();
      });
    },
  },
};
</script>
