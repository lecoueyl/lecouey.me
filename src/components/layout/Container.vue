<template>
  <component
    :is="tag"
    class="container mx-auto max-w-6xl min-h-full px-4"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      default: 'div',
      type: String,
    },
  },
};
</script>
