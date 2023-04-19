<template>
  <component
    :is="tag"
    ref="target"
    :aria-label="trimmedText"
  >
    <span
      v-for="word, key in splittedText"
      :key="key"
      aria-hidden="true"
      class="inline-block overflow-hidden"
    ><span class="test inline-block translate-y-full rotate-2"><template v-if="word === ' '">&nbsp;</template><template v-else>{{ word }}</template></span></span>
  </component>
</template>

<script setup>
import gsap from 'gsap';

defineProps({
  tag: {
    default: 'div',
    type: String,
  },
});

const target = ref(null);

const trimmedText = computed(() => {
  if (!useSlots().default()) throw new Error('Default slot is required');

  return useSlots().default()[0].children.trim();
});

const splittedText = computed(() => trimmedText.value.split(/(\s+)/));

const showText = () => {
  gsap.to('.test', {
    duration: 1,
    ease: 'expo.out',
    rotate: 0,
    stagger: 0.015,
    y: 0,
  });
};

defineExpose({
  showText,
});
</script>
