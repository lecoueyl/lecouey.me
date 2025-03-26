<template>
  <div
    ref="target"
    class="flex items-center justify-center overflow-x-hidden py-96"
  >
    <div class="relative grid aspect-[4/5] w-[calc(100cqw/4)]">
      <div
        v-for="img, index in [
          'https://images.prismic.io/ebayevo/Zk7IFCol0Zci9X-0_Card1.png?auto=format%2Ccompress&amp;fit=max&amp;w=3840&amp;q=100',
          'https://images.prismic.io/ebayevo/Zk7IHyol0Zci9X-2_Card2.png?auto=format%2Ccompress&amp;fit=max&amp;w=3840&amp;q=100',
          'https://images.prismic.io/ebayevo/Zk7IJSol0Zci9X-3_Card3.png?auto=format%2Ccompress&amp;fit=max&amp;w=3840&amp;q=100',
          'https://images.prismic.io/ebayevo/Zk7IKSol0Zci9X-4_Card4.png?auto=format%2Ccompress&amp;fit=max&amp;w=3840&amp;q=100',
          'https://images.prismic.io/ebayevo/Zk7IOiol0Zci9X-5_Card5.png?auto=format%2Ccompress&amp;fit=max&amp;w=3840&amp;q=100',
          'https://images.prismic.io/ebayevo/Zl0LmqWtHYXtUATG_Card6.png?auto=format%2Ccompress&amp;fit=max&amp;w=3840&amp;q=100',
          'https://images.prismic.io/ebayevo/ZnOk45m069VX15p9_Card8.5.png?auto=format%2Ccompress&amp;fit=max&amp;w=3840&amp;q=100',
        ]"
        :key="index"
        :ref="(el) => setElementRef(el)"
        class="absolute"
      >
        <img
          :src="img"
          class="w-full rounded-3xl"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type GSAPTimeline from 'gsap';

const { elements, setElementRef } = useElement();
const target = ref();

const { gsap } = useGsap();
let gsapTimeline: GSAPTimeline;

const setGsapTimeline = async () => {
  const justifyElement = ({
    index,
    totalElements,
    range = 100,
  } : {
    index: number,
    totalElements: number,
    range: number,
  }): number => (index / (totalElements - 1)) * (range * 2) - range;

  gsap.set(elements, {
    rotate: (index) => (elements.length - 1 - index) * -8,
    ease: 'circ2.inOut',
    duration: 1,
    stagger: -0.02,
  });

  gsapTimeline = gsap.timeline({
    paused: true,
  })
    .to(elements, {
      rotate: 0,
      xPercent: (index) => justifyElement({ index, totalElements: elements.length, range: 180 }),
      yPercent: (index) => justifyElement({ index, totalElements: elements.length, range: 30 }),
      ease: 'circ2.out',
      duration: 1.5,
      stagger: 0.02,
    });
};

const onIntersect = () => {
  gsapTimeline.play();
};

useIntersectionObserver({
  target,
  once: false,
  options: { threshold: [0.5] },
  onIntersect,

});

onMounted(async () => {
  setGsapTimeline();
});
</script>
