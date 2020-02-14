<template>
  <main class="container u-p-x10">
    <p class="u-p-x10 u-text-center">
      <template v-if="error.statusCode === 404">
        <span class="o-type-xl">
          404
        </span>
        <br>
        <span class="o-type-l">
          {{ $t('error.notFound') }}
        </span>
      </template>

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

  head() {
    return {
      title: this.error.statusCode,
    };
  },
};
</script>
