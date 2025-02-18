export const useStore = () => useState('store', () => ({
  isRouting: false,
}));

export default useStore;
