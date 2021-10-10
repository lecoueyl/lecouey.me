<template>
  <LayoutContainer class="h-screen">
    <Chat
      class="pb-24 sm:pb-0 sm:max-w-lg"
      @chatInitated="chatInitated = true"
    />
  </LayoutContainer>
</template>

<script>
import transitionPage from '~/mixins/transitionPage';

export default {
  mixins: [transitionPage],

  data: () => ({
    chatInitated: false,
  }),

  head() {
    return {
      title: this.$t('index.head.title'),
    };
  },

  watch: {
    chatInitated() {
      this.$store.commit('setPageTransitioning', false);
    },
  },
};
</script>
