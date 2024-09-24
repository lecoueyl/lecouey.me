<template>
  <header class="container sticky top-0 z-40 pt-10">
    <nav
      ref="nav"
      class="grid h-6 grid-cols-3 gap-4 overflow-hidden"
    >
      <NuxtLink to="/" class="translate-y-full">
        Leonard Lecouey
      </NuxtLink>

      <div class="flex translate-y-full items-center gap-4">
        <NuxtLink to="playground">
          JP
        </NuxtLink>

        <div class="h-[0.15rem] w-10 bg-neutral-950" />

        <NuxtLink to="about">
          About
        </NuxtLink>
      </div>

      <div class="translate-y-full text-right">
        <a
          href=""
          class="hidden sm:inline-block"
        >
          hi@lecouey.me
        </a>
      </div>
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
  stagger: 0.15,
};

async function showNav() {
  await gsap.to(
    nav.value.children,
    {
      y: 0,
      ...gsapSetting,
    },
  );
}

async function hideNav() {
  await gsap.to(
    nav.value.children,
    {
      y: '-100%',
      ...gsapSetting,
    },
  );
}

onMounted(async () => {
  // await hideNav();
  gsap.set(nav.value.children, {
    y: '100%',
  });
  if (store.value.isRouting) return;
  showNav();
});

watch(
  () => [store.value.isRouting],
  ([isRouting]) => {
    if (isRouting) return;
    showNav();
  },
);

defineExpose({
  showNav,
  hideNav,
});
</script>
