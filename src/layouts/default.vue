<template>
  <div>
    <Loading />
    <Pointer />
    <LayoutHeader />
    <nuxt role="main" />
    <LayoutFooter />
  </div>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true });
  },
};
</script>
