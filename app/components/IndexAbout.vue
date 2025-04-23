<template>
  <div
    ref="target"
    class="relative grid grid-cols-6 h-svh overflow-hidden"
  >
    <div
      v-for="index in LINES_COUNT"
      :key="index"
      :ref="(el) => setElementRef(el)"
      class="absolute bg-neutral-300 h-[300%] w-px top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
    />
    <div class="flex justify-center items-center col-span-4 col-start-2">
      <TransitionReveal
        tag="p"
        class="text-center text-3xl rounded-2xl p-10 z-0 backdrop-blur-xs border border-neutral-500/10"
      >
        <span>Haus is a Los Angeles-based agency that</span>
        <span>pushes the boundaries of technology,</span>
        <span>strategy, design and content to create lasting</span>
        <span>relationships between brands & customers.</span>
      </TransitionReveal>
    </div>
  </div>
</template>

<script setup lang="ts">
import type GSAPTimeline from 'gsap';

const { elements, setElementRef } = useElement();

const LINES_COUNT = 10;
const target = ref();

// GSAP

const { gsap } = useGsap();

let gsapTimeline: GSAPTimeline;

const setGsapTimeline = async () => {
  gsap.set(elements, {
    scaleY: 0,
    transformOrigin: 'center',
  });

  gsapTimeline = gsap.timeline({
    paused: true,
  })
    .fromTo(
      elements,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 2,
        ease: 'circ2.inOut',
        stagger: 0.1,
      },
    )
    .fromTo(
      elements,
      { rotate: 0 },
      {
        rotate: (index) => (360 / (LINES_COUNT * 2)) * (index + 1),
        duration: 2,
        ease: 'circ2.inOut',
        // stagger: 0.1,
      },
      '=-2.2s',
    );
};

const onIntersect = () => {
  gsapTimeline.play();
};

useIntersectionObserver({
  target,
  once: true,
  options: { threshold: [0.5] },
  onIntersect,
});

onMounted(async () => {
  setGsapTimeline();
});
</script>
