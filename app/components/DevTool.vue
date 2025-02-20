<template>
  <div>
    <div
      ref="grid"
      class="z-50 fixed top-0 inset-0 h-full w-full container grid sm:grid-cols-3 pointer-events-none"
    >
      <div class="border-l border-pink-500 scale-y-0" />
      <div class="border-l border-pink-500 scale-y-0" />
      <div class="border-l border-pink-500 scale-y-0" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type GSAPTimeline from 'gsap';

const grid = ref();

const { gsap } = useGsap();

let gsapTimeline: GSAPTimeline;

const setGridGsapTimeline = async () => {
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
        duration: 1,
        ease: 'circ2.inOut',
        stagger: 0.1,
      },
    );
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.ctrlKey && e.key === 'g') {
    if (gsapTimeline.reversed() || gsapTimeline.progress() === 0) {
      gsapTimeline.play();
    } else {
      gsapTimeline.reverse();
    }
  }
};

onMounted(() => {
  setGridGsapTimeline();
  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>
