export const useCurrentTime = ({
  format = 'ja-JP',
  timeZone = 'Asia/Tokyo',
} = {}) => {
  const getCurrentTime = () => new Intl.DateTimeFormat(format, {
    timeZone,
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date());

  const currentTime = ref(getCurrentTime());
  const currentTimeArray = currentTime.value.split(':');

  function updateCurrentTimeEverySeconds() {
    setInterval(() => {
      currentTime.value = getCurrentTime();
    }, 1000);
  }

  onMounted(() => {
    updateCurrentTimeEverySeconds();
  });

  return {
    currentTime,
    currentTimeArray,
  };
};

export default useCurrentTime;
