export const useElement = () => {
  const elements = reactive<HTMLElement[]>([]);

  const setElementRef = (
    el: Element | ComponentPublicInstance | null,
    targetArray: HTMLElement[] | null = null,
  ) => {
    if (el instanceof HTMLElement) {
      if (Array.isArray(targetArray)) {
        targetArray.push(el);
        return;
      }
      elements.push(el);
    }
  };

  return {
    elements,
    setElementRef,
  };
};

export default useElement;
