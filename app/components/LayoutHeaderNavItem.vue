<template>
  <NuxtLink
    v-slot="{ isActive }"
    :to="to"
    class="relative group overflow-hidden inline-block"
  >
    <span
      :class="[
        !isActive && 'block translate-y-0 transition-transform duration-500 group-hover:-translate-y-full relative',
        isActive && 'before:absolute before:bottom-0 before:left-0 before:h-[0.08rem] before:w-full before:bg-neutral-950'
      ]"
    >
      <slot />
    </span>
    <span
      v-if="!isActive"
      class="absolute left-0 top-full block w-full translate-y-0 transition-transform duration-500 group-hover:-translate-y-full"
    >
      <slot />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
