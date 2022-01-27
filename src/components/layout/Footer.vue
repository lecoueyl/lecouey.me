<template>
  <LayoutContainer
    tag="footer"
    class="py-10"
  >
    <div class="p-4 sm:p-10 text-5xl sm:text-6xl text-background bg-foreground rounded-lg">
      {{ $t('footer.contact') }}
    </div>

    <SvgDialogueBubbleTail class="ml-4 text-foreground" />

    <ul class="py-8 space-y-4 text-2xl">
      <li>
        <UiLink :href="`mailto:${$config.app.mail}`">
          {{ $config.app.mail }}
        </UiLink>
      </li>

      <li
        v-for="(link, key) in $config.links"
        :key="key"
      >
        <UiLink
          :href="link"
          external
        >
          {{ $t(`links.social.${key}`) }}
        </UiLink>
      </li>
    </ul>

    <div class="flex text-lg">
      <i18n
        class="flex-grow pr-2"
        path="footer.source"
      >
        <template #link>
          <UiLink
            :href="$config.app.source"
            external
          >
            {{ $t('links.social.github') }}
          </UiLink>
        </template>
      </i18n>

      <button
        class="overflow-hidden"
        @click="switchTheme()"
      >
        <TransitionTranslateY
          mode="out-in"
        >
          <div :key="$colorMode.value">
            {{ $t(`theme.${$colorMode.value}`) }}
          </div>
        </TransitionTranslateY>
      </button>
    </div>
  </LayoutContainer>
</template>

<script>
import SvgDialogueBubbleTail from '~/assets/svg/dialogue-bubble-tail.svg?inline';

export default {
  components: {
    SvgDialogueBubbleTail,
  },

  methods: {
    switchTheme() {
      this.$colorMode.preference = this.$colorMode.value === 'light' ? 'dark' : 'light';
    },
  },
};
</script>
