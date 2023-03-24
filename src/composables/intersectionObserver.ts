// eslint-disable-next-line import/prefer-default-export
export function useIntersectionObserver({
  target,
  once = true,
  options = { threshold: [0.8] },
}: {
  target?: Ref<HTMLElement>,
  once?: boolean,
  options?: IntersectionObserverInit,
} = {}) {
  const isIntersecting = ref(false);
  let observer: IntersectionObserver;

  function observe() {
    if (!('IntersectionObserver' in window) || !target?.value) return;

    observer.observe(target.value);
  }

  function unobserve() {
    if (!observer || !target?.value) return;

    observer.unobserve(target.value);
  }

  onMounted(() => {
    observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (once && isIntersecting.value) return;

      isIntersecting.value = entries[0].isIntersecting;
    }, options);

    observe();
  });

  onUnmounted(unobserve);

  return {
    isIntersecting,
    observe,
    unobserve,
  };
}
