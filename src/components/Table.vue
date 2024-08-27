<template>
  <ul
    ref="target"
    class="grid"
  >
    <li class="grid grid-cols-3 gap-6 pb-6 capitalize text-neutral-600">
      <span v-for="header, index in headers" :key="index">{{ header }}</span>
    </li>

    <li class="h-px w-full bg-neutral-300" data-gsap="border" />

    <template
      v-for="dataObject, dataIndex in data"
      :key="dataIndex"
    >
      <li class="group relative grid grid-cols-3 gap-6 py-6 text-xl font-normal">
        <div
          v-for="dataEntry, entryIndex in dataObject"
          :key="entryIndex"
          class="relative overflow-hidden"
        >
          <span class="block translate-y-0 transition-transform duration-300 group-hover:-translate-y-full">
            {{ dataEntry }}
          </span>

          <span class="absolute left-0 top-full block w-full translate-y-0 font-light italic transition-transform duration-300 group-hover:-translate-y-full">
            {{ dataEntry }}
          </span>
        </div>
      </li>

      <li class="h-px w-full bg-neutral-300" data-gsap="border" />
    </template>
  </ul>
</template>

<script setup lang="ts">
const { gsap } = useGsap();

const props = defineProps({
  data: {
    default: () => [],
    type: Array,
  },

  delay: {
    default: 0,
    type: Number,
  },

  isShowing: {
    default: false,
    type: Boolean,
  },
});

const emit = defineEmits(['done']);

const headers = computed(() => (props.data.length > 0 ? Object.keys(props.data[0]) : []));

const gsapSetting = {
  duration: 2,
  ease: 'easeInOutCirc',
  stagger: 0.1,
  delay: props.delay,
};

const target = ref<HTMLElement>();
const { isIntersecting } = useIntersectionObserver(target as Ref<HTMLElement>);

const gsapPlay = async () => {
  await gsap.fromTo(
    '[data-gsap="border"]',
    { scaleX: 0 },
    { scaleX: 1, ...gsapSetting },
  );

  emit('done');
};

const gsapReverse = async () => {
  await gsap.fromTo(
    '[data-gsap="border"]',
    { scaleX: 1 },
    { scaleX: 0, ...gsapSetting },
  );
};

onMounted(async () => {
  gsap.set('[data-gsap="border"]', {
    scaleX: 0,
    transformOrigin: 'left',
  });

  if (!props.isShowing) return;

  gsapPlay();
});

watch(
  () => [props.isShowing, isIntersecting.value],
  (newValue) => {
    if (newValue) {
      gsapPlay();
    } else {
      gsapReverse();
    }
  },
);
</script>
