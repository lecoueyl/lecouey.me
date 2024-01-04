<template>
  <component
    :is="tag"
    ref="target"
    :aria-label="trimmedText"
  >
    <span
      v-for="(word, index) in content ?? splittedText"
      :key="index"
      class="inline-block overflow-hidden"
    >
      <span class="inline-block translate-y-full">
        <template v-if="word === ' '">&nbsp;</template>
        <template v-else>{{ word }}</template>
      </span>
    </span>
  </component>
</template>

<script setup lang="ts">
import gsap from 'gsap';

const props = defineProps({
  show: {
    default: false,
    type: Boolean,
  },

  tag: {
    default: 'div',
    type: String,
  },

  content: {
    default: null,
    type: Array,
  },
});

const gsapSetting = {
  duration: 1,
  ease: 'power4.out',
  stagger: 0.02,
};

const target = ref();

const trimmedText = computed(() => {
  if (!useSlots().default()) throw new Error('Default slot is required');

  return useSlots().default()[0].children.trim();
});

const splittedText = computed(() => trimmedText.value.split(/(\s+)/));

const getElementChildren = () => {
  const elements: Array<Element> = [];

  if (!target.value) return elements;

  Array.from(target.value?.children).forEach((child: Element | any) => {
    elements.push(child.children);
  });

  return elements;
};

async function showElements() {
  await gsap.fromTo(
    getElementChildren(),
    {
      y: '100%',
    },
    {
      y: 0,
      ...gsapSetting,
    },
  );
}

async function hideElements() {
  await gsap.fromTo(
    getElementChildren(),
    {
      y: '0%',
    },
    {
      y: '-100%',
      ...gsapSetting,
    },
  );
}

watch(
  () => props.show,
  (newValue) => {
    if (!target.value) return;

    if (newValue) {
      showElements();
      return;
    }
    hideElements();
  },
);

onMounted(() => {
  if (props.show && target.value) showElements();
});
</script>
