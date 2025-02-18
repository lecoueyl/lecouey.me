export const usePage = () => {
  const store = useStore();
  const isPageDisplayed = ref(true);

  watch(
    () => [store.value.isRouting],
    ([isRouting]) => {
      isPageDisplayed.value = !isRouting;
    },
  );

  return {
    isPageDisplayed,
  };
};

export default usePage;
