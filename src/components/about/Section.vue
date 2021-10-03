<template>
  <div
    v-view="inViewHandler"
    :class="[
      'transition-opacity duration-300',
      inView ? 'opacity-100' : 'opacity-20',
    ]"
  >
    <slot />
  </div>
</template>

<script>
const inViewThreshold = 0.4;

export default {
  data() {
    return {
      inView: false,
    };
  },

  methods: {
    inViewHandler(event) {
      this.inView = event.percentInView >= inViewThreshold;
    },
  },
};
</script>
