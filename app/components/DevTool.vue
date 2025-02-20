<template>
  <Transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div
      v-if="showGrid"
      ref="grid"
      class="z-50 fixed inset-0 h-full w-full container layout pointer-events-none"
    >
      <div v-for="index in 3 " :key="index" class="border-l border-pink-500" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type GSAPTimeline from 'gsap';

const { gsap } = useGsap();

let gsapTimeline: GSAPTimeline | null = null;
const showGrid = ref(false);
const grid = ref<HTMLElement>();

function beforeEnter(el: HTMLElement) {
  gsap.set(el.children, {
    scaleY: 1,
    transformOrigin: 'top',
  });
}

function enter(el: HTMLElement, done: () => void) {
  gsapTimeline = gsap.timeline().fromTo(
    el.children,
    { scaleY: 0 },
    {
      scaleY: 1,
      duration: 1,
      ease: 'circ2.inOut',
      stagger: 0.1,
    },
  );
  done();
}

function leave(_el: HTMLElement, done: () => void) {
  if (gsapTimeline) {
    gsapTimeline.reverse();
    gsapTimeline.eventCallback('onReverseComplete', done);
  } else {
    done();
  }
}

function handleKeyDown(e: KeyboardEvent) {
  if (e.ctrlKey && e.key === 'g') {
    showGrid.value = !showGrid.value;
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>
