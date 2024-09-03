<template>
  <component
    :is="tag"
    ref="target"
    :aria-label="trimmedText"
  >
    <span
      v-for="(word, index) in content ?? splittedText"
      :key="index"
      class="inline-block overflow-hidden pb-6"
    >
      <span class="inline-block origin-bottom-left translate-y-[200%]">
        <template v-if="word === ' '">&nbsp;</template>
        <template v-else>{{ word }}</template>
      </span>
    </span>
  </component>
</template>

<script setup lang="ts">
import gsap from 'gsap';

const props = defineProps({
  content: {
    default: null,
    type: Array,
  },

  delay: {
    default: 0,
    type: Number,
  },

  show: {
    default: false,
    type: Boolean,
  },

  tag: {
    default: 'div',
    type: String,
  },
});

const emit = defineEmits(['done']);

const gsapSetting = {
  duration: 2,
  ease: 'circ2.inOut',
  stagger: 0.02,
  delay: props.delay,
};

const target = ref();

const trimmedText = computed(() => {
  const defaultSlot = useSlots().default?.();

  if (!defaultSlot || !defaultSlot[0] || typeof defaultSlot[0].children !== 'string') {
    throw new Error('Default slot is required and should contain plain text.');
  }

  return defaultSlot[0].children.trim();
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
      rotate: 0,
      y: '200%',
    },
    {
      rotate: 0,
      y: 0,
      ...gsapSetting,
    },
  );
  emit('done');
}

async function hideElements() {
  await gsap.fromTo(
    getElementChildren(),
    {
      y: '0%',
      rotate: 10,
    },
    {
      y: '-200%',
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
