export const useTime = ({
  format = 'ja-JP',
  timeZone = 'Asia/Tokyo',
} = {}) => {
  const getCurrentTime = () => new Intl.DateTimeFormat(format, {
    timeZone,
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date());

  const currentTime = ref(getCurrentTime());
  const currentTimeArray = computed(() => currentTime.value.split(':'));
  const currentHour = computed(() => Number(currentTimeArray.value[0]));
  const currentMinute = computed(() => Number(currentTimeArray.value[1]));

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

export default useTime;
