
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CustomEase);

  CustomEase.create('circ2.inOut', '.87, 0, .13, 1');
  CustomEase.create('circ2.out', '.19, 1, .22, 1');

  // Additional custom eases
  CustomEase.create('bouncy', '.34, 1.64, .64, 1');
  CustomEase.create('opacity', '.4, 0, .2, 1');

  // Quartic ease family
  CustomEase.create('quart.inOut', '.32, .72, 0, 1');
  CustomEase.create('quart.in', '.5, 0, .75, 0');
  CustomEase.create('quart.out', '.25, 1, .5, 1');

  return {
    provide: {
      gsap,
      ScrollTrigger,
    },
  };
});
