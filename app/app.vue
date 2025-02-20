<template>
  <div>
    <DevTool />
    <NuxtLayout>
      <NuxtPage class="bg-neutral-100" :transition="transition" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import type { TransitionProps } from 'vue';

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
const { gsap } = useGsap();
const { enableScroll, disableScroll } = useScroll();

const transitionStart = () => {
  store.value.isRouting = true;
  disableScroll();
};

const transitionEnd = () => {
  store.value.isRouting = false;
  enableScroll();
};

const transition: TransitionProps = {
  onBeforeEnter: async (element: Element) => {
    await gsap.set(element, {
      position: 'fixed',
      width: '100%',
    });

    transitionStart();
  },

  onEnter: async (element: Element, done: () => void) => {
    const timeline = gsap.timeline();
    await timeline
      .fromTo(
        element,
        {
          clipPath: 'inset(100% 0 0 0)',
        },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.5,
          ease: 'expo.inOut',
          onUpdate: () => {
            const durationLeft = timeline.duration() - timeline.time();
            if (durationLeft <= 0.5) {
              done();
              transitionEnd();
            }
          },
        },
      );

    gsap.set(element, { clearProps: 'all' });
  },

  onEnterCancelled: async () => {
    transitionEnd();
  },

  onBeforeLeave: async (element: Element) => {
    gsap.set(element, {
      position: 'absolute',
      width: '100%',
    });

    transitionStart();
  },

  onLeave: async (element: Element, done: () => void) => {
    await gsap.to(element, {
      scale: 0.96,
      translateY: '-5%',
      duration: 1.5,
      opacity: 0.4,
      ease: 'circ2.inOut',
    });

    done();
  },

  onLeaveCancelled: async () => {
    transitionEnd();
  },
};
</script>
