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
  const currentHour = Number(currentTimeArray[0]);
  const currentMinute = Number(currentTimeArray[1]);

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
    currentHour,
    currentMinute,
  };
};

export default useCurrentTime;
