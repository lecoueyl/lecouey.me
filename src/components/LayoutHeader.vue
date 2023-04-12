<template>
  <header class="fixed inset-x-0 top-0 z-40 items-center p-8 text-lg tracking-tight">
    <nav class="flex items-center justify-between gap-4 font-medium">
      <NuxtLink
        to="/"
        class="inline-block h-6 grow"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="none" viewBox="0 0 120 120">
          <path id="logoPath" ref="targetPath" d="M17 93V42c0-13.807 11.193-25 25-25h58" />

          <text>
            <textPath ref="targetPath" textLength="150" href="#logoPath" fill="currentColor" class="text-lg font-medium">Leonard&nbsp;Lecouey</textPath>
          </text>
        </svg>
      </NuxtLink>
      <!-- <NuxtLink
        to="/"
        class="inline-block"
      >
        Lecouey Leonard
      </NuxtLink> -->
      <NuxtLink to="about">
        JP
      </NuxtLink>

      <div class="h-[0.15rem] w-8 bg-neutral-1" />

      <NuxtLink to="about">
        About
      </NuxtLink>
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
