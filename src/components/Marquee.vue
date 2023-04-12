<template>
  <div class="overflow-hidden">
    <div ref="target" class="whitespace-nowrap">
      <span
        v-for="item in 10"
        :key="item"
        class="px-2"
      ><slot /></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';

const target = ref();

onMounted(() => {
  gsap.to(target.value, {
    xPercent: -100,
    ease: 'linear',
    repeat: -1,
    duration: 10,
  });
});

</script>
