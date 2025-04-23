<template>
  <main>
    <LayoutHeader />

    <div
      ref="hero"
      class="flex h-[calc(100vh---spacing(18))] flex-col items-center overflow-x-hidden"
      :class="{
        'overflow-hidden': !isIntroDone,
      }"
    >
      <div class="container grow flex-col gap-10 relative grid grid-cols-12 items-center justify-center py-10">
        <TransitionRevealText
          tag="h1"
          :show="isPageDisplayed"
          class="col-span-8 col-start-3 text-[5.5vw] font-semibold leading-[0.75] tracking-tight"
        >
          Tokyo based full-stack engineer with a passion for creating intuitive and visually appealing user interfaces
        </TransitionRevealText>

        <div
          ref="cards"
          class="absolute inset-0 m-auto flex w-1/4 items-center"
        >
          <NuxtImg
            src="/img/thumb3.jpg"
            alt="project 1"
            class="invisible ml-[-50%] flex-none translate-y-[-24%] scale-90 rounded-xl shadow-[0px_-16px_40px_-24px_theme(colors.neutral.400)]"
          />
          <NuxtImg
            src="/img/thumb3.jpg"
            alt="project 1"
            class="invisible ml-[-50%] flex-none translate-y-[-16%] scale-90 rounded-xl shadow-[0px_-16px_40px_-24px_theme(colors.neutral.400)]"
          />
          <NuxtImg
            src="img/thumb2.jpg"
            alt="project 1"
            class="invisible ml-[-50%] flex-none translate-y-[-8%] scale-95 rounded-xl shadow-[0px_-16px_40px_-24px_theme(colors.neutral.400)]"
          />
          <NuxtImg
            src="/img/thumb1.jpg"
            alt="project 1"
            class="invisible ml-[-50%] flex-none rounded-xl shadow-[0px_-16px_40px_-24px_theme(colors.neutral.400)]"
          />
        </div>
      </div>

      <div
        ref="heroFooter"
        class="container flex w-full justify-between items-start gap-10 overflow-hidden"
      >
        <Clock class="-translate-y-full" />

        <div class="h-18 text-shine animate-shine -translate-y-full select-none">
          (SCROLL)
        </div>
      </div>
    </div>

    <div class="container layout py-96">
      <TransitionReveal
        tag="h2"
        class="text-neutral-800 uppercase font-normal"
      >
        <span>( about )</span>
      </TransitionReveal>

      <TransitionReveal
        tag="p"
      >
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

    <div class="container flex justify-center">
      <div class="w-px bg-neutral-400 h-96 rounded-full" />
    </div>

    <div class="container grid grid-cols-6 gap-8 py-12">
      <TransitionReveal
        tag="p"
        class="col-span-6 col-start-1 text-center text-3xl"
      >
        <span>Haus is a Los Angeles-based agency that</span>
        <span>pushes the boundaries of technology,</span>
        <span>strategy, design and content to create lasting</span>
        <span>relationships between brands & customers.</span>
      </TransitionReveal>

      <!-- <TransitionReveal tag="NuxtLink" class="col-start-2 pt-10 uppercase">
        <span>Learn more</span>
      </TransitionReveal> -->
      <!-- <NuxtLink class="col-start-2 pt-10 uppercase">
        Learn more
      </NuxtLink> -->
    </div>

    <div class="container flex justify-center">
      <div class="w-px bg-neutral-400 h-96 rounded-full" />
    </div>

    <Works />

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
      yPercent: (index) => cardsTransformPositionArray?.[index]?.y ?? 0,
      xPercent: (index) => cardsTransformPositionArray?.[index]?.x ?? 0,
      stagger: 0.1,
    }, '-=0.5')
    .to(heroFooter.value.children, {
      y: 0,
      duration: 1,
      ease: 'circ2.out',
      stagger: 0.1,
    }, '-=0.2')
    .call(enableScroll, [], '-=2');

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
      yPercent: (index) => cardsTransformPositionArray?.[index]?.y ?? 0 - (20 * index + 1),
    })
    .to(heroFooter.value, { opacity: 0 });
});
</script>
