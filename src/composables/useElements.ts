export const useElement = () => {
  const elements = reactive<HTMLElement[]>([]);

  const setElementRef = (el: Element | ComponentPublicInstance | null) => {
    if (el instanceof HTMLElement) elements.push(el);
  };
  return {
    elements,
    setElementRef,
  };
};

export default useElement;
