import gsap from 'gsap';

export default {
  inheritAttrs: false,

  transition: {
    beforeEnter(el) {
      gsap.set(el, {
        autoAlpha: 0,
      });
    },

    enter(el, done) {
      gsap.to(el, {
        duration: 2.4,
        autoAlpha: 1,
        ease: 'circ.inOut',
      }).then(() => done());
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
