type IntersectionObserverInit = {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export const useIntersectionObserver = ({
  target,
  once = true,
  options = { root: null, rootMargin: '0px', threshold: [0.3] },
  onIntersect = (_entry: IntersectionObserverEntry) => {}, // eslint-disable-line no-unused-vars
}: {
  target: Ref<HTMLElement>,
  once?: boolean,
  options?: IntersectionObserverInit,
  onIntersect?: (entry: IntersectionObserverEntry) => void, // eslint-disable-line no-unused-vars
}) => {
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
    observer = new IntersectionObserver(([entry]) => {
      if (once && isIntersecting.value) return;

      intersectionRatio.value = entry.intersectionRatio;

      if (entry.intersectionRatio > 0) {
        isIntersecting.value = true;
        isFullyInView.value = entry.intersectionRatio >= 1;
        onIntersect(entry);

        return;
      }

      isIntersecting.value = false;
    }, options);

    observe();
  });

  onUnmounted(unobserve);

  return {
    isIntersecting,
    isFullyInView,
    observe,
    unobserve,
  };
};

export default useIntersectionObserver;
