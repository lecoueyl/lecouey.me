<template>
  <div class="flex items-center gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      class="h-4 w-4"
    >
      <g>
        <path fill="currentColor" fill-rule="evenodd" d="M7.2.808V.8a.8.8 0 0 1 1.6 0v.008a.8.8 0 0 1-1.6 0Zm-3.598.967v-.008a.8.8 0 0 1 1.6 0v.008a.8.8 0 0 1-1.6 0ZM.972 4.406v-.008a.8.8 0 0 1 1.599 0v.008a.8.8 0 0 1-1.6 0Zm-.968 3.59v.008a.8.8 0 0 0 1.6 0v-.008a.8.8 0 0 0-1.6 0Zm.968 3.606v-.008a.8.8 0 0 1 1.599 0v.008a.8.8 0 0 1-1.6 0Zm2.63 2.623v.008a.8.8 0 0 0 1.6 0v-.008a.8.8 0 0 0-1.6 0Zm3.598.976v-.008a.8.8 0 0 1 1.6 0v.008a.8.8 0 0 1-1.6 0Zm3.599-.976v.008a.8.8 0 0 0 1.6 0v-.008a.8.8 0 0 0-1.6 0Zm2.63-2.623v-.008a.8.8 0 0 1 1.6 0v.008a.8.8 0 0 1-1.6 0Zm.968-3.606v.008a.8.8 0 0 0 1.6 0v-.008a.8.8 0 0 0-1.6 0Zm-.968-3.59v-.008a.8.8 0 1 1 1.6 0v.008a.8.8 0 0 1-1.6 0ZM10.8 1.767v.008a.8.8 0 0 0 1.6 0v-.008a.8.8 0 0 0-1.6 0Z" clip-rule="evenodd" />
        <path
          class="origin-center transition-transform"
          fill="currentColor"
          d="M8 4.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
          :style="{'transform': `rotate(${getDegreesFromModulo(currentHour, 12)}deg)`}"
        />
        <path
          class="origin-center transition-transform"
          fill="currentColor"
          d="M8 8.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5Z"
          :style="{'transform': `rotate(${getDegreesFromModulo(currentMinute, 60)}deg)`}"
        />
      </g>
    </svg>

    <div>
      {{ currentHour }}<span class="animate-pulse">:</span>{{ currentMinute }} JST
    </div>
  </div>
</template>

<script setup lang="ts">
const { currentHour, currentMinute } = useTime();
const getDegreesFromModulo = (value: number, modulo: number) => ((value % modulo) / modulo) * 360;
</script>
