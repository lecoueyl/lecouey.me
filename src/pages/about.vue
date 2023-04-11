<template>
  <div class="flex h-screen items-center p-16">
    <div class="text-center text-7xl">
      <span class="relative inline-block overflow-hidden pr-2 text-left">
        <div
          class="absolute top-0 block"
          data-gsap="leonard"
        >
          <template
            v-for="item in 10"
            :key="item"
          >
            <div class="py-2">Leonard</div>
            <div class="py-2">Lecouey</div>
          </template>
        </div>
        <span class="invisible inline-block py-2">Leonard</span>
      </span>

      <span class="relative inline-block overflow-hidden pl-2 text-right">
        <div
          class="absolute bottom-0 block"
          data-gsap="lecouey"
        >
          <template
            v-for="item in 10"
            :key="item"
          >
            <div class="py-2">Leonard</div>
            <div class="py-2">Lecouey</div>
          </template>
        </div>
        <span class="invisible inline-block py-2">Lecouey</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';

definePageMeta({
  pageTransition: {
    async onEnter(el, done) {
      console.log('Enter', el);
      done();
    },

    onLeave(el) {
      console.log('Leave', el);
    },
  },
});

onMounted(() => {
  const leonard = gsap.timeline();
  const lecouey = gsap.timeline();
  gsap.set('[data-gsap="leonard"]', {
    xPercent: 110,
  });
  gsap.set('[data-gsap="lecouey"]', {
    xPercent: -110,
  });

  leonard.to('[data-gsap="leonard"]', {
    duration: 4,
    ease: 'expo.inOut',
    xPercent: 0,
  }).fromTo('[data-gsap="leonard"]', {
    yPercent: -80,
  }, {
    duration: 3,
    ease: 'expo.inOut',
    yPercent: 0,
  }, '-=1.5');

  lecouey.to('[data-gsap="lecouey"]', {
    duration: 4,
    ease: 'expo.inOut',
    xPercent: 0,
  }).fromTo('[data-gsap="lecouey"]', {
    yPercent: 80,
  }, {
    duration: 3,
    ease: 'expo.inOut',
    yPercent: 0,
  }, '-=1.5');
});
</script>
