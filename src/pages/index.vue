<template>
  <LayoutContainer class="h-screen">
    <Chat class="pb-24 sm:pb-0 sm:max-w-lg" />
  </LayoutContainer>
</template>

<script>
import transitionPage from '~/mixins/transitionPage';

export default {
  mixins: [transitionPage],

  head() {
    return {
      title: this.$t('index.head.title'),
    };
  },
};
</script>
