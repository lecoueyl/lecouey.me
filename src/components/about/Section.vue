<template>
  <div
    ref="section"
    :class="[
      'transition-opacity duration-300',
      inView ? 'opacity-100' : 'opacity-20',
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  data: () => ({
    inView: true,
  }),

  mounted() {
    if ('IntersectionObserver' in window) {
      this.inView = false;

      const callback = (entries) => {
        this.inView = entries[0].isIntersecting;
      };

      const observer = new IntersectionObserver(callback, {
        threshold: [0.4],
      });

      observer.observe(this.$refs.section);
    }
  },
};
</script>
