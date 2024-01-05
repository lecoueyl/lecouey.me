<template>
  <main>
    <div class="flex h-[calc(100vh-theme(space.16))] flex-col items-center gap-10 py-10">
      <div class="container flex grow flex-col gap-10">
        <div class="grow">
          <TransitionRevealText
            tag="h1"
            :show="isPageDisplayed"
            class="text-[8vw] font-bold uppercase leading-[0.9] tracking-tight"
          >
            Creative developer & fullstack engineer based in Tokyo
          </TransitionRevealText>
        </div>
        <!-- <h1 ref="heroMain" class="grow  font-bold uppercase leading-[0.9] tracking-tight">
          <span
            v-for="text, index in [
              'Creative',
              'developer',
              '&',
              'full',
              'stack',
              'engineer',
              'based',
              'in',
              'Tokyo',
            ]"
            :key="index"
            class="inline-block overflow-hidden"
          >
            <span class="inline-block">{{ text }}</span>&nbsp;
          </span>

        </h1> -->

        <TransitionRevealText
          :delay="0.3"
          :show="isPageDisplayed"
          class="max-w-xs text-[2.5vw] leading-[1.15] text-neutral-700 xl:max-w-lg"
        >
          With a passion for creating intuitive and visually appealing user interfaces
        </TransitionRevealText>

        <!-- <h1 ref="heroMain" class="w-full text-justify text-[13vw] sm:text-[8vw] lg:text-[7vw] 2xl:text-[6vw]">
          <div class="flex gap-2 overflow-hidden font-bold leading-[0.9]">
            <span>CREATIVE</span>

            <div class="grow py-1">
              <div class="relative h-full overflow-hidden shadow-[inset_0_0_24px_0_rgba(0,0,0,0.05)]">
                <nuxt-img src="img/thumb2.jpg" class="absolute -z-10 w-full" />
              </div>
            </div>
          </div>

          <div class="flex gap-2 overflow-hidden font-bold leading-[0.9]">
            <div class="relative flex grow flex-col items-stretch py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="flex-[1_1_0]"
                preserveAspectRatio="none"
                viewBox="0 0 252 70"
                fill="none"
              >
                <path d="M56.3685 0C53.791 0 51.2144 0.536705 49.125 1.61012C46.3483 3.03625 42.6019 3.55608 39.0789 3.0034C33.7838 2.17265 28.2629 3.79645 26.0351 6.82499C24.5521 8.84093 21.5431 10.3044 17.9723 10.7368C12.6068 11.3866 8.79564 14.3046 8.94783 17.6208C9.04902 19.8298 7.38303 21.9433 4.47443 23.2753C0.0998011 25.2789 -1.25695 28.9067 1.25174 31.8623C2.92097 33.8289 2.92097 36.1711 1.25174 38.1377C-1.25695 41.0932 0.0998011 44.7211 4.47443 46.7247C7.38303 48.0567 9.04902 50.1702 8.94783 52.3792C8.79564 55.6954 12.6068 58.6134 17.9723 59.2632C21.5431 59.6956 24.5521 61.1591 26.0351 63.175C28.2629 66.2036 33.7838 67.8273 39.0789 66.9966C42.6019 66.4439 46.3483 66.9637 49.125 68.3899C51.2144 69.4633 53.791 70 56.3685 70H195.631C198.209 70 200.786 69.4633 202.875 68.3899C205.652 66.9637 209.398 66.4439 212.921 66.9966C218.216 67.8273 223.737 66.2036 225.965 63.175C227.448 61.1591 230.457 59.6956 234.028 59.2632C239.393 58.6134 243.204 55.6954 243.052 52.3792C242.951 50.1702 244.617 48.0567 247.526 46.7247C251.9 44.7211 253.257 41.0933 250.748 38.1377C249.079 36.1711 249.079 33.8289 250.748 31.8623C253.257 28.9067 251.9 25.2789 247.526 23.2753C244.617 21.9433 242.951 19.8298 243.052 17.6208C243.204 14.3046 239.393 11.3866 234.028 10.7368C230.457 10.3044 227.448 8.84093 225.965 6.82499C223.737 3.79645 218.216 2.17265 212.921 3.0034C209.398 3.55608 205.652 3.03625 202.875 1.61012C200.786 0.536705 198.209 0 195.631 0H56.3685Z" fill="url(#pattern0)" style="" />
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_524_173" transform="matrix(0.00227273 0 0 0.00818182 0 -1.3)" />
                  </pattern>

                  <image id="image0_524_173" href="img/thumb1.jpg" />
                </defs>
              </svg>
            </div>
            <span>DEVELOPER</span>
          </div>

          <div class="flex gap-2 overflow-hidden text-justify font-bold leading-[0.9]">
            <span>&FULL</span>
            <div class="grow py-1">
              <div class="relative h-full overflow-hidden rounded-full shadow-[inset_0_0_24px_0_rgba(0,0,0,0.05)]">
                <nuxt-img src="img/thumb3.jpg" class="absolute -z-10 w-full" />
              </div>
            </div>
            <span>STACK</span>
          </div>

          <div class="flex gap-2 overflow-hidden text-justify font-bold leading-[0.9]">
            <div class="grow py-1">
              <div class="relative h-full overflow-hidden rounded-full shadow-[inset_0_0_24px_0_rgba(0,0,0,0.05)]">
                <nuxt-img src="img/thumb1.jpg" class="absolute -z-10 w-full" />
              </div>
            </div>
            <span>ENGINEER</span>
          </div>

          <div class="flex justify-between gap-2 overflow-hidden text-justify font-bold leading-[0.9]">
            <span>BASED</span>
            <div class="grow py-1">
              <div class="relative h-full overflow-hidden rounded-full shadow-[inset_0_0_24px_0_rgba(0,0,0,0.05)]">
                <nuxt-img src="img/thumb2.jpg" class="absolute -z-10 w-full" />
              </div>
            </div>
            <span>IN</span>
          </div>

          <div class="flex gap-2 overflow-hidden text-justify font-bold leading-[0.9]">
            <span>TOKYO</span>
            <div class="grow py-1">
              <div class="relative h-full overflow-hidden rounded-full shadow-[inset_0_0_24px_0_rgba(0,0,0,0.05)]">
                <nuxt-img src="img/thumb3.jpg" class="absolute -z-10 w-full" />
              </div>
            </div>
          </div>
        </h1>

        <p class="w-full text-2xl text-neutral-400">
          <span class="">with a passion for creating intuitive and visually appealing user interfaces</span>
        </p> -->
      </div>

      <div class="container flex w-full justify-between gap-10 ">
        <Clock />

        <div class="relative grow">
          <div class="absolute bottom-0 right-0 w-[30rem]">
            <div class="relative">
              <NuxtImg
                src="img/thumb1.jpg"
                alt="project 1"
                class="absolute bottom-0 left-0 -translate-y-10 scale-90 rounded-xl opacity-30"
              />
              <NuxtImg
                src="img/thumb1.jpg"
                alt="project 1"
                class="absolute bottom-0 left-0 -translate-y-5 scale-95 rounded-xl opacity-50"
              />
              <NuxtImg
                src="img/thumb1.jpg"
                alt="project 1"
                class="absolute bottom-0 left-0 rounded-xl"
              />
            </div>
          </div>
        </div>

        <div class="text-shine">
          (SCROLL)
        </div>
      </div>
    </div>

    <section class="container grid grid-cols-2 gap-8">
      <article class="text-lg">
        <NuxtImg src="img/thumb1.jpg" alt="project 2" class="w-full rounded-xl" />
        <h2 class="pt-4 font-bold uppercase">
          The wall
        </h2>
        <p class="">
          A descriptive text
        </p>
      </article>
    </section>

    <div class="h-[500vh]" />
    <Marquee class="text-7xl uppercase">
      This is a test
    </Marquee>
  </main>
</template>

<script setup lang="ts">
const { isPageDisplayed } = usePage();
</script>
