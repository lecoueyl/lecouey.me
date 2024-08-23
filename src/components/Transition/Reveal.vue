<template>
  <component
    :is="tag"
    ref="target"
  >
    <span
      v-for="(element, index) in elements"
      :key="index"
      class="block overflow-hidden"
    >
      <span class="inline-block translate-y-full">
        {{ element }}
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
  duration: 1.5,
  ease: 'easeInOutCirc',
  stagger: 0.02,
  delay: props.delay,
};

const target = ref();

const getElementChildren = () => {
  const elements: Array<Element> = [];
  if (!target.value) return elements;

  Array.from(target.value?.children).forEach((child: Element | any) => {
    elements.push(child.children);
  });

  return elements;
};

const elements = computed(() => {
  const defaultSlot = useSlots().default?.();

  if (!defaultSlot || !defaultSlot[0]) {
    throw new Error('Default slot is required');
  }

  return defaultSlot.map((element) => element.children);
});

async function showElements() {
  await gsap.fromTo(
    getElementChildren(),
    {
      rotate: 0,
      y: '100%',
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
