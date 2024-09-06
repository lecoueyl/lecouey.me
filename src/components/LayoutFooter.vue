<template>
  <footer class="pt-48">
    <div class="bg-neutral-950">
      <div class="overflow-hidden rounded-t-[5rem]">
        <Marquee class="bg-neutral-100 text-9xl font-bold uppercase">
          FOOTER
        </Marquee>

        <div class="container grid grid-cols-3 gap-24 bg-neutral-100 pb-10 pt-24">
          <div class="col-span-3 text-6xl">
            Let's work together
          </div>

          <ul class="col-span-2 col-start-2 flex flex-col gap-4 text-xl">
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Dribbble</li>
          </ul>

          <div class="col-span-3 flex justify-between gap-8 pt-10">
            <Clock />
            Back to top
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
