<template>
  <svg
    class="fixed top-0 z-50"
    :class="isRouting ? 'block' : 'hidden'"
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <path ref="targetPath" class="fill-primary-11" vector-effect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
  </svg>

  <transition
    mode="out-in"
    @enter="onEnter"
    @enter-cancelled="onEnterCancelled"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @leave-cancelled="onLeaveCancelled"
  >
    <slot />
  </transition>
</template>

<script setup lang="ts">
import gsap from 'gsap';

const isRouting = ref(false);
const targetPath = ref();
let timeline: GSAPTimeline;
const paths = {
  start: {
    unfilled: 'M 0 100 V 100 Q 50 100 100 100 V 100 z',
    inBetween: {
      curve1: 'M 0 100 V 50 Q 50 0 100 50 V 100 z',
      curve2: 'M 0 100 V 50 Q 50 100 100 50 V 100 z',
    },
    filled: 'M 0 100 V 0 Q 50 0 100 0 V 100 z',
  },
  finish: {
    filled: 'M 0 0 V 100 Q 50 100 100 100 V 0 z',
    inBetween: {
      curve1: 'M 0 0 V 50 Q 50 0 100 50 V 0 z',
      curve2: 'M 0 0 V 50 Q 50 100 100 50 V 0 z',
    },
    unfilled: 'M 0 0 V 0 Q 50 0 100 0 V 0 z',
  },
};

async function onBeforeLeave() {
  timeline = gsap.timeline();
  isRouting.value = true;
}

async function onLeave(el: Element, done: Function) {
  await timeline
    .set(targetPath.value, {
      attr: { d: paths.start.unfilled },
    })
    .to(targetPath.value, {
      duration: 0.8,
      ease: 'power4.in',
      attr: { d: paths.start.inBetween.curve2 },
    }, 0)
    .to(targetPath.value, {
      duration: 0.2,
      ease: 'power1',
      attr: { d: paths.start.filled },
    });
  done();
}

async function onEnter(el: Element, done: Function) {
  await timeline
    .set(targetPath.value, {
      attr: { d: paths.finish.filled },
    })
    .to(targetPath.value, {
      duration: 0.2,
      ease: 'sine.in',
      attr: { d: paths.finish.inBetween.curve2 },
    })
    .to(targetPath.value, {
      duration: 1,
      ease: 'power4',
      attr: { d: paths.finish.unfilled },
    });

  done();
  isRouting.value = false;
}

async function onLeaveCancelled() {
  await timeline.reverse();
  isRouting.value = false;
}

async function onEnterCancelled() {
  await timeline.reverse();
  isRouting.value = false;
}
</script>
