<template>
  <header class="container sticky top-0 z-40 pt-10">
    <nav
      ref="nav"
      class="layout justify-between overflow-hidden h-8 grid-cols-2 sm:grid-cols-3"
    >
      <NuxtLink to="/" class="translate-y-full">
        {{ settings.siteName }}
      </NuxtLink>

      <div class="flex translate-y-full items-center justify-end sm:justify-start gap-4">
        <NuxtLink to="playground">
          JP
        </NuxtLink>

        <div class="h-[0.15rem] w-10 bg-neutral-950" />

        <NuxtLink to="about">
          About
        </NuxtLink>
      </div>

      <div class="translate-y-full text-right hidden sm:inline-block">
        <a
          href=""
        >
          {{ settings.email }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const settings = useRuntimeConfig().public;
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
