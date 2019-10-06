<template>
  <main>
    <section class="o-container u-mb-x10 u-relative u-height-100">
      <div class="o-grid u-height-100">
        <div class="o-grid__col u-7/12@sm">
          <Chat />
        </div>
      </div>
    </section>
  </main>
</template>


<script>
import anime from 'animejs';
import Chat from '~/components/chat';

export default {
  head() {
    return {
      title: this.$t('index.title'),
    };
  },

  components: {
    Chat,
  },

  transition: {
    mode: 'out-in',
    css: false,

    enter(el, done) {
      anime({
        targets: el,
        translateY: [0, 1],
        duration: 1000,
        easing: 'linear',
        complete: done,
      });
    },

    leave(el, done) {
      anime({
        targets: el,
        translateY: [1, 0],
        duration: 1000,
        easing: 'linear',
        complete: done,
      });
    },
  },
};
</script>
