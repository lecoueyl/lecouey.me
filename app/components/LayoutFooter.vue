<template>
  <footer ref="target" class="pt-48">
    <div class="container relative z-50 h-screen overflow-hidden bg-neutral-950 px-2 py-6 sm:p-6">
      <div ref="container" class="relative grid h-full grid-cols-3 overflow-hidden rounded-3xl bg-neutral-100">
        <div class="relative z-10 col-span-3 px-10 pb-10 pt-8">
          <span class="inline-block overflow-hidden">
            <span :ref="(el) => setElementRef(el)" class="inline-block text-5xl sm:text-9xl/tight">Let's work together</span>
          </span>

          <div class="absolute bottom-10 right-10 inline-block -rotate-6 transition-transform hover:-rotate-0">
            <a
              ref="email"
              class="inline-block overflow-hidden "
              :href="`mailto:${settings.email}`"
            ><Marquee class="inline-block w-72 rounded-full bg-neutral-950 py-6 text-2xl text-neutral-50">{{ settings.email }}</Marquee></a>
          </div>
        </div>

        <ul class="relative z-10 col-span-2 col-start-2 flex flex-col gap-4 p-5 text-4xl">
          <li
            v-for="item in ['Github', 'LinkedIn', 'Dribbble']"
            :key="item"
            class="overflow-hidden"
          >
            <span :ref="(el) => setElementRef(el)" class="block">{{ item }}</span>
          </li>
        </ul>

        <div class="relative z-10 col-span-3 flex items-end p-10">
          <div class="flex w-full justify-between gap-8 overflow-hidden">
            <div :ref="(el) => setElementRef(el)">
              <Clock />
            </div>
            <a
              :ref="(el) => setElementRef(el)"
              href="#"
              class="block"
            >Back to top</a>
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

const settings = useRuntimeConfig().public;

const { elements, setElementRef } = useElement();

const grid = ref();
const target = ref();
const container = ref();
const email = ref();

// GSAP

const { gsap } = useGsap();

let gsapTimeline: GSAPTimeline;

const setGsapTimeline = async () => {
  gsap.set(elements, {
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
      container.value,
      {
        borderRadius: '0',
        scale: 1.07,
      },
      {
        borderRadius: '1.5rem',
        scale: 1,
        duration: 2,
        ease: 'circ2.inOut',
      },
      '=-0.8s',
    )
    .fromTo(
      grid.value.children,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 2,
        ease: 'circ2.inOut',
        stagger: 0.1,
      },
      '=-1.5s',
    )
    .fromTo(
      elements,
      { translateY: '100%' },
      {
        duration: 2,
        ease: 'circ2.out',
        stagger: 0.1,
        translateY: '0%',
      },
      '=-2s',
    )
    .fromTo(
      email.value,
      { scale: 0 },
      {
        duration: 2,
        ease: 'circ2.out',
        stagger: 0.1,
        scale: 1,
      },
      '=-2s',
    )
    .fromTo(
      email.value.children[0],
      { translateY: '150%' },
      {
        duration: 0.8,
        ease: 'circ2.out',
        translateY: '0%',
        onComplete: () => {
          gsap.set(email.value, { clearProps: 'all' });
        },
      },
      '=-1.5s',
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
