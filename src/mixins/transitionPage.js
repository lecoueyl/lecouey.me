import gsap from 'gsap';

export default {
  inheritAttrs: false,

  transition: {
    beforeEnter(el) {
      this.$store.commit('updatePageTransitioning', true);
      gsap.set(el, {
        autoAlpha: 0,
      });
    },

    enter(el, done) {
      gsap.to(el, {
        duration: 0.4,
        autoAlpha: 1,
        ease: 'circ.inOut',
      }).then(() => {
        this.$store.commit('updatePageTransitioning', false);
        done();
      });
    },

    leave(el, done) {
      gsap.to(el, {
        duration: 0.4,
        autoAlpha: 0,
        ease: 'circ.inOut',
      }).then(() => done());
    },
  },
};
