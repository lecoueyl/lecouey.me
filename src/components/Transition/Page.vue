<template>
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
let timeline: GSAPTimeline;
let svg: Element;
let svgPath: Element;

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

const createSvg = () => {
  document.querySelectorAll('.page-transition').forEach((el) => el.remove());
  svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'fixed z-50 top-0 page-transition');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('preserveAspectRatio', 'none');

  svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  svgPath.setAttribute('class', 'fill-primary-11 page-transition');
  svgPath.setAttribute('vector-effect', 'non-scaling-stroke');

  svg.appendChild(svgPath);
  document.body.appendChild(svg);
};

const removeSvg = () => svg.remove();

function onBeforeLeave() {
  timeline = gsap.timeline();
  createSvg();
  isRouting.value = true;
}

async function onLeave(el: Element, done: Function) {
  await timeline
    .set(svgPath, {
      attr: { d: paths.start.unfilled },
    })
    .to(svgPath, {
      duration: 0.8,
      ease: 'power4.in',
      attr: { d: paths.start.inBetween.curve1 },
    }, 0)
    .to(svgPath, {
      duration: 0.2,
      ease: 'power1',
      attr: { d: paths.start.filled },
    });

  // removeSvg();
  done();
}

async function onLeaveCancelled() {
  await timeline.reverse();
  isRouting.value = false;
  removeSvg();
  console.log('onLeaveCancelled');
}

async function onEnter(el: Element, done: Function) {
  // createSvg();

  await timeline
    .set(svgPath, {
      attr: { d: paths.finish.filled },
    })
    .to(svgPath, {
      duration: 0.2,
      ease: 'sine.in',
      attr: { d: paths.finish.inBetween.curve1 },
    })
    .to(svgPath, {
      duration: 1,
      ease: 'power4',
      attr: { d: paths.finish.unfilled },
    });

  removeSvg();
  done();
  isRouting.value = false;
}

async function onEnterCancelled() {
  console.log('onEnterCancelled');
  await timeline.reverse();
  isRouting.value = false;
}
</script>
