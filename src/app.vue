<template>
  <div>
    <LayoutHeader />

    <NuxtLayout :key="$route.fullPath">
      <NuxtPage />
    </NuxtLayout>

    <LayoutFooter />
  </div>
</template>
