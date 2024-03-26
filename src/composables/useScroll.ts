export const useScroll = () => {
  function disable() {
    document.querySelector('body')?.classList.add('overflow-hidden');
  }

  function enable() {
    document.querySelector('body')?.classList.remove('overflow-hidden');
  }

  return {
    disable,
    enable,
  };
};

export function useScrollPercentage(target: Ref<HTMLElement>) {
  const scrollingPercentage = ref(0);

  function updateScrollingPercentage() {
    if (!target) return;

    const { top, bottom, height } = target.value.getBoundingClientRect();
    const visibleHeight = Math.max(0, Math.min(height, bottom) - Math.max(0, top));
    const bodyScrollTop = document.body.getBoundingClientRect().top * -1;
    console.log(bottom - bodyScrollTop);
    scrollingPercentage.value = Math.round((visibleHeight / height) * 100);
  }

  onMounted(() => {
    updateScrollingPercentage();
    window.addEventListener('scroll', updateScrollingPercentage);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollingPercentage);
  });

  return {
    scrollingPercentage,
  };
}

export default useScroll;
