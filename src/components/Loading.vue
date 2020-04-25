<template>
  <TransitionFade>
    <div
      v-if="false"
      class="c-loading u-bgcolor-background"
    />
  </TransitionFade>
</template>

<script>
import { mapState } from 'vuex';
import TransitionFade from '~/components/transitions/Fade';

export default {
  components: {
    TransitionFade,
  },

  computed: mapState([
    'loading',
  ]),

  methods: {
    start() {
      this.$store.commit('setLoading', true);
    },
    finish() {
      setTimeout(() => {
        this.$store.commit('setLoading', false);
      }, 1000);
    },
  },
};
</script>


<style lang="scss">
.c-loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: table;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
