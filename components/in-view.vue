<template>
  <div v-view="inViewHandler">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.view-in {
  opacity: .2;
  transition: opacity 1s;
}

.view-in--gt-half, .view-in--full {
  opacity: 1;
}
</style>
