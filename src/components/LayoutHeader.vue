<template>
  <header class="container sticky top-0 z-40 w-full items-center pt-10 ">
    <nav class="flex h-6 items-center justify-between gap-4 text-lg">
      <NuxtLink to="/" class="rounded-sm bg-neutral-950 px-2 font-bold uppercase text-neutral-50">
        Leonard Lecouey
      </NuxtLink>

      <div class="flex items-center justify-between gap-4">
        <NuxtLink to="about">
          JP
        </NuxtLink>

        <div class="h-[0.15rem] w-10 bg-neutral-950" />

        <NuxtLink to="about">
          About
        </NuxtLink>
      </div>

      <a
        href=""
        class="hidden h-6 text-lg sm:inline-block"
      >
        hi@lecouey.me
      </a>
    </nav>
  </header>
</template>
