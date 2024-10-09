import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const lenis = new Lenis({
  duration: 0.5,
  gestureOrientation: 'vertical',
  lerp: 0.2,
  orientation: 'vertical',
  smoothWheel: true,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => lenis.raf(time * 1000));

gsap.ticker.lagSmoothing(0);
lenis.scrollTo(0);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('lenis', lenis);
});
