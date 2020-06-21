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
import Pointer from '~/components/Pointer';
import LayoutHeader from '~/components/layouts/LayoutHeader';
import LayoutFooter from '~/components/layouts/LayoutFooter';

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
