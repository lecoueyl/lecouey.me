<template>
  <footer class="o-container u-pv-x2@xs u-pv-x4@sm u-pv-x6@md">
    <p
      v-t="'footer.contact'"
      class="o-type-l u-color-foreground u-bgcolor-secondary u-p-x2 u-radius-s"
    />
    <SvgDialogueBubbleTail class="u-color-secondary u-ml-x4" />

    <ul class="o-list o-list--block o-type-m u-pv-x4">
      <li class="o-list__item">
        <a
          :href="`mailto:${mail}`"
          class="c-link c-link-underline c-link--foreground"
        >
          {{ mail }}
        </a>
      </li>

      <li
        v-for="(link, key) in links"
        :key="key"
        class="o-list__item"
      >
        <a
          v-t="`links.social.${key}`"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          class="c-link c-link-underline c-link--foreground"
        />
      </li>
    </ul>

    <i18n
      class="o-type-s"
      path="footer.source"
    >
      <a
        v-t="'links.social.github'"
        :href="links.github"
        target="_blank"
        rel="noopener noreferrer"
        class="c-link c-link-underline c-link--foreground"
      />
    </i18n>
  </footer>
</template>

<script>
import SvgDialogueBubbleTail from '~/assets/svg/dialogue-bubble-tail.svg?inline';

export default {
  components: {
    SvgDialogueBubbleTail,
  },

  data() {
    return {
      mail: process.env.APP_MAIL,
      links: {
        github: process.env.LINKS_GITHUB,
        dribbble: process.env.LINKS_DRIBBBLE,
        linkedin: process.env.LINKS_LINKEDIN,
      },
    };
  },
};
</script>
