<template>
  <div>
    <LayoutHeader />

    <TransitionPage>
      <div :key="$route.fullPath">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </TransitionPage>

    <LayoutFooter />
  </div>
</template>
