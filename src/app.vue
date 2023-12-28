<template>
  <div>
    <SeoKit />

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
        class="fill-primary-11"
        vector-effect="non-scaling-stroke"
        d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

let timeline: GSAPTimeline; // eslint-disable-line no-undef

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const transition = ref();
const store = useStore();
const settings = useRuntimeConfig().public;
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

const transitionProps = {
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
        duration: 1,
        ease: 'power4',
        attr: { d: paths.finish.unfilled },
      });

    done();
    store.value.isRouting = false;
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

// onMounted(async () => {

// });

useNuxtApp().hook('page:finish', () => {
  ScrollTrigger.refresh();
});

useSchemaOrg([
  defineOrganization({
    name: settings.siteName,
    logo: '/favicon.svg',
    sameAs: [
      'https://biz-maps.com/item/kVZEAX4dZE',
    ],
  }),
  defineWebSite(),
  defineWebPage(),
]);
</script>
