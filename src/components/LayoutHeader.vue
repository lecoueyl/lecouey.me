<template>
  <header class="container sticky top-0 z-40 w-full items-center py-6 ">
    <nav class="flex h-6 items-center justify-between gap-4 text-lg">
      <NuxtLink
        to="/"
        class=""
      >
        Leonard Lecouey
      </NuxtLink>

      <div class="flex items-center justify-between gap-4">
        <NuxtLink to="about">
          JP
        </NuxtLink>

        <div class="h-[0.15rem] w-10 bg-neutral-950" />

        <NuxtLink to="about">
          About
        </NuxtLink>
      </div>

      <a
        href=""
        class="inline-block h-6 text-lg"
      >
        hi@lecouey.me
      </a>
    </nav>
  </header>
</template>

<script setup>
import gsap from 'gsap';

const targetPath = ref();

onMounted(() => {
  // gsap.timeline()
  //   .set('#logoPath', {
  //     attr: { d: 'M17 93V42c0-13.807 11.193-25 25-25h58m-83 0h83' },
  //   })
  //   .to('#logoPath', {
  //     duration: 2,
  //     ease: 'power1',
  //     attr: { d: 'M0 0h100v100H0z' },
  //   });

  gsap.timeline()
    .set(targetPath.value, {
      attr: { startOffset: '-100%' },
    })
    .to(targetPath.value, {
      duration: 2,
      ease: 'expo.out',
      attr: { startOffset: '0%' },
    });
  // gsap.timeline()
  //   .set(targetPath.value, {
  //     attr: { textLength: 0 },
  //   })
  //   .to(targetPath.value, {
  //     duration: 2,
  //     ease: 'power1',
  //     attr: { textLength: 150 },
  //   });
});
</script>
