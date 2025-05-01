<template>
  <LayoutPage>
    <div class="container py-24 flex flex-col gap-8">
      <h1 class="text-8xl">
        Cards
      </h1>

      <div class="inline-flex self-center gap-16 flex-col bg-neutral-200 p-24 rounded-md overflow-hidden aspect-[2.5/3] w-1/3 items-center">
        <div class="bg-yellow-500 rounded-2xl aspect-[1.6/1] w-96 flex flex-col p-4">
          <header class="h-1/4" />

          <main class="grow flex items-center justify-center text-xl">
            Credit card collection ー 01
          </main>

          <footer class="flex justify-between items-end gap-4 text-sm h-1/4">
            <div>Debit</div>
            <div>04 / 28</div>
          </footer>
        </div>

        <div class="bg-green-500 rounded-2xl aspect-[1.6/1] w-96 flex flex-col p-4">
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
  </LayoutPage>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Cards',
});

const { gsap } = useGsap();
</script>
