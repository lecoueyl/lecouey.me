<template>
  <div
    ref="content"
    v-view="inViewHandler"
    class="u-mv-x4@xs u-mv-x10@sm"
  >
    <slot />
  </div>
</template>

<script>
import gsap from 'gsap';

const inViewPercent = 0.4;
const outOpacity = 0.2;

export default {
  data() {
    return {
      inView: false,
    };
  },

  mounted() {
    this.setOpacity(outOpacity);
  },

  methods: {
    inViewHandler(event) {
      if (!this.inView && event.percentInView >= inViewPercent) {
        this.inView = true;
        this.setOpacity(1);
      }

      if (this.inView && event.percentInView <= inViewPercent && event.percentCenter < 0) {
        this.inView = false;
        this.setOpacity(outOpacity);
      }
    },

    setOpacity(opacity) {
      gsap.to(this.$refs.content, {
        duration: 0.6,
        opacity,
      });
    },
  },
};
</script>
