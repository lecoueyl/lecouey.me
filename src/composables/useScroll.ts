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

export default useScroll;
