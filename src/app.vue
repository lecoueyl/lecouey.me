<template>
  <div>
    <LayoutHeader />

      <main
        :key="$route.fullPath"
        class="pt-24"
      >
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </main>

    <LayoutHeader />
  </div>
</template>
