<template>
  <main>
    <section class="o-container u-relative">
      <div class="o-grid">
        <div class="o-grid__col u-7/12@sm">
          <Chat
            class="u-pb-x10@xs u-pb-x4@sm"
            @chatInitated="chatInitated = true"
          />
        </div>
      </div>
    </section>
  </main>
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

  watch: {
    chatInitated() {
      this.$store.commit('updatePageTransitioning', false);
    },
  },

  head() {
    return {
      title: this.$t('index.head.title'),
    };
  },
};
</script>
