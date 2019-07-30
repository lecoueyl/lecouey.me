<template>
  <div class="app-layout">
    <Pointer />
    <LayoutHeader />
    <nuxt />
    <LayoutFooter />
  </div>
</template>


<script>
import Pointer from '~/components/cursor';
import LayoutHeader from '~/components/layouts/header';
import LayoutFooter from '~/components/layouts/footer';

export default {
  components: {
    Pointer,
    LayoutHeader,
    LayoutFooter,
  },

  head() {
    return {
      bodyAttrs: {
        class: 'u-bgcolor-background u-bgimage u-bgimage-light',
      },
    };
  },
};
</script>
