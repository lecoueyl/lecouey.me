<template>
  <component
    :is="tag"
    :target="external ? '_blank' : null"
    :rel="external ? 'noopener' : null"
    :class="[
      `relative hover:text-wash-muted transition-colors
      after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-current`,
      external ? 'inline-flex items-center' : 'inline-block'
    ]"
    v-bind="$attrs"
  >
    <template v-if="external">
      <slot />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="none"
        role="presentation"
        class="ml-0.5 w-6 h-6 stroke-2"
      >
        <line
          x1="7"
          y1="17"
          x2="17"
          y2="7"
        />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </template>

    <template v-else>
      <slot />
    </template>
  </component>
</template>

<script>
export default {
  props: {
    external: {
      default: false,
      type: Boolean,
    },

    tag: {
      default: 'a',
      type: String,
    },
  },
};
</script>
