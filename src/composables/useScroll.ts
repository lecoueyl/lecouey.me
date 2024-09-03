export function useScroll() {
  const preventScroll = (event: Event) => {
    event.preventDefault();
  };

  const disableScroll = () => {
    window.addEventListener('scroll', preventScroll, { passive: false });
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
  };

  const enableScroll = () => {
    window.removeEventListener('scroll', preventScroll);
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
  };

  onUnmounted(() => {
    enableScroll();
  });

  return {
    disableScroll,
    enableScroll,
  };
}

export default useScroll;
