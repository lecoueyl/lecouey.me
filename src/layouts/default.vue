<template>
  <div>
    <Intro v-if="!$store.state.introFinished" />

    <Pointer />

    <LayoutHeader />

    <nuxt role="main" />

    <LayoutFooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        { rel: 'canonical', href: `${this.$config.app.url}${this.$route.path}` },
      ],
    };
  },
};
</script>
