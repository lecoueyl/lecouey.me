<template>
  <div>
    <Intro
      v-if="!introFinished"
      @introFinished="introFinished = true"
    />

    <Pointer />

    <LayoutHeader />

    <nuxt role="main" />

    <LayoutFooter />
  </div>
</template>

<script>
import Intro from '~/components/Intro';
import Pointer from '~/components/Cursor';
import LayoutHeader from '~/components/layouts/Header';
import LayoutFooter from '~/components/layouts/Footer';

export default {
  components: {
    Intro,
    Pointer,
    LayoutHeader,
    LayoutFooter,
  },

  data() {
    return {
      introFinished: false,
    };
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
