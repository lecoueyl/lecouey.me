<template>
  <LayoutPage>
    <div class="container py-24 flex flex-col gap-8">
      <h1 class="text-8xl">
        Cards
      </h1>

      <div class="inline-flex self-center gap-16 flex-col bg-neutral-200 rounded-md overflow-hidden aspect-[2.5/3] w-1/3 items-center">
        <div
          ref="cardsContainer"
          class="flex flex-col items-center"
        >
          <div
            v-for="(color, index) in ['yellow', 'green', 'neutral']"
            :key="index"
            class="py-4"
          >
            <div :class="`bg-${color}-500 rounded-2xl aspect-[1.6/1] w-96 flex flex-col p-4`">
              <header class="h-1/4" />
              <main class="grow flex items-center justify-center text-xl">
                Credit card collection ー 01
              </main>
              <footer class="flex justify-between items-end gap-4 text-sm h-1/4">
                <div>Debit</div>
                <div>04 / 28</div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutPage>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

useSeoMeta({
  title: 'Cards',
});

const cardsContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!cardsContainer.value) return;

  const container = cardsContainer.value;

  const animateCard = () => {
    const firstCard = container.children[0] as HTMLElement;

    const clonedFirstCard = firstCard.cloneNode(true) as HTMLElement;
    container.appendChild(clonedFirstCard);

    // Animer la première carte vers le haut
    gsap.to(container.children, {
  yPercent: -100,
  duration: 1,
  ease: 'power4.inOut',
  delay: 1.5,
  rotate: (index) => index % 2 === 0 ? 15 : -15,
  onComplete: () => {
    // Réinitialiser la position
    gsap.set(container, { y: 0 });

    // Supprimer le premier élément
    container.removeChild(firstCard);

    // Lancer l'animation suivante
    animateCard();
  },
});
  };

  animateCard();
});
</script>
