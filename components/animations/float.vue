<template>
  <div ref="content">
    <slot />
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  mounted() {
    anime({
      targets: this.$refs.content,
      translateX: () => `${anime.random(5, 10)}%`,
      translateY: () => `${anime.random(5, 10)}%`,
      easing: 'easeInOutQuad',
      loop: true,
      direction: 'alternate',
      duration: anime.random(5000, 10000),
    });
  },
};
</script>
