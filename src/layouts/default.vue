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

  head() {
    return {
      link: [
        { rel: 'canonical', href: `${this.$config.app.url}${this.$route.path}` },
      ],
    };
  },
};
</script>
