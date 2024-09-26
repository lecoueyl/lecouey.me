<template>
  <footer ref="target" class="pt-48">
    <div class="container relative z-50 h-screen bg-neutral-950 p-6">
      <div class="relative grid h-full grid-cols-3 overflow-hidden rounded-3xl bg-neutral-100">
        <div class="relative z-10 col-span-3 p-10 text-8xl">
          Let's work together
        </div>

        <ul class="relative z-10 col-span-2 col-start-2 flex flex-col gap-4 p-5 text-xl">
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Dribbble</li>
        </ul>

        <div class="relative z-10 col-span-3 flex items-end justify-between gap-8 p-10">
          <Clock />
          <span>Back to top</span>
        </div>

        <div
          ref="grid"
          class="absolute inset-0 grid w-full grid-cols-6 gap-4 px-10"
        >
          <div class="border-l border-neutral-200" />
          <div class="border-l border-neutral-200" />
          <div class="border-l border-neutral-200" />
          <div class="border-l border-neutral-200" />
          <div class="border-l border-neutral-200" />
          <div class="border-e border-l border-neutral-200" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type GSAPTimeline from 'gsap';

const grid = ref();
const target = ref();

// GSAP

const { gsap } = useGsap();

let gsapTimeline: GSAPTimeline;

const setGsapTimeline = () => {
  gsap.set(grid.value.children, {
    scaleY: 0,
    transformOrigin: 'top',
  });

  gsapTimeline = gsap.timeline({
    paused: true,
  })
    .fromTo(
      grid.value.children,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 2,
        ease: 'circ2.inOut',
        stagger: 0.1,
      },
    );
};

const onIntersect = () => {
  gsapTimeline.play();
};

useIntersectionObserver({
  target,
  once: true,
  options: { threshold: [0.3] },
  onIntersect,
});

onMounted(async () => {
  setGsapTimeline();
});
</script>
