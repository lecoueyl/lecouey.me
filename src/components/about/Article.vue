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

      <article class="sm:col-span-2 text-xl sm:text-3xl leading-relaxed sm:leading-relaxed">
        <slot />
      </article>
    </div>
  </LayoutContainer>
</template>
