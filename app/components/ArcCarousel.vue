<template>
  <div class="relative w-full h-[80vh] overflow-hidden">
    <div
      ref="carousel"
      class="absolute"
    >
      <div
        v-for="(image, index) in allImages"
        :key="`${image}-${index}`"
        ref="cards"
        class="absolute h-screen cursor-grab active:cursor-grabbing"
      >
        <div class="w-[25vw] rounded-lg overflow-hidden">
          <NuxtImg
            :src="image"
            :alt="`Carousel image ${index + 1}`"
            class="w-full h-full object-cover"
            @click="handleImageClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

interface Props {
  images: string[];
  duplicates?: number;
  radius?: string | number; // Can be percentage like "150%" or number for pixels
}

const props = withDefaults(defineProps<Props>(), {
  duplicates: 12,
  radius: '300%',
});

const { gsap } = useGsap();
const carousel = ref<HTMLElement>();
const cards = ref<HTMLElement[]>([]);

// Create duplicated images array
const allImages = computed(() => {
  const result = [];
  for (let i = 0; i < props.duplicates; i++) {
    result.push(...props.images);
  }
  return result;
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let draggable: any = null;

const calculateRadius = () => {
  if (!carousel.value) return 2500;

  const containerHeight = carousel.value.parentElement?.offsetHeight || window.innerHeight;

  if (typeof props.radius === 'string' && props.radius.includes('%')) {
    const percentage = parseFloat(props.radius) / 100;
    return containerHeight * percentage;
  }

  return typeof props.radius === 'number' ? props.radius : parseFloat(props.radius.toString()) || 2500;
};

const positionCards = () => {
  if (!cards.value.length || !carousel.value) return;

  const radius = calculateRadius();
  const totalCards = allImages.value.length;
  const stepAngle = 360 / totalCards;
  const containerWidth = carousel.value.parentElement?.offsetWidth || window.innerWidth;
  const containerHeight = carousel.value.parentElement?.offsetHeight || window.innerHeight;
  const cardWidth = containerWidth * 0.25; // 25vw

  // Position carousel container
  gsap.set(carousel.value, {
    left: containerWidth / 2 - cardWidth / 2,
    top: (containerHeight - 400) / 2,
    transformOrigin: `${cardWidth / 2}px ${radius}px`,
  });

  // Position each card with rotation and set transform origin
  cards.value.forEach((card, index) => {
    gsap.set(card, {
      transformOrigin: `${cardWidth / 2}px ${radius}px`,
      rotation: index * stepAngle,
    });
  });
};

const handleImageClick = (event: Event) => {
  if (draggable?.isDragging) {
    event.preventDefault();
  }
};

// Resize handler
const handleResize = () => {
  positionCards();
  if (draggable) {
    draggable.update();
  }
};

const setupCarousel = async () => {
  if (!carousel.value) return;

  const { Draggable } = await import('gsap/Draggable');
  const { InertiaPlugin } = await import('gsap/InertiaPlugin');
  gsap.registerPlugin(Draggable, InertiaPlugin);

  const totalCards = allImages.value.length;
  const stepAngle = 360 / totalCards;

  draggable = Draggable.create(carousel.value, {
    type: "rotation",
    inertia: true,
    minimumMovement: 0.01,
    snap: function (endValue: number) {
      return Math.round(endValue / stepAngle) * stepAngle;
    },
     
    onPress: function() {
      this.startPointerX = this.pointerX;
      this.startPointerY = this.pointerY;
    },
     
    onRelease: function() {
      // Prevent default on links if dragged more than 3 pixels
      if (Math.abs(this.startPointerX - this.pointerX) > 3 ||
          Math.abs(this.startPointerY - this.pointerY) > 3) {
        this.pointerEvent?.preventDefault();
      }
    },
  })[0];
};

onMounted(() => {
  nextTick(async () => {
    positionCards();
    await setupCarousel();

    // Add resize listener
    window.addEventListener('resize', handleResize);
  });
});

onUnmounted(() => {
  if (draggable) {
    draggable.kill();
  }
  window.removeEventListener('resize', handleResize);
});
</script>
