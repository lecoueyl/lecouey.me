<template>
  <component
    :is="tag"
    ref="target"
    :aria-label="trimmedText"
  >
    <transition-group
      v-if="splittedText.length > 0"
      enter-active-class="transition duration-1000 in-out-expo motion-reduce:transition-none"
      enter-from-class="opacity-0 translate-y-full transform"
      enter-to-class="opacity-100 translate-y-0 transform"
      @after-enter="onAfterEnterTransition"
    >
      <template v-for="word, key in trimmedText">
        <span
          v-if="isIntersecting"
          :key="key"
          :style="{ transitionDelay: `${key * transitionDelay}ms` }"
          class="inline-block"
          aria-hidden="true"
        >
          <template v-if="word === ' '">&nbsp;</template>
          <template v-else>{{ word }}</template></span>
      </template>
    </transition-group>

    <template v-else>
      <slot />
    </template>
  </component>
</template>

<script setup>
defineProps({
  transitionDelay: {
    type: Number,
    default: 5,
  },

  tag: {
    default: 'div',
    type: String,
  },
});

const target = ref(null);
const { isIntersecting } = useIntersectionObserver(target);

const trimmedText = computed(() => {
  if (!useSlots().default()) throw new Error('Default slot is required');

  return useSlots().default()[0].children.trim().replace(/\s\s+/g, ' ');
});

const splittedText = computed(() => trimmedText.value.split(' '));

const onAfterEnterTransition = (el) => {
  const element = el;
  element.style.transitionDelay = null;
};
</script>
