<template>
  <LayoutContainer>
    <div class="sm:grid sm:grid-cols-3">
      <aside class="sm:col-span-1">
        <UiTitle
          :level="2"
          class="sticky top-20 pb-8 sm:pb-0"
        >
          <slot name="title" />
        </UiTitle>
      </aside>

      <article class="text-xl leading-relaxed sm:col-span-2 sm:text-3xl sm:leading-relaxed">
        <slot />
      </article>
    </div>
  </LayoutContainer>
</template>
