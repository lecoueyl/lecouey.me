import type { gsap } from 'gsap';
import type { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useGsap = () => {
  const { $gsap, $ScrollTrigger } = useNuxtApp();

  return {
    gsap: $gsap as typeof gsap,
    ScrollTrigger: $ScrollTrigger as typeof ScrollTrigger,
  };
};

export default useGsap;
