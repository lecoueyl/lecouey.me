<template>
  <div>
    <NuxtLayout>
      <NuxtPage class="bg-neutral-100" :transition="transition" />
      <!-- <LayoutFooter /> -->
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import type { TransitionProps } from 'vue';

const { gsap } = useGsap();
let timeline: GSAPTimeline; // eslint-disable-line no-undef

const settings = useRuntimeConfig().public;

useHead({
  titleTemplate: (title) => (title ? `${title} · ${settings.siteName}` : settings.siteName),
});

// useSeoMeta({
//   ogTitle: settings.siteName,
//   description: settings.siteDescription,
//   ogDescription: settings.siteDescription,
//   ogImage: `${settings.siteUrl}/og.png`,
//   ogUrl: settings.siteUrl,
//   twitterCard: 'summary_large_image',
//   twitterTitle: settings.siteName,
//   twitterDescription: settings.siteDescription,
//   twitterImage: `${settings.siteUrl}/og.png`,
// });

const store = useStore();

const transition: TransitionProps = {
  onBeforeEnter: async (element: Element) => {
    await gsap.set(element, {
      position: 'absolute',
      width: '100%',
    });
    store.value.isRouting = true;
  },

  onEnter: async (element: Element, done: Function) => {
    await gsap.fromTo(
      element,
      {
        clipPath: 'inset(100% 0 0 0)',
      },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.5,
        ease: 'expo.inOut',
      },
    );

    done();
    store.value.isRouting = false;
  },

  onEnterCancelled: async () => {
    await timeline.reverse();
    store.value.isRouting = false;
  },

  onBeforeLeave: async (element: Element) => {
    gsap.set(element, {
      position: 'absolute',
      width: '100%',
    });
    store.value.isRouting = true;
  },

  onLeave: async (element: Element, done: Function) => {
    await gsap.to(element, {
      scale: 0.96,
      translateY: '-5%',
      duration: 1.5,
      opacity: 0.4,
      ease: 'easeInOutCirc',
    });
    done();
  },

  onLeaveCancelled: async () => {
    await timeline.reverse();
    store.value.isRouting = false;
  },
};
</script>
