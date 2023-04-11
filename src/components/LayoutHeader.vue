<template>
  <header class="fixed inset-x-0 top-0 z-40 items-center p-8 text-lg tracking-tight">
    <nav class="flex justify-between gap-10 font-medium">
      <NuxtLink
        to="/"
        class="inline-block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="none" viewBox="0 0 120 120">
          <path id="MyPath" d="M17 93V42c0-13.807 11.193-25 25-25h58" />

          <text>
            <textPath textLength="150" href="#MyPath" fill="currentColor" class="text-lg font-medium">Leonard&nbsp;Lecouey</textPath>
          </text>
        </svg>
      </NuxtLink>
      <!-- <NuxtLink
        to="/"
        class="inline-block"
      >
        Lecouey Leonard
      </NuxtLink> -->

      <NuxtLink to="about">
        About
      </NuxtLink>
    </nav>
  </header>
</template>
<!--
<script setup>
import Logo from '~/assets/svg/logo.svg';
</script> -->
