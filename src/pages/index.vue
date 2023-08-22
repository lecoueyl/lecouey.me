<template>
  <main>
    <div class="container relative flex h-[calc(100vh-theme(space.20))] flex-col items-center">
      <div class="flex grow flex-col items-center justify-center sm:max-w-[75%] lg:max-w-[80%]">
        <h1 ref="title" class="w-full text-justify text-[13vw] sm:text-[8vw] lg:text-[7vw] 2xl:text-[6vw]">
          <div class="flex font-bold leading-[0.9]">
            <span>CREATIVE</span>
            <div class="grow py-2">
              <div class="relative h-full overflow-hidden rounded-full shadow-[inset_0_0_24px_0_rgba(0,0,0,0.05)]">
                <nuxt-img src="img/thumb1.jpg" class="absolute -z-10 w-full" />
              </div>
            </div>
          </div>

          <div class="flex font-bold leading-[0.9]">
            <div class="grow py-2">
              <div class="relative h-full overflow-hidden shadow-[inset_0_0_24px_0_rgba(0,0,0,0.05)]">
                <nuxt-img src="img/thumb2.jpg" class="absolute -z-10 w-full" />
              </div>
            </div>
            <span>DEVELOPER</span>
          </div>

          <div class="flex text-justify font-bold leading-[0.9]">
            <span>&FULL</span>
            <div class="grow py-2">
              <div class="relative h-full overflow-hidden rounded-full shadow-[inset_0_0_24px_0_rgba(0,0,0,0.05)]">
                <nuxt-img src="img/thumb3.jpg" class="absolute -z-10 w-full" />
              </div>
            </div>
            <span>STACK</span>
          </div>

          <div class="flex text-justify font-bold leading-[0.9]">
            <div class="grow py-2">
              <div class="relative h-full overflow-hidden rounded-full shadow-[inset_0_0_24px_0_rgba(0,0,0,0.05)]">
                <nuxt-img src="img/thumb1.jpg" class="absolute -z-10 w-full" />
              </div>
            </div>
            <span>ENGINEER</span>
          </div>
          <div class="flex justify-between text-justify font-bold leading-[0.9]">
            BASED
            <div class="grow py-2">
              <div class="relative h-full overflow-hidden rounded-full shadow-[inset_0_0_24px_0_rgba(0,0,0,0.05)]">
                <nuxt-img src="img/thumb2.jpg" class="absolute -z-10 w-full" />
              </div>
            </div>
            IN
          </div>
          <div class="flex text-justify font-bold leading-[0.9]">
            TOKYO
            <div class="grow py-2">
              <div class="relative h-full overflow-hidden rounded-full shadow-[inset_0_0_24px_0_rgba(0,0,0,0.05)]">
                <nuxt-img src="img/thumb3.jpg" class="absolute -z-10 w-full" />
              </div>
            </div>
          </div>
        </h1>

        <p class="w-full text-2xl text-neutral-400">
          <span class="">with a passion for creating intuitive and visually appealing user interfaces</span>
        </p>
      </div>

      <div class="flex w-full justify-between pb-6">
        <div>
          {{ currentJstTime }} JST
        </div>

        <div class="text-shine">
          (SCROLL)
        </div>
      </div>
    </div>

    <Marquee class="text-7xl uppercase">
      This is a test
    </Marquee>
  </main>
</template>

<script setup lang="ts">
// const title = ref();

const { currentJstTime } = useCurrentTime();

onMounted(async () => {
  disableScroll();

  // title.value.showText();

  // enableScroll();
});
</script>
