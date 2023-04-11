<template>
  <div class="grid gap-10 rounded-t-[2.5rem] bg-neutral-12 p-10 text-neutral-1">
    <div class="text-6xl">
      Let's work together
    </div>

    <ul class="flex gap-8">
      <li>
        <div class="text-sm text-neutral-11">
          Version
        </div>
        <div>2023</div>
      </li>
      <li>
        <div class="text-sm text-neutral-11">
          Local time
        </div>
        <div>{{ currentJstTime }} JST</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
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
</script>
