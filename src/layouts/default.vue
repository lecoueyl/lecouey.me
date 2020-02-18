<template>
  <div>
    <Pointer />
    <LayoutHeader />
    <nuxt role="main" />
    <LayoutFooter />
  </div>
</template>

<script>
import Pointer from '~/components/Cursor';
import LayoutHeader from '~/components/layouts/Header';
import LayoutFooter from '~/components/layouts/Footer';

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
