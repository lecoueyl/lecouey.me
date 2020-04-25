<template>
  <main class="container u-p-x10">
    <p class="u-p-x10 u-text-center">
      <span
        v-if="error.statusCode === 404"
        v-t="'error.notFound'"
        class="o-type-l"
      />

      <span
        v-else
        v-t="'error.occured'"
      />
    </p>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      required: true,
      type: Object,
    },
  },

  mounted() {
    this.$store.commit('setPageTransitioning', false);
  },

  head() {
    return {
      title: this.error.statusCode,
    };
  },
};
</script>
