<template>
  <component
    :is="tag"
    ref="target"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';

const props = defineProps({
  delay: {
    default: 0,
    type: Number,
  },

  tag: {
    default: 'div',
    type: String,
  },

  isShowing: {
    default: false,
    type: Boolean,
  },

  wrapTag: {
    default: 'span',
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

const target = ref<HTMLElement>();
const elements = ref<HTMLElement[]>([]);
const { isIntersecting } = useIntersectionObserver(target as Ref<HTMLElement>);

const showElements = async () => {
  await gsap.fromTo(
    elements.value,
    { y: '100%' },
    { y: 0, ...gsapSetting },
  );
  emit('done');
};

const hideElements = async () => {
  await gsap.fromTo(
    elements.value,
    { y: '0%' },
    { y: '-100%', ...gsapSetting },
  );
};

const wrapChildren = () => {
  if (!target.value) return;

  const children = Array.from(target.value.children) as HTMLElement[];
  children.forEach((child) => {
    child.classList.add('block', 'translate-y-full');
    elements.value.push(child);

    const wrap = document.createElement(props.wrapTag);
    wrap.classList.add('overflow-hidden', 'block');
    child.parentNode?.insertBefore(wrap, child);
    wrap.appendChild(child);
  });
};

onMounted(async () => {
  if (!target.value) return;
  wrapChildren();

  if (!props.isShowing) return;
  showElements();
});

watch(
  () => [props.isShowing, isIntersecting.value],
  (newValue) => {
    if (newValue) {
      showElements();
    } else {
      hideElements();
    }
  },
);
</script>
