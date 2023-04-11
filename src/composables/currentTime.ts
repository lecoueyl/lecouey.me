// eslint-disable-next-line import/prefer-default-export
export function useCurrentTime() {
  const getCurrentJstTime = () => new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date());

  const currentJstTime = ref(getCurrentJstTime());

  function updateCurrentJstTimeEverySeconds() {
    setInterval(() => {
      currentJstTime.value = getCurrentJstTime();
    }, 1000);
  }

  onMounted(() => {
    updateCurrentJstTimeEverySeconds();
  });

  return {
    currentJstTime,
  };
}
