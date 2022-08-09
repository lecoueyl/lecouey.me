<template>
  <div>
    <header class="fixed inset-x-0 top-0 z-40 items-center p-8 text-lg">
      <nav class="flex gap-10">
        <div class="flex basis-full space-x-10">
          <div>
            Play
          </div>
        </div>

        <div class="flex basis-full justify-center">
          <NuxtLink
            to="/"
            class="inline-block"
          >
            <Logo class="w-24" />
          </NuxtLink>
        </div>

        <div class="flex basis-full justify-end space-x-10">
          <NuxtLink to="about">
            About
          </NuxtLink>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import Logo from '~/assets/svg/logo.svg';
</script>
