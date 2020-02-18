<template>
  <main>
    <section class="o-container u-mb-x10 u-relative u-height-100">
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

export default {
  components: {
    Chat,
  },

  mounted() {
    this.$store.commit('updateTheme', 'light');
  },

  head() {
    return {
      title: this.$t('index.title'),
    };
  },
};
</script>
