<template>
  <div
    class="o-grid"
  >
    <aside class="o-grid__col u-4/12@sm">
      <H1>
        <slot name="title" />
      </H1>
    </aside>

    <article class="o-grid__col u-8/12@sm">
      <slot />
    </article>
  </div>
</template>

<script>
import H1 from '~/components/H1';

export default {
  components: {
    H1,
  },
};
</script>
