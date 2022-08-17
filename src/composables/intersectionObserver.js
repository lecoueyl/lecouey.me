export function useInView({
  element,
  once = true,
} = {}) {
  const inView = ref(false);

  if ('IntersectionObserver' in window && element) {
    const callback = (entries) => {
      if (once && inView.value) return;
      inView.value = entries[0].isIntersecting;
    };

    const observer = new IntersectionObserver(callback, {
      threshold: [0.8],
    });

    observer.observe(element);
  }

  return inView;
}

export default useInView;
