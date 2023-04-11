<template>
  <main>
    <div class="relative flex h-screen items-center justify-center p-16">
      <h1 class="mx-auto text-6xl lg:max-w-3xl">
        <TransitionRevealText>
          Tokyo based full-stack engineer with a passion for creating intuitive and visually appealing user interfaces.
        </TransitionRevealText>
      </h1>

      <div class="absolute bottom-4 left-4 font-medium">
        {{ currentJstTime }} JST
      </div>

      <div class="text-shine absolute bottom-4 right-4 font-medium">
        (SCROLL)
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { currentJstTime } = useCurrentTime();
</script>
