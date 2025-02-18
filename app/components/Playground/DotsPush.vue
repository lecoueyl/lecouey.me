<template>
  <div class="grid grid-cols-10 gap-6">
    <div
      v-for="item in 100"
      :key="item"
      :ref="(el) => setElementRef(el, containers)"
      class="relative"
    >
      <div
        :ref="(el) => setElementRef(el)"
        class="absolute inset-0 size-6 rounded-full border-[0.1rem] border-neutral-950 bg-neutral-100"
      />
      <div class="size-6 rounded-full bg-neutral-950" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { elements, setElementRef } = useElement();
const containers = reactive([]);

const { gsap } = useGsap();

const setGsapAnimation = async () => {
  gsap.fromTo(
    containers,
    { scale: 0 },
    {
      scale: 1,
      ease: 'power1.inOut',
      duration: 1,
      stagger: {
        each: 0.01,
        from: 'end',
        axis: 'x',
      },
    },
  );
  elements.forEach((el) => {
    const startPosition = Math.random() > 0.5 ? '0%' : '-40%';
    const endPosition = startPosition === '-40%' ? '0%' : '-40%';
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
        delay: () => Math.random() * 2,
      },
    );
  });
};

onMounted(async () => {
  await setGsapAnimation();
});
</script>
