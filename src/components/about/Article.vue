<template>
  <div
    class="o-grid"
  >
    <aside class="o-grid__col u-4/12@sm">
      <H2
        class="o-type-l u-weight-normal u-color-secondary"
      >
        <slot name="title" />
      </H2>
    </aside>

    <article class="o-grid__col u-8/12@sm">
      <slot />
    </article>
  </div>
</template>

<script>
import H2 from '~/components/H2';

export default {
  components: {
    H2,
  },
};
</script>
