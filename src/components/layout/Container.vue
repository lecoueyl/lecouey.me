<template>
  <component
    :is="tag"
    class="container px-4 mx-auto max-w-6xl min-h-full"
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
