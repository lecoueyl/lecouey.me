<template>
  <span :aria-label="trimmedText" />
  <transition-group
    v-if="splittedText.length > 0"
    enter-active-class="transition duration-[700ms] in-out-expo motion-reduce:transition-none"
    enter-from-class="opacity-0 translate-y-full transform"
    enter-to-class="opacity-100 translate-y-0 transform"
    class="overflow-hidden"
    tag="p"
    @after-enter="onAfterEnterTransition"
  >
    <template v-for="word, key in splittedText">
      <span
        v-if="show"
        :key="key"
        :style="{ transitionDelay: `${key * transitionDelay}ms` }"
        class="inline-block"
        aria-hidden="true"
      >
        {{ word }}&nbsp;
      </span>
    </template>
  </transition-group>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },

  transitionDelay: {
    type: Number,
    default: 50,
  },
});

const trimmedText = computed(() => {
  if (!useSlots().default()) throw new Error('Default slot is required');

  return useSlots().default()[0].children
    .trim()
    .replace(/\s\s+/g, ' ');
});

const splittedText = computed(() => trimmedText.value.split(' '));

const onAfterEnterTransition = (el) => {
  const element = el;
  element.style.transitionDelay = null;
};
</script>
