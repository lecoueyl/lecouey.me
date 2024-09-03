<template>
  <header class="container sticky top-0 z-40 w-full items-center pt-10">
    <nav
      ref="nav"
      class="flex h-6 items-center justify-between gap-4 overflow-hidden"
    >
      <NuxtLink to="/">
        Leonard Lecouey
      </NuxtLink>

      <div class="flex items-center justify-between gap-4">
        <NuxtLink to="playground">
          JP
        </NuxtLink>

        <div class="h-[0.15rem] w-10 bg-neutral-950" />

        <NuxtLink to="about">
          About
        </NuxtLink>
      </div>

      <a
        href=""
        class="hidden sm:inline-block"
      >
        hi@lecouey.me
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
const store = useStore();

const nav = ref();

const { gsap } = useGsap();
const gsapSetting = {
  duration: 1,
  ease: 'expo.out',
  stagger: 0.1,
};

async function showNav() {
  await gsap.fromTo(
    nav.value.children,
    {
      y: '100%',
    },
    {
      y: 0,
      ...gsapSetting,
    },
  );
}

async function hideNav() {
  await gsap.fromTo(
    nav.value.children,
    {
      y: 0,
    },
    {
      y: '-100%',
      ...gsapSetting,
    },
  );
}

watch(
  () => [store.value.isRouting],
  ([isRouting]) => {
    if (isRouting) {
      return;
    }
    showNav();
  },
);

onMounted(() => {
  if (store.value.isRouting) {
    hideNav();
  }
});
</script>
