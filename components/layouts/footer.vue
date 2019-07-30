<template>
  <footer class="u-bgcolor-foreground u-bgimage u-bgimage-dark">
    <div class="o-container u-mt-x10 u-pv-x10">
      <p
        v-t="'footer.contact'"
        class="o-type-xl u-color-wash-light"
      />

      <div class="o-media o-media--bottom u-pv-x4">
        <div class="o-media__fluid">
          <ul class="o-list o-list--block">
            <li class="o-list__item">
              <a
                :href="`mailto:${mail}`"
                class="c-link c-link--background"
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
                class="c-link c-link--background"
              />
            </li>
          </ul>
        </div>

        <div class="o-media__fluid u-text-right u-color-wash-light">
          <i18n path="footer.source">
            <a
              v-t="'links.social.github'"
              :href="links.github"
              target="_blank"
              rel="noopener noreferrer"
              class="c-link c-link-underline c-link--background"
            />
          </i18n>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  data() {
    return {
      mail: process.env.mail,
      links: process.env.links,
    };
  },
};
</script>


<style lang="scss">
.app-header {
  z-index: map-get($iota-global-zindex, header);
}

.app-footer__spacer svg {
  height: 1em;
}

.app-footer__spacer svg path {
  stroke: $color-foreground;
}
</style>
