<template>
  <LayoutContainer class="pt-48 pb-16">
    <SvgError class="w-64 sm:w-96 h-auto" />
    <UiTitle class="py-16">
      <template v-if="error.statusCode === 404">
        {{ $t('error.notFound') }}
      </template>

      <template v-else>
        {{ $t('error.occurred') }}
      </template>
    </UiTitle>

    <UiLink
      tag="nuxt-link"
      :to="localePath('index')"
      class="text-lg"
    >
      {{ $t('error.goHome') }}
    </UiLink>
  </LayoutContainer>
</template>

<script>
import SvgError from '~/assets/svg/error.svg?inline';

export default {
  components: {
    SvgError,
  },

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

  mounted() {
    this.$store.commit('setPageTransitioning', false);
  },
};
</script>
