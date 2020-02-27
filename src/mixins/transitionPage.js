import gsap from 'gsap';

export default {
  inheritAttrs: false,

  transition: {
    beforeEnter(el) {
      this.$store.commit('updateTransitionPage', true);
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
        this.$store.commit('updateTransitionPage', false);
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
