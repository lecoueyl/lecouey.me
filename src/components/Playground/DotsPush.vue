<template>
  <div class="grid grid-cols-8 gap-6">
    <div
      v-for="item in 80"
      :key="item"
      class="relative"
    >
      <div
        :ref="(el) => setElementRef(el)"
        class="absolute inset-0 size-6 rounded-full border border-neutral-900 bg-neutral-50"
      />
      <div class="size-6 rounded-full bg-neutral-600" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { elements, setElementRef } = useElement();

const { gsap } = useGsap();

const setGsapAnimation = () => {
  elements.forEach((el) => {
    const startPosition = Math.random() > 0.5 ? '0%' : '-50%';
    const endPosition = startPosition === '-50%' ? '0%' : '-50%';
    gsap.set(el, {
      x: startPosition,
      y: startPosition,
    });

    gsap.fromTo(
      el,
      { x: startPosition, y: startPosition },
      {
        x: endPosition,
        y: endPosition,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 1.5,
        delay: () => Math.random() * 2, // random delay between 0 and 2 seconds
      },
    );
  });
};

onMounted(async () => {
  setGsapAnimation();
});
</script>
