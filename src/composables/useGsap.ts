import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';

if (process.client) {
  gsap.registerPlugin(CustomEase);
}

export const useGsap = () => {
  const ease = {
    inOut: CustomEase.create(
      'custom',
      // eslint-disable-next-line max-len
      'M0,0 C0,0 0.032,0.001 0.05,0.006 0.072,0.012 0.09,0.016 0.11,0.029 0.152,0.056 0.183,0.078 0.22,0.114 0.271,0.166 0.301,0.204 0.345,0.266 0.456,0.424 0.386,1 0.95,1 0.974,1 1,1 1,1 ',
    ),
  };

  return {
    ease,
  };
};

export default useGsap;
