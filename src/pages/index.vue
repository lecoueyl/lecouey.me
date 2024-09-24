<template>
  <main>
    <LayoutHeader />

    <div
      ref="hero"
      class="flex h-[calc(100vh-theme(space.16))] flex-col items-center gap-10 overflow-x-hidden bg-neutral-100 pb-10 pt-16"
      :class="{
        'overflow-hidden': !isIntroDone,
      }"
    >
      <div class="container flex grow flex-col gap-10">
        <div class="relative grid grow grid-cols-12 items-center justify-center">
          <TransitionRevealText
            tag="h1"
            :show="isPageDisplayed"
            class="col-span-8 col-start-3 text-[5.5vw] font-semibold leading-[0.75] tracking-tight"
          >
            Tokyo based full-stack engineer with a passion for creating intuitive and visually appealing user interfaces
          </TransitionRevealText>

          <div ref="cards" class="absolute inset-0 m-auto flex w-1/4 items-center">
            <NuxtImg
              ref="card"
              src="/img/thumb3.jpg"
              alt="project 1"
              class="invisible ml-[-50%] flex-none translate-y-[-24%] scale-90 rounded-xl shadow-[0px_-16px_40px_-24px_theme(colors.neutral.400)]"
            />
            <NuxtImg
              ref="card"
              src="/img/thumb3.jpg"
              alt="project 1"
              class="invisible ml-[-50%] flex-none translate-y-[-16%] scale-90 rounded-xl shadow-[0px_-16px_40px_-24px_theme(colors.neutral.400)]"
            />
            <NuxtImg
              ref="card"
              src="img/thumb2.jpg"
              alt="project 1"
              class="invisible ml-[-50%] flex-none translate-y-[-8%] scale-95 rounded-xl shadow-[0px_-16px_40px_-24px_theme(colors.neutral.400)]"
            />
            <NuxtImg
              ref="card"
              src="/img/thumb1.jpg"
              alt="project 1"
              class="invisible ml-[-50%] flex-none rounded-xl shadow-[0px_-16px_40px_-24px_theme(colors.neutral.400)]"
            />
          </div>
        </div>
      </div>

      <div
        ref="heroFooter"
        class="container flex w-full justify-between gap-10 overflow-hidden"
      >
        <Clock class="translate-y-full" />

        <div class="text-shine translate-y-full">
          (SCROLL)
        </div>
      </div>
    </div>

    <!-- <div class="grid gap-4 py-40">
      <div class="flex gap-2 overflow-x-hidden">
        <span v-for="item in 20" :key="item" class="-translate-x-10 rounded-full bg-neutral-900 px-8 py-2 text-4xl text-neutral-100">VUE</span>
      </div>
      <div class="flex gap-2 overflow-x-hidden">
        <span v-for="item in 20" :key="item" class="-translate-x-24 rounded-full bg-neutral-900 px-8 py-2 text-4xl text-neutral-100">ALL</span>
      </div>
    </div> -->

    <div class="container grid grid-cols-3 gap-8 bg-neutral-100 pt-96">
      <TransitionReveal tag="p" class="col-start-2">
        <span class="pl-16">Watson is founded in the</span>
        <span>belief that exceptional work starts</span>
        <span>with craft and conversation. We</span>
        <span>strive to break the conventions of</span>
        <span>the industry, our tools, and our</span>
        <span>platforms for our work to be more</span>
        <span>noticed, valued, and discussed.</span>
      </TransitionReveal>

      <TransitionReveal tag="p">
        <span class="pl-16">For over 15 years, we've</span>
        <span>been dedicated to the details,</span>
        <span>thoughtful design and copy, and an</span>
        <span>ongoing curiosity for ideas that</span>
        <span>spark discussion. Because brands</span>
        <span>and communities aren't built on</span>
        <span>content, but moments that engage.</span>
      </TransitionReveal>

      <!-- <TransitionReveal tag="NuxtLink" class="col-start-2 pt-10 uppercase">
        <span>Learn more</span>
      </TransitionReveal> -->
      <!-- <NuxtLink class="col-start-2 pt-10 uppercase">
        Learn more
      </NuxtLink> -->
    </div>

    <section class="container grid grid-cols-2 gap-24 bg-neutral-100 pt-64">
      <h2 class="col-span-2 flex pt-4 align-top text-8xl">
        Works <span class="pt-4 text-base font-normal text-neutral-500">(5)</span>
      </h2>

      <article class="flex flex-col-reverse gap-6">
        <h2 class="pt-4 text-xl">
          A multi-purpose creative space.
        </h2>
        <div class="rounded-xl">
          <NuxtImg src="img/thumb1.jpg" alt="project 2" class="w-full rounded-xl" />
        </div>
      </article>
      <article class="flex flex-col-reverse gap-6">
        <h2 class="pt-4 text-xl">
          A multi-purpose creative space.
        </h2>
        <div class="rounded-xl">
          <NuxtImg src="img/thumb2.jpg" alt="project 2" class="w-full rounded-xl" />
        </div>
      </article>
      <article class="flex flex-col-reverse gap-6">
        <h2 class="pt-4 text-xl">
          A multi-purpose creative space.
        </h2>
        <div class="rounded-xl">
          <NuxtImg src="img/thumb3.jpg" alt="project 2" class="w-full rounded-xl" />
        </div>
      </article>

      <!-- <article class="grid gap-16">
        <header class="flex items-center justify-between">
          <h2 class="pt-4 text-2xl">
            A multi-purpose creative space.
          </h2>
          <p class="text-lg text-neutral-600">
            Design, Development
          </p>
        </header>
        <div class="rounded-xl border border-neutral-200 p-24">
          <NuxtImg src="img/thumb1.jpg" alt="project 2" class="w-full rounded-xl" />
        </div>
      </article> -->
    </section>
    <!-- <section class="container gap-24 pt-64">
      <article class="grid gap-16">
        <header class="flex items-center justify-between">
          <h2 class="pt-4 text-2xl">
            A multi-purpose creative space.
          </h2>
          <p class="text-lg text-neutral-600">
            Design, Development
          </p>
        </header>
        <div class="rounded-xl border border-neutral-200 p-24">
          <NuxtImg src="img/thumb1.jpg" alt="project 2" class="w-full rounded-xl" />
        </div>
      </article>
    </section> -->
    <LayoutFooter />
  </main>
</template>

<script setup lang="ts">
const { gsap } = useGsap();
const { isPageDisplayed } = usePage();

const cards = ref();
const hero = ref();
const heroFooter = ref();
const isIntroDone = ref();

const { enableScroll, disableScroll } = useScroll();

const cardsTransformPositionArray = [
  { x: -140, y: -40 },
  { x: 150, y: -30 },
  { x: 150, y: 50 },
  { x: -270, y: 50 },
];

const heroIntro = async () => {
  disableScroll();

  await gsap
    .timeline()
    .set(cards.value.children, {
      y: window.innerHeight,
      visibility: 'visible',
      rotate: (index) => (index + 1) * 10,
    })
    .to(cards.value.children, {
      delay: 0.5,
      duration: 1.2,
      ease: 'circ2.inOut',
      y: (index) => index * 6,
      rotate: 0,
      stagger: 0.1,
    })
    .to(cards.value.children, {
      duration: 1.5,
      ease: 'circ2.inOut',
      yPercent: (index) => cardsTransformPositionArray[index].y,
      xPercent: (index) => cardsTransformPositionArray[index].x,
      stagger: 0.1,
    }, '-=0.5')
    .to(heroFooter.value.children, {
      y: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.15,
    }, '-=0.2');

  enableScroll();
  isIntroDone.value = true;
};

onMounted(async () => {
  await heroIntro();

  gsap.timeline({
    scrollTrigger: {
      end: '100%-=64px top',
      scrub: true,
      start: '-64px top',
      trigger: hero.value,
    },
  })
    .to(cards.value.children, {
      yPercent: (index) => cardsTransformPositionArray[index].y - (20 * index + 1),
    })
    .to(heroFooter.value, { opacity: 0 });
});
</script>
