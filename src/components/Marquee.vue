<template>
  <div
    class="overflow-hidden"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div ref="marquee" class="whitespace-nowrap">
      <span
        v-for="item in 10"
        :key="item"
        class="px-4"
      ><slot /></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type GSAPAnimation from 'gsap';

const { gsap } = useGsap();

const marquee = ref();

let animation: GSAPAnimation;

onMounted(() => {
  animation = gsap.to(marquee.value, {
    x: -marquee.value!.scrollWidth,
    ease: 'linear',
    repeat: -1,
    duration: 20,
  });
});

const onMouseEnter = () => {
  gsap.to(animation, {
    timeScale: 0,
    duration: 1,
    ease: 'power2.out',
  });
};
const onMouseLeave = () => {
  gsap.to(animation, {
    timeScale: 1,
    duration: 1,
    ease: 'power1.in',
  });
};
</script>
