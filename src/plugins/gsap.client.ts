import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CustomEase);

  CustomEase.create('easeInOutCirc', '.87, 0, .13, 1');
  CustomEase.create('easeIntCirc', '.19, 1, .22, 1');

  return {
    provide: {
      gsap,
      ScrollTrigger,
    },
  };
});
