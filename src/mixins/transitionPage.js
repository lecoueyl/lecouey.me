import gsap from 'gsap';

export default {
  inheritAttrs: false,

  transition: {
    beforeEnter(el) {
      this.$store.commit('setPageTransitioning', true);
      gsap.set(el, {
        autoAlpha: 0,
      });
    },

    enter(el, done) {
      gsap.to(el, {
        autoAlpha: 1,
        delay: 0.3,
        duration: 0.4,
        ease: 'circ.inOut',
      }).then(() => {
        this.$store.commit('setPageTransitioning', false);
        done();
      });
    },

    leave(el, done) {
      this.$store.commit('setPageTransitioning', true);
      gsap.to(el, {
        autoAlpha: 0,
        delay: 0.5,
        duration: 0.4,
        ease: 'circ.inOut',
      }).then(() => done());
    },
  },
};
