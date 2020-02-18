<template>
  <div
    v-view="inViewHandler"
    class="o-grid"
  >
    <aside class="o-grid__col u-4/12@sm">
      <h2
        class="o-type-l u-weight-normal u-color-secondary"
      >
        <slot name="title" />
      </h2>
    </aside>

    <article class="o-grid__col u-8/12@sm">
      <slot />
    </article>
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
.view-in,
.view-out {
  opacity: 0.2;
  transition: opacity 1s;
}

.view-in--gt-half,
.view-in--full {
  opacity: 1;
}
</style>
