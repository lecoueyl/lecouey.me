<template>
  <ul
    ref="target"
    class="grid"
  >
    <li class="overflow-hidden">
      <div
        :ref="(el) => setElementRef(el, rows)"
        class="grid grid-cols-3 gap-6 pb-6 capitalize text-neutral-600"
      >
        <span v-for="header, index in headers" :key="index">{{ header }}</span>
      </div>
    </li>

    <li
      :ref="(el) => setElementRef(el, borders)"
      class="h-px w-full bg-neutral-300"
    />

    <template
      v-for="dataObject, dataIndex in data"
      :key="dataIndex"
    >
      <li class="group overflow-hidden">
        <div
          :ref="(el) => setElementRef(el, rows)"
          class="grid grid-cols-3 gap-6 py-6 text-xl"
        >
          <div
            v-for="dataEntry, entryIndex in dataObject"
            :key="entryIndex"
            class="relative overflow-hidden"
          >
            <span class="block translate-y-0 font-normal transition-transform duration-300 group-hover:-translate-y-full">
              {{ dataEntry }}
            </span>

            <span class="absolute left-0 top-full block w-full translate-y-0 font-light italic transition-transform duration-300 group-hover:-translate-y-full">
              {{ dataEntry }}
            </span>
          </div>
        </div>
      </li>

      <li :ref="(el) => setElementRef(el, borders)" class="h-px w-full bg-neutral-300" />
    </template>
  </ul>
</template>

<script setup lang="ts">
import type GSAPTimeline from 'gsap';

const props = defineProps({
  data: {
    default: () => [],
    type: Array,
  },

  delay: {
    default: 0,
    type: Number,
  },

  isShowing: {
    default: false,
    type: Boolean,
  },
});

const emit = defineEmits(['done']);

const headers = computed(() => (props.data.length > 0 ? Object.keys(props.data[0] as Record<string, unknown>) : []));

const target = ref<HTMLElement>();

const { isIntersecting } = useIntersectionObserver({ target: target as Ref<HTMLElement> });

// GSAP animation

const { setElementRef } = useElement();
const rows = reactive<HTMLElement[]>([]);
const borders = reactive<HTMLElement[]>([]);

const { gsap } = useGsap();

let gsapTimeline: GSAPTimeline;

const setGsapTimeline = () => {
  gsap.set(rows, {
    translateY: '100%',
  });

  gsap.set(borders, {
    scaleX: 0,
    transformOrigin: 'left',
  });

  gsapTimeline = gsap.timeline({
    paused: true,
    delay: props.delay,
    onComplete: () => emit('done'),
  })
    .fromTo(
      rows,
      { translateY: '100%' },
      {
        duration: 2,
        ease: 'circ2.out',
        stagger: 0.01,
        translateY: '0%',
      },
    )
    .fromTo(
      borders,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'circ2.inOut',
        stagger: 0.1,
      },
      '-=2',
    );
};

onMounted(async () => {
  setGsapTimeline();

  if (!props.isShowing) return;

  gsapTimeline.play();
});

watch(
  () => [props.isShowing, isIntersecting.value],
  ([isShowing]) => {
    if (isShowing || isIntersecting) {
      gsapTimeline.play();
    } else {
      gsapTimeline.reverse();
    }
  },
);
</script>
