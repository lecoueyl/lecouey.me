interface IntersectionOptions {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersectionObserver({
  target,
  once = true,
  options = { root: null, rootMargin: '0px', threshold: [0.8] },
}: { target: Ref<HTMLElement>, once?: boolean, options?: IntersectionOptions }) {
  const intersectionRatio = ref(0);
  const isIntersecting = ref(false);
  const isFullyInView = ref(false);
  let observer: IntersectionObserver;

  function observe() {
    if (target.value) {
      observer.observe(target.value);
    }
  }

  function unobserve() {
    if (!observer) return;

    if (target.value) {
      observer.unobserve(target.value);
    }
  }

  onMounted(() => {
    if (!target) return;

    observer = new IntersectionObserver(([entry]) => {
      if (once && isIntersecting.value) return;

      intersectionRatio.value = entry.intersectionRatio;
      if (entry.intersectionRatio > 0) {
        isIntersecting.value = true;
        isFullyInView.value = entry.intersectionRatio >= 1;
        return;
      }

      isIntersecting.value = false;
    }, options);

    observe();
  });

  onUnmounted(unobserve);

  return {
    intersectionRatio,
    isIntersecting,
    isFullyInView,
    observe,
    unobserve,
  };
}

export default useIntersectionObserver;
