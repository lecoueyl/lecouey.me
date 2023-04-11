<template>
  <main>
    <div class="h-screen p-4">
      <Transition
        appear
        mode="out-in"
        @before-enter="heroBeforeEnter"
        @enter="heroEnter"
      >
        <div
          v-if="mounted"
          class="relative h-full overflow-hidden rounded-3xl bg-neutral-2 shadow-lg force-gpu focus:outline-none dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-neutral-6"
        >
          <BreakoutGame
            :in-view="loading"
            class="z-10"
          >
            French Full stack engineer and Product designer based in Tokyo.
            I love building well designed product from a draft idea, working on every aspect from mockup design to delivery.
          </BreakoutGame>

          <div class="absolute -left-1/3 -top-1/2 z-0 h-full w-full animate-blob">
            <div class="h-4/5 w-4/5 rounded-full bg-primary-11 mix-blend-multiply blur-2xl" />
          </div>

          <div class="absolute -right-1/2 -top-1/2 z-0 h-full w-full animate-blob animation-delay-2000 ">
            <div class="h-4/5 w-4/5 rounded-full bg-secondary-200 mix-blend-multiply blur-2xl" />
          </div>

          <div class="absolute -bottom-1/2 left-0 z-0 h-full w-full animate-blob animation-delay-4000">
            <div class="h-4/5 w-4/5 rounded-full bg-tertiary-200 mix-blend-multiply blur-2xl" />
          </div>
        </div>
      </Transition>
    </div>

    <h2
      ref="title"
      class="py-64 text-center text-7xl"
    >
      <TransitionRevealText
        :show="isIntersecting"
      >
        It starts with an idea
      </TransitionRevealText>
    </h2>

    <IndexChat />

    <div class="p-8">
      <h1 class="pb-10 font-medium">
        Lead designer
      </h1>
      <p class="pb-48 text-neutral-11">
        <span class="block">Experience Saeco’s love and respect for the</span>
        <span class="block">perfect cup through rich storytelling bringing</span>
        <span class="block">in Italian heritage through every detail.</span>
      </p>

      <div class="my-10 rounded-full bg-neutral-12 p-4 text-xl font-medium text-neutral-1">
        Hi there, happy to see you
      </div>

      <div class="gradient-border relative rounded-3xl bg-neutral-1 p-10 text-3xl before:absolute before:inset-0 before:-left-px before:-top-px before:z-[-1] before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-3xl before:bg-opacity-20 before:bg-gradient-to-br before:from-neutral-2 before:via-neutral-12 before:opacity-50">
        French Full stack engineer and Product designer based in Tokyo.
        I love building well designed product from a draft idea, working on every aspect from mockup design to delivery.
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import gsap from 'gsap';

const mounted = ref(false);
const loading = ref(false);
const title = ref();
const { isIntersecting } = useIntersectionObserver({ target: title });

const heroBeforeEnter = (el: Element) => {
  // disableScroll();
  gsap.set(el, {
    yPercent: 10,
    scale: 0.95,
    opacity: 0,
  });
};

const heroEnter = async (el: Element) => {
  await gsap.timeline()
    .to(el, {
      duration: 2,
      ease: 'expo.inOut',
      yPercent: 0,
      opacity: 1,
    })
    .to(el, {
      duration: 1.5,
      ease: 'Circ.inOut',
      scale: 1,
    }, '-=1.5');
  // enableScroll();
  loading.value = true;
};

onMounted(() => {
  mounted.value = true;
});
</script>

<style>
.gradient-border::before {
  background-size: 300% 300%;
  animation-duration: 5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-name: moveGradient;
}

@keyframes moveGradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

</style>
