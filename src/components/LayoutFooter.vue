<template>
  <footer ref="target" class="pt-48">
    <div class="container relative z-50 h-screen bg-neutral-950 p-6">
      <div class="relative grid h-full grid-cols-3 overflow-hidden rounded-3xl bg-neutral-100">
        <div class="relative z-10 col-span-3 p-10 text-8xl">
          <span class="block overflow-hidden">
            <span data-gsap="footer" class="block">Let's work together</span>
          </span>
        </div>

        <ul class="relative z-10 col-span-2 col-start-2 flex flex-col gap-4 p-5 text-4xl">
          <li class="overflow-hidden">
            <span data-gsap="footer" class="block">Github</span>
          </li>
          <li class="overflow-hidden">
            <span data-gsap="footer" class="block">LinkedIn</span>
          </li>
          <li class="overflow-hidden">
            <span data-gsap="footer" class="block">Dribbble</span>
          </li>
        </ul>

        <div class="relative z-10 col-span-3 flex items-end p-10">
          <div class="flex w-full justify-between gap-8 overflow-hidden">
            <Clock data-gsap="footer" />
            <span data-gsap="footer" class="block">Back to top</span>
          </div>
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
  gsap.set('[data-gsap="footer"]', {
    translateY: '100%',
  });

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
    )
    .fromTo(
      '[data-gsap="footer"]',
      { translateY: '100%' },
      {
        duration: 2,
        ease: 'circ2.out',
        stagger: 0.1,
        translateY: '0%',
      },
      '=-2s',
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
