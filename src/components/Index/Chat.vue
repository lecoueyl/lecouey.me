<template>
  <div
    ref="container"
    class="mx-auto flex max-w-2xl flex-col gap-4 rounded-3xl border border-neutral-6 py-16 px-10"
  >
    <div class="text-sm text-neutral-11">
      Me
    </div>

    <div
      v-for="chat, index in thread"
      :key="index"
    >
      <Transition
        enter-active-class="duration-200 in-out-expo motion-reduce:transition-none"
        enter-from-class="scale-90"
        enter-to-class="scale-100 translate-y-0"
        leave-active-class="duration-200 ease-out motion-reduce:transition-none"
        leave-from-class="scale-100"
        leave-to-class="scale-90 translate-y-0"
        mode="out-in"
      >
        <div
          v-if="chat.status === 'typing'"
          class="inline-block max-w-[60%] rounded-2xl bg-primary-11 p-6 text-2xl text-primary-1"
        >
          <div class="flex items-center space-x-2">
            &#8203;
            <div class="h-4 w-4 animate-pulse rounded-full bg-current" />
            <div class="h-4 w-4 animate-pulse rounded-full bg-current animation-delay-200" />
            <div class="h-4 w-4 animate-pulse rounded-full bg-current animation-delay-400" />
          </div>
        </div>

        <div
          v-else
          class="inline-block rounded-2xl bg-neutral-2 p-6 text-2xl"
        >
          Hi, any idea
        </div>
      </Transition>
    </div>

    <div>
      <Transition
        enter-active-class="duration-200 in-out-expo motion-reduce:transition-none"
        enter-from-class="scale-90"
        enter-to-class="scale-100 translate-y-0"
        leave-active-class="duration-200 ease-out motion-reduce:transition-none"
        leave-from-class="scale-100"
        leave-to-class="scale-90 translate-y-0"
        mode="out-in"
      >
        <div
          v-if="!inView.value"
          class="inline-block max-w-[60%] rounded-2xl bg-primary-11 p-6 text-2xl text-primary-1"
        >
          <div class="flex items-center space-x-2">
            &#8203;
            <div class="h-4 w-4 animate-pulse rounded-full bg-current" />
            <div class="h-4 w-4 animate-pulse rounded-full bg-current animation-delay-200" />
            <div class="h-4 w-4 animate-pulse rounded-full bg-current animation-delay-400" />
          </div>
        </div>

        <div
          v-else
          class="inline-block rounded-2xl bg-neutral-2 p-6 text-2xl"
        >
          Hi, any idea
        </div>
      </Transition>
    </div>

    <div>
      <div class="inline-block rounded-2xl bg-neutral-2 p-6 text-2xl">
        How about doing this
      </div>
    </div>

    <div class="pt-4 text-right text-sm text-neutral-11">
      Myself
    </div>

    <div class="text-right">
      <div class="inline-block max-w-[60%] rounded-2xl bg-primary-11 p-6 text-2xl text-primary-1">
        Great, and take the opportunity to explain my process
      </div>
    </div>

    <div class="text-right">
      <div class="inline-block max-w-[60%] rounded-2xl bg-primary-11 p-6 text-2xl text-primary-1">
        <div class="flex items-center space-x-2">
          &#8203;
          <div class="h-4 w-4 animate-pulse rounded-full bg-current" />
          <div class="h-4 w-4 animate-pulse rounded-full bg-current animation-delay-200" />
          <div class="h-4 w-4 animate-pulse rounded-full bg-current animation-delay-400" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInView } from '@/composables/intersectionObserver';

const container = ref();
const thread = reactive([
  {
    sender: 1,
    content: 'Hi, any idea',
    status: 'typing',
  },
  {
    sender: 1,
    content: 'How about doing this',
    status: 'sent',
  },
  {
    sender: 2,
    content: 'Great, and take the opportunity to explain my process',
    status: 'sent',
  },
]);

const inView = computed(() => useInView({ element: container.value }));
</script>
