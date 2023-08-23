<template>
  <main>
    <div class="container relative flex h-[calc(100vh-theme(space.20))] flex-col items-center">
      <div class="flex grow flex-col items-center justify-center sm:max-w-[75%] lg:max-w-[80%]">
        <h1 ref="heroMain" class="w-full text-justify text-[13vw] sm:text-[8vw] lg:text-[7vw] 2xl:text-[6vw]">
          <div class="flex gap-2 overflow-hidden font-bold leading-[0.9]">
            <span>CREATIVE</span>

            <div class="grow py-1">
              <div class="relative h-full overflow-hidden shadow-[inset_0_0_24px_0_rgba(0,0,0,0.05)]">
                <nuxt-img src="img/thumb2.jpg" class="absolute -z-10 w-full" />
              </div>
            </div>

            <!-- <div class="grow py-1">
              <div class="relative h-full">

              </div>
            </div> -->
            <!-- <div class="grow py-1">
              <div class="relative h-full" style="clip-path: url(#svgPath)">
                <svg class="h-0 w-0" height="70" viewBox="0 0 156 70">
                  <defs>
                    <clipPath id="svgPath">
                      <path d="M34.8948 0C33.2992 0 31.7041 0.536705 30.4107 1.61012C28.6918 3.03625 26.3726 3.55608 24.1917 3.0034C20.9138 2.17265 17.4961 3.79645 16.117 6.82499C15.1989 8.84093 13.3362 10.3044 11.1257 10.7368C7.80424 11.3866 5.44492 14.3046 5.53913 17.6208C5.60177 19.8298 4.57045 21.9433 2.76989 23.2753C0.0617816 25.2789 -0.778112 28.9067 0.774889 31.8623C1.80822 33.8289 1.80822 36.1711 0.774889 38.1377C-0.778112 41.0932 0.0617816 44.7211 2.76989 46.7247C4.57045 48.0567 5.60177 50.1702 5.53913 52.3792C5.44492 55.6954 7.80424 58.6134 11.1257 59.2632C13.3362 59.6956 15.1989 61.1591 16.117 63.175C17.4961 66.2036 20.9138 67.8273 24.1917 66.9966C26.3726 66.4439 28.6918 66.9637 30.4107 68.3899C31.7041 69.4633 33.2992 70 34.8948 70H121.105C122.701 70 124.296 69.4633 125.589 68.3899C127.308 66.9637 129.627 66.4439 131.808 66.9966C135.086 67.8273 138.504 66.2036 139.883 63.175C140.801 61.1591 142.664 59.6956 144.874 59.2632C148.196 58.6134 150.555 55.6954 150.461 52.3792C150.398 50.1702 151.43 48.0567 153.23 46.7247C155.938 44.7211 156.778 41.0933 155.225 38.1377C154.192 36.1711 154.192 33.8289 155.225 31.8623C156.778 28.9067 155.938 25.2789 153.23 23.2753C151.43 21.9433 150.398 19.8298 150.461 17.6208C150.555 14.3046 148.196 11.3866 144.874 10.7368C142.664 10.3044 140.801 8.84093 139.883 6.82499C138.504 3.79645 135.086 2.17265 131.808 3.0034C129.627 3.55608 127.308 3.03625 125.589 1.61012C124.296 0.536705 122.701 0 121.105 0H34.8948Z" />
                    </clipPath>
                  </defs>
                </svg>
                <nuxt-img src="img/thumb1.jpg" class="absolute -z-10 w-full" />
              </div>
            </div> -->
          </div>

          <div class="flex gap-2 overflow-hidden font-bold leading-[0.9]">
            <div class="relative flex grow flex-col items-stretch py-1">
              <!-- <nuxt-img src="img/thumb1.jpg" class="absolute -z-10 w-full" style="clip-path: url(#svgPath)" /> -->
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 70" class="flex-[1_1_0]" preserveAspectRatio="none">
                <path style="fill: url('img/thumb1.jpg')" d="M0 15.4379C0 6.9118 6.9118 0 15.4379 0H89.5621C98.0882 0 105 6.9118 105 15.4379V15.4379C105 19.9731 103.006 24.2788 99.547 27.2121L94.3182 31.6464C92.5606 33.1369 92.5606 36.8631 94.3182 38.3536L99.547 42.7879C103.006 45.7212 105 50.0269 105 54.5621V54.5621C105 63.0882 98.0882 70 89.5621 70H15.4379C6.9118 70 0 63.0882 0 54.5621V54.5621C0 50.0269 1.99412 45.7212 5.45295 42.7879L10.6818 38.3536C12.4394 36.8631 12.4394 33.1369 10.6818 31.6464L5.45295 27.2121C1.99412 24.2788 0 19.9731 0 15.4379V15.4379Z" fill="#D9D9D9" />
              </svg> -->

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
                  <!-- <nuxt-img id="image0_524_173" width="440" height="440" src="img/thumb1.jpg" /> -->
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
        </p>
      </div>

      <div class="flex w-full justify-between pb-6">
        <div>
          {{ currentTimeArray[0] }}<span class="animate-pulse">:</span>{{ currentTimeArray[1] }} JST
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
import gsap from 'gsap';

const heroMain = ref();

const { currentTimeArray } = useCurrentTime();
const { ease } = useGsap();

function getHeroChildren() {
  const elements: Array<Element> = [];

  Array.from(heroMain.value.children).forEach((child: Element | any) => {
    elements.push(child.children);
  });

  return elements;
}

onMounted(async () => {
  useScroll().disable();

  await gsap.fromTo(
    getHeroChildren(),
    {
      opacity: 0,
      y: '100%',
    },
    {
      opacity: 1,
      duration: 1.5,
      y: '0%',
      stagger: 0.05,
      ease: ease.inOut,
    },
  );

  useScroll().enable();
});
</script>
