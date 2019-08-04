<template>
  <div v-view="inViewHandler">
    <slot />
  </div>
</template>


<script>
export default {
  methods: {
    inViewHandler(event) {
      if (event.target.rect.top <= 0 && event.percentTop > 0) {
        this.$emit('inView');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.view-in {
  opacity: .2;
  transition: opacity 1s;
}
// .view-in--gt-half {
//   opacity: .5;
// }
.view-in--gt-half, .view-in--full {
  opacity: 1;
}
</style>
