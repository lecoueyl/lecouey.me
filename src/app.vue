<template>
  <div>
    <LayoutHeader />

    <NuxtLayout>
      <NuxtPage :transition="transitionProps" />
    </NuxtLayout>

    <LayoutFooter />

    <svg
      class="fixed top-0 z-50"
      :class="store.isRouting ? 'block' : 'hidden'"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        ref="targetPath"
        class="fill-neutral-950"
        vector-effect="non-scaling-stroke"
        d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
      />
    </svg>
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
const targetPath = ref();

const paths = {
  start: {
    unfilled: 'M 0 100 V 100 Q 50 100 100 100 V 100 z',
    inBetween: {
      curve1: 'M 0 100 V 50 Q 50 0 100 50 V 100 z',
      curve2: 'M 0 100 V 50 Q 50 100 100 50 V 100 z',
    },
    filled: 'M 0 100 V 0 Q 50 0 100 0 V 100 z',
  },
  finish: {
    filled: 'M 0 0 V 100 Q 50 100 100 100 V 0 z',
    inBetween: {
      curve1: 'M 0 0 V 50 Q 50 0 100 50 V 0 z',
      curve2: 'M 0 0 V 50 Q 50 100 100 50 V 0 z',
    },
    unfilled: 'M 0 0 V 0 Q 50 0 100 0 V 0 z',
  },
};

const transitionProps: TransitionProps = {
  mode: 'out-in',

  onBeforeLeave: () => {
    timeline = gsap.timeline();
    store.value.isRouting = true;
  },

  onLeave: async (_el: Element, done: Function) => {
    await timeline
      .set(targetPath.value, {
        attr: { d: paths.start.unfilled },
      })
      .to(targetPath.value, {
        duration: 0.8,
        ease: 'power4.in',
        attr: { d: paths.start.inBetween.curve2 },
      }, 0)
      .to(targetPath.value, {
        duration: 0.2,
        ease: 'power1',
        attr: { d: paths.start.filled },
      });
    done();
  },

  onEnter: async (_el: Element, done: Function) => {
    await timeline
      .set(targetPath.value, {
        attr: { d: paths.finish.filled },
      })
      .to(targetPath.value, {
        duration: 0.2,
        ease: 'sine.in',
        attr: { d: paths.finish.inBetween.curve2 },
      })
      .to(targetPath.value, {
        duration: 0.5,
        ease: 'power4.out',
        attr: { d: paths.finish.unfilled },
        onUpdate: () => {
          // call done() before animation is completed
          const currentTime = timeline.time();
          if (timeline.duration() - currentTime <= 0.2) {
            done();
            store.value.isRouting = false;
          }
        },
      });
  },

  onLeaveCancelled: async () => {
    await timeline.reverse();
    store.value.isRouting = false;
  },

  onEnterCancelled: async () => {
    await timeline.reverse();
    store.value.isRouting = false;
  },
};
</script>
