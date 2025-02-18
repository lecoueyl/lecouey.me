import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior: (to, from) => {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }

    if (to === from) {
      return {
        left: 0,
        top: 0,
        behavior: 'smooth',
      };
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          left: 0,
          top: 0,
        });
      }, 1080); // scroll in between page transition
    });
  },
};
