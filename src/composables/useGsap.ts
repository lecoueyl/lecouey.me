export const useGsap = () => {
  const { $gsap, $ScrollTrigger } = useNuxtApp();

  return {
    gsap: $gsap,
    ScrollTrigger: $ScrollTrigger,
  };
};

export default useGsap;
