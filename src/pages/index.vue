<template>
  <main>
    <section class="o-container u-relative u-height-100">
      <div class="o-grid u-height-100">
        <div class="o-grid__col u-7/12@sm">
          <Chat />
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

  head() {
    return {
      title: this.$t('index.title'),
    };
  },
};
</script>
