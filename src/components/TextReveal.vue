<template>
  <component
    :is="tag"
    ref="target"
    class="overflow-hidden"
    :aria-label="trimmedText"
  >
    <transition-group
      v-if="splittedTex.length > 0"
      enter-active-class="duration-1000 inline-block ease-[cubic-bezier(0.16,1,0.3,1)]"
      enter-from-class="translate-y-full"
    >
      <template v-for="word, key in splittedTex">
        <span
          v-if="isIntersecting"
          :key="key"
          :style="{ transitionDelay: `${key * delay}ms` }"
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
  delay: {
    default: 50,
    type: Number,
  },

  tag: {
    default: 'div',
    type: String,
  },
});

const target = ref(null);
const { isIntersecting } = useIntersectionObserver(target);

const trimmedText = computed(() => {
  if (!useSlots().default) return '';
  return useSlots().default()[0].children.trim();
});

const splittedTex = computed(() => trimmedText.value.split(''));
</script>
