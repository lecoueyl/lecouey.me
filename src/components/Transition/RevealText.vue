<template>
  <span :aria-label="trimmedText" />
  <transition-group
    v-if="splittedText.length > 0"
    enter-active-class="transition-opacity duration-1000 motion-reduce:transition-none"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    @after-enter="onAfterEnterTransition"
  >
    <template v-for="word, key in splittedText">
      <span
        v-if="showText"
        :key="key"
        :style="{ transitionDelay: `${key * transitionDelay}ms` }"
        class="inline-block"
        aria-hidden="true"
      >
        <span
          class="inline-block"
        >{{ word }}&nbsp;
        </span>
      </span>
    </template>
  </transition-group>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },

  transitionDelay: {
    type: Number,
    default: 25,
  },
});

const emit = defineEmits(['change']);

const slots = useSlots();

const showText = ref(false);

const trimmedText = computed(() => {
  if (!slots.default) throw new Error('Default slot is required');

  return slots.default()[0].children
    .trim()
    .replace(/\s\s+/g, ' ');
});

const splittedText = computed(() => trimmedText.value.split(' '));

const onAfterEnterTransition = (el) => {
  const element = el;
  element.style.transitionDelay = null;
};

onMounted(() => {
  showText.value = props.show;
});
</script>
