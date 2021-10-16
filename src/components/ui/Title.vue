<template>
  <component
    :is="`h${level}`"
    :class="[
      {
        'text-4xl sm:text-7xl': level === 1,
        'text-3xl sm:text-5xl': level === 2,
        'text-xl sm:text-xl md:text-2xl': level === 3,
      },
    ]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    level: {
      default: 1,
      type: Number,
      validator: (value) => [
        1,
        2,
        3,
      ].includes(value),
    },
  },
};
</script>
