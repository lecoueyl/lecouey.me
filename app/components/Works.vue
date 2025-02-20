<template>
  <section class="container relative grid sm:grid-cols-6 gap-64 bg-neutral-100 pt-64">
    <h2 class="col-span-full pt-4 flex items-start">
      <span class="text-8xl">Works</span><span class="pt-4 text-base font-normal text-neutral-500">(5)</span>
    </h2>

    <div class="sticky top-1/2 sm:col-span-4 sm:col-start-2 col-span-full">
      <div ref="title" class="w-full text-center text-4xl" />
    </div>

    <article :ref="(el) => setElementRef(el)" class="relative z-10 sm:col-span-4 sm:col-start-2 gap-6" data-title="title 1">
      <NuxtImg src="img/thumb1.jpg" alt="project 2" class="w-full rounded-2xl shadow-2xl" />
    </article>

    <article :ref="(el) => setElementRef(el)" class="relative z-10 sm:col-span-4 sm:col-start-2 gap-6" data-title="title 2">
      <NuxtImg src="img/thumb2.jpg" alt="project 2" class="w-full rounded-2xl shadow-2xl" />
    </article>

    <article :ref="(el) => setElementRef(el)" class="relative z-10 sm:col-span-4 sm:col-start-2 gap-6" data-title="title 3">
      <NuxtImg src="img/thumb3.jpg" alt="project 2" class="w-full rounded-2xl shadow-2xl" />
    </article>
  </section>
</template>

<script setup lang="ts">
const { ScrollTrigger } = useGsap();

const { elements, setElementRef } = useElement();

const title = ref();

onMounted(async () => {
  title.value.innerText = elements[0]?.dataset?.title || '';

  elements.forEach((article: HTMLElement) => {
    ScrollTrigger.create({
      trigger: article,
      start: 'top 80%',
      end: 'top center',
      onEnter: () => {
        if (title.value) {
          title.value.innerText = article.dataset.title || '';
        }
      },
      onEnterBack: () => {
        if (title.value) {
          title.value.innerText = article.dataset.title || '';
        }
      },
    });
  });
});
</script>
