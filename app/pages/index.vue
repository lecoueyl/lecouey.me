<template>
  <main>
    <LayoutHeader />

    <div
      ref="hero"
      class="flex h-[calc(100vh---spacing(18))] flex-col items-center overflow-x-hidden pt-12 gap-12 justify-between"
      :class="{
        'overflow-hidden': !isIntroDone,
      }"
    >
      <div class="flex items-center">
        <div class="container layout">
          <div class="flex items-center text-neutral-700">
            hello this is a test dasljdlas djlsaldas dlas dasl djsaldjsalji8yuw8yde9qw ydhs adhaskld as
          </div>
          <TransitionRevealText
            tag="h1"
            :show="isPageDisplayed"
            class="col-span-2 text-[4vw] font-semibold leading-[0.75] tracking-tight"
          >
            Tokyo based full-stack engineer with a passion for creating intuitive and visually appealing user interfaces
          </TransitionRevealText>
        </div>
      </div>

      <div
        ref="cards"
        class="relative flex"
      >
        <div
          v-for="src, index in [
            '/img/thumb1.jpg',
            '/img/thumb2.jpg',
            '/img/thumb3.jpg',
            '/img/thumb2.jpg',
            '/img/thumb1.jpg',
          ]"
          :key="index"
          class="w-[25vw]"
        >
          <NuxtImg
            :src="src"
            alt="project 1"
            class="rounded-xl w-full shadow-[0px_-16px_40px_-24px_theme(colors.neutral.400)]"
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

    <IndexAbout />

    <Works />

    <LayoutFooter />
  </main>
</template>

<script setup lang="ts">
const { gsap } = useGsap();
const { isPageDisplayed } = usePage();
const { enableScroll, disableScroll } = useScroll();

const cards = ref();
const hero = ref();
const heroFooter = ref();
const isIntroDone = ref(false);

// Arc configuration
const arcStrength = 1.5; // Adjustable arc intensity (0-2)
const cardSpread = 0.1; // Adjustable card spacing (0-1, where 1 = full width)

// Positioning calculation
const calculateCardPosition = (index: number, images: HTMLImageElement[]) => {
  const totalCards = images.length;
  const containerWidth = cards.value.offsetWidth;
  const cardWidth = containerWidth / totalCards;
  const center = (totalCards - 1) / 2;
  const relativeIndex = index - center;

  // Horizontal spread
  const maxSpread = (cardWidth * cardSpread) * arcStrength;
  const x = relativeIndex * maxSpread;

  // Circular arc curve
  const imageElement = images[index];
  if (!imageElement) return { x: 0, y: 0, rotation: 0 };
  const imageHeight = imageElement.offsetHeight;
  const maxAngle = Math.PI / 2 * arcStrength;
  const angle = (relativeIndex / center) * (maxAngle / 2);
  const radius = (imageHeight * 0.5) * arcStrength;
  const y = radius - (radius * Math.cos(angle));

  // Rotation
  const normalizedIndex = relativeIndex / center;
  const maxRotation = 10 * arcStrength;
  const rotation = normalizedIndex * maxRotation;

  return { x, y, rotation };
};

// Reposition function for resize
const repositionCards = () => {
  if (!cards.value || !isIntroDone.value) return;

  const images = Array.from(cards.value.children).map(card => (card as HTMLElement).querySelector('img')) as HTMLImageElement[];

  gsap.to(images, {
    duration: 0.3,
    x: (index) => calculateCardPosition(index, images).x,
    y: (index) => calculateCardPosition(index, images).y,
    rotation: (index) => calculateCardPosition(index, images).rotation,
    ease: 'quart.out',
  });
};

// Intro animation
const heroIntro = async () => {
  disableScroll();

  const images = Array.from(cards.value.children).map(card => (card as HTMLElement).querySelector('img')) as HTMLImageElement[];
  const containerWidth = cards.value.offsetWidth;

  const initialXs = images.map((img, index) => {
    const cardWidth = img.offsetWidth;
    const centerX = containerWidth / 2;
    const naturalCenter = index * cardWidth + cardWidth / 2;
    return centerX - naturalCenter;
  });

  await gsap
    .timeline()
    .set(images, {
      x: (index) => initialXs[index]!,
      y: window.innerHeight,
      visibility: 'visible',
    })
    .to(images, {
      delay: 0.5,
      duration: 1,
      y: 0,
      stagger: {
        amount: 0.3,
        from: 'center',
      },
      ease: 'quart.inOut',
    })
    .to(images, {
      duration: 1,
      x: (index) => calculateCardPosition(index, images).x,
      y: (index) => calculateCardPosition(index, images).y,
      rotation: (index) => calculateCardPosition(index, images).rotation,
      stagger: {
        amount: 0.3,
        from: 'center',
      },
      ease: 'quart.inOut',
    })
    .to(heroFooter.value.children, {
      y: 0,
      duration: 1,
      ease: 'circ2.out',
      stagger: 0.1,
    }, '-=0.2')
    .call(enableScroll, [], '-=2');

  isIntroDone.value = true;
};

// Resize handling
let resizeTimeout: ReturnType<typeof setTimeout>;
const handleResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(repositionCards, 150);
};

// Lifecycle hooks
onMounted(async () => {
  await heroIntro();

  window.addEventListener('resize', handleResize);

  gsap.timeline({
    scrollTrigger: {
      end: '100%-=64px top',
      scrub: true,
      start: '-64px top',
      trigger: hero.value,
    },
  })
    .to(heroFooter.value, { opacity: 0 });
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  clearTimeout(resizeTimeout);
});
</script>
