<template>
  <LayoutContainer class="h-screen">
    <Chat
      class="pb-24 sm:pb-0 sm:max-w-lg"
      @chatInitated="chatInitated = true"
    />
  </LayoutContainer>
</template>

<script>
import Chat from '~/components/Chat';
import transitionPage from '~/mixins/transitionPage';

export default {
  components: {
    Chat,
  },

  mixins: [transitionPage],

  data() {
    return {
      chatInitated: false,
    };
  },

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
