<template>
  <section class="container relative grid sm:grid-cols-6 gap-8 bg-neutral-100 pt-64">
    <TransitionReveal tag="h2" class="col-span-full pt-4 flex items-start mb-64">
      <span class="text-8xl">Works</span>
      <span class="pt-4 text-base font-normal text-neutral-500">(5)</span>
    </TransitionReveal>

    <div class="sticky top-1/2 sm:col-span-3 sm:col-start-3 col-span-full overflow-hidden">
      <div ref="title" class="text-4xl" />
    </div>

    <article
      :ref="(el) => setElementRef(el)"
      class="relative z-10 sm:col-span-4 sm:col-start-2 gap-6 mt-96"
      data-title="Dream of fantasy"
    >
      <NuxtImg src="img/thumb1.jpg" alt="project 1" class="w-full rounded-2xl shadow-2xl" />
    </article>

    <article
      :ref="(el) => setElementRef(el)"
      class="relative z-10 sm:col-span-4 sm:col-start-2 gap-6 mt-96"
      data-title="Secondary long title"
    >
      <NuxtImg src="img/thumb2.jpg" alt="project 2" class="w-full rounded-2xl shadow-2xl" />
    </article>

    <article
      :ref="(el) => setElementRef(el)"
      class="relative z-10 sm:col-span-4 sm:col-start-2 gap-6 mt-96"
      data-title="Along the pain 3"
    >
      <NuxtImg src="img/thumb3.jpg" alt="project 3" class="w-full rounded-2xl shadow-2xl" />
    </article>
  </section>
</template>

<script setup lang="ts">
const { gsap, ScrollTrigger } = useGsap();

const title = ref<HTMLElement>();
const currentTitle = ref('');
const { elements, setElementRef } = useElement();

let isScrollingDown = true;

onMounted(() => {
  currentTitle.value = elements[0]?.dataset?.title ?? '';

  elements.forEach((article: HTMLElement) => {
    ScrollTrigger.create({
      trigger: article,
      start: 'top 80%',
      end: 'top center',
      onEnter: () => {
        isScrollingDown = true;
        currentTitle.value = article.dataset.title ?? '';
      },
      onEnterBack: () => {
        isScrollingDown = false;
        currentTitle.value = article.dataset.title ?? '';
      },
    });
  });
});

watch(currentTitle, async (newVal) => {
  if (!title.value) return;

  await gsap.to(title.value, {
    y: isScrollingDown ? '100%' : '-100%',
    duration: 0.3,
    ease: 'circ2.inOut',
  });
  title.value.innerText = newVal;
  await gsap.fromTo(
    title.value,
    { y: isScrollingDown ? '-100%' : '100%' },
    {
      y: '0%',
      duration: 0.3,
      ease: 'circ2.out',
    },
  );
});
</script>
