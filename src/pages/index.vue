<template>
  <main>
    <div class="relative flex h-screen items-center justify-center p-16">
      <h1 class="text-4xl font-medium leading-none md:text-5xl lg:px-16 lg:text-[clamp(5vw,5vw,5vw)]">
        Tokyo based full-stack engineer with a passion for creating intuitive and visually appealing user interfaces.
        <!-- <TransitionRevealText>
          Tokyo based full-stack engineer with a passion for creating intuitive and visually appealing user interfaces.
        </TransitionRevealText> -->
      </h1>
      <!-- <nuxt-img src="~/assets/img/thumb.jpg" /> -->
      <div ref="cards">
        <div class="absolute bottom-0 right-10 aspect-video w-1/2 -translate-y-12 scale-90 rounded-2xl bg-primary-7 shadow-[0px_-16px_40px_-24px_theme(colors.neutral.1)]" />
        <div class="absolute bottom-0 right-10 aspect-video w-1/2 -translate-y-6 scale-95 rounded-2xl bg-primary-8 shadow-[0px_-16px_40px_-24px_theme(colors.neutral.1)]" />
        <div class="absolute bottom-0 right-10 aspect-video w-1/2 overflow-hidden rounded-2xl bg-primary-10 shadow-[0px_-16px_40px_-24px_theme(colors.neutral.1)]">
          <img src="~/assets/img/thumb.jpg">
        </div>
      </div>

      <div class="absolute bottom-4 left-4 font-medium">
        {{ currentJstTime }} JST
      </div>

      <div class="text-shine absolute bottom-4 right-4 font-medium">
        (SCROLL)
      </div>
    </div>
    <Marquee class="text-7xl uppercase">
      This is a test
    </Marquee>
  </main>
</template>

<script setup lang="ts">
import gsap from 'gsap';

const { currentJstTime } = useCurrentTime();

const cards = ref();

onMounted(async () => {
  disableScroll();
  await gsap.timeline()
    .set(cards.value.children, {
      opacity: 0,
      top: '50%',
      left: '50%',
      xPercent: -50,
      yPercent: -50,
      y: 0,
      scale: 1.2,
    })
    // .set(cards.value.children, {
    //   y: (index) => `-${index * 15}rem`,
    // });
    .to(cards.value.children, {
      duration: 1.5,
      ease: 'expo.out',
      opacity: 1,
      stagger: 0.5,
    })
    .to(cards.value.children, {
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.2,
      y: (index) => `${index * 1.5}rem`,
    })
    .to(cards.value.children, {
      duration: 1,
      ease: 'expo.out',
      top: 'auto',
      left: 'auto',
      xPercent: 0,
      yPercent: 0,
      scale: (index) => `${(1 - (cards.value.children.length * 0.05)) + index * 0.05}`,
      stagger: {
        from: 'end',
        each: 0.05,
      },
    }, '-=1');

  enableScroll();
  //   .to(cards.value.children, {
  //     duration: 1,
  //     ease: 'expo.out',
  //     stagger: 0.1,
  //     y: (index) => `${index * 1.5}rem`,
  //   }, '-=1')
  //   // .to(cards.value.children, {
  //   //   duration: 2,
  //   //   ease: 'expo.out',
  //   //   xPercent: -100,
  //   //   stagger: 0.1,
  //   //   x: (index) => {
  //   //     console.log(index);
  //   //     return '0';
  //   //   },
  //   // })
  //   .to(deck.value, {
  //     duration: 1,
  //     top: 'auto',
  //     left: 'auto',
  //     xPercent: 0,
  //     yPercent: 0,
  //   });
});
</script>
