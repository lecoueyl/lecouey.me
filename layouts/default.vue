<template>
  <div>
    <Pointer />
    <LayoutHeader role="header" />
    <nuxt role="main" />
    <LayoutFooter role="footer" />
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
        class: 'u-bgcolor-background',
      },
    };
  },
};
</script>
