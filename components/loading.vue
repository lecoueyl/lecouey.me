<template>
  <TransitionFade>
    <div
      v-if="loading"
      class="app-loading u-bgcolor-background"
    />
  </TransitionFade>
</template>


<script>
import { mapState } from 'vuex';
import TransitionFade from '~/components/transitions/fade';

export default {
  components: {
    TransitionFade,
  },

  computed: mapState([
    'loading',
  ]),

  methods: {
    start() {
      this.$store.commit('updateLoading', true);
    },
    finish() {
      setTimeout(() => {
        this.$store.commit('updateLoading', false);
      }, 1000);
    },
  },
};
</script>


<style lang="scss">
@import "~assets/scss/settings/animations";

.app-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: table;
  text-align: center;
}
</style>
