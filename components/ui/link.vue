<template>
  <div
    class="app-link app-link--primary u-inline-block u-relative"
  >
    <slot />
    <SvgUnderline class="app-link__decoration u-absolute u-12/12" />
    <!-- <div class="u-absolute u-12/12" /> -->
  </div>
</template>


<script>
import SvgUnderline from '~/assets/svg/underline.svg?inline';

export default {
  components: {
    SvgUnderline,
  },
};
</script>


<style lang="scss">
$app-link-color-names: (
  background: (
    initial: $color-background,
    active: $color-accent-secondary,
  ),
  primary: (
    initial: $color-accent-primary,
    active: $color-accent-secondary,
  ),
);

.app-link__decoration {
  bottom: 0;
  height: 6px;
}
.app-link {
  transition-duration: 0.3s;
}

@each $name, $color in $app-link-color-names {
  .app-link--#{$name} {
    color: map-get($color, 'initial');
  }

  .app-link--#{$name}:hover {
    color: map-get($color, 'active');
  }
}
</style>
