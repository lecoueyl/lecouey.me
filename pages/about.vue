<template>
  <main class="u-pt-x10 u-overflow-hidden">
    <section
      class="o-container u-pv-x10 u-mv-x10 o-type-xl u-relative"
    >
      <!-- <UiLink>
        test
      </UiLink> -->
      <p
        v-for="(text, index) in $t('about.hero')"
        :key="index"
        class="u-overflow-hidden"
      >
        <span class="app-about__hero-text u-inline-block">
          {{ text }}
        </span>
      </p>

      <AnimFloat class="app-about__hero-illustration u-5/12 u-absolute">
        <SvgHero />
      </AnimFloat>
    </section>

    <section class="o-container u-relative u-mv-x10 u-relative">
      <div class="c-divider u-pv-x10" />
      <AnimFloat class="app-about__about-illustration u-absolute">
        <SvgAbout class="u-12/12 u-mt-x4 u-hidden@xs" />
      </AnimFloat>

      <h1
        v-t="'about.title'"
        class="o-type-l u-weight-normal u-color-wash-dark"
      />

      <p
        v-for="paragraph in ['intro', 'history', 'work', 'current']"
        :key="paragraph"
        v-t="`about.me.${paragraph}`"
        class="o-type-l u-pb-x2"
      />

      <i18n
        path="about.me.linkedin"
        tag="p"
        class="o-type-l"
      >
        <a
          v-t="'links.social.linkedin'"
          :href="links.linkedin"
          place="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="visit"
          class="c-link c-link-underline c-link--primary"
        />
      </i18n>
    </section>

    <section class="o-container u-relative u-mv-x10 u-pv-x10">
      <div class="o-grid">
        <article class="o-grid__col u-6/12@sm">
          <div class="o-grid">
            <h1
              class="o-type-l o-grid__col u-5/12@sm u-weight-normal u-color-wash-dark"
            >
              System
            </h1>

            <ul class="o-type-m o-list o-grid__col u-7/12@sm">
              <li
                v-for="item in [
                  'Infrastructure Architecture',
                  'System administration',
                  'Backend Development',
                ]"
                :key="item"
                class="o-list__item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </article>

        <article class="o-grid__col u-6/12@sm">
          <div class="o-grid">
            <h1
              class="o-type-l o-grid__col u-5/12@sm u-weight-normal u-color-wash-dark"
            >
              Design
            </h1>

            <ul class="o-type-m o-list o-grid__col u-7/12@sm">
              <li
                v-for="item in [
                  'Graphic Design',
                  'User Interface Design',
                  'Heavy Moodboarding',
                  'Wireframing',
                  'Prototyping',
                  'Design Systems',
                ]"
                :key="item"
                class="o-list__item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </article>
      </div>

      <!-- <ul class="o-list o-grid__col u-6/12@sm u-pt@xs">
        <li
          v-for="item in [
            'Graphic Design',
            'User Interface Design',
            'Heavy Moodboarding',
            'Wireframing',
            'Prototyping',
            'Design Systems',
            'Frontend Development',
          ]"
          :key="item"
          class="o-list__item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </main>
</article> -->
    </section>
  </main>
</template>


<script>
import anime from 'animejs';
import { easeEnter } from '~/components/transitions';
// import UiLink from '~/components/ui/link';
import AnimFloat from '~/components/animations/float';
import SvgHero from '~/assets/svg/shape-blob.svg?inline';
import SvgAbout from '~/assets/svg/shape-half.svg?inline';

const animeHero = {
  targets: '.app-about__hero-text',
  duration: 1000,
  stagger: 150,
};

export default {
  components: {
    // UiLink,
    AnimFloat,
    SvgHero,
    SvgAbout,
  },

  data() {
    return {
      mail: process.env.mail,
      links: process.env.links,
    };
  },

  mounted() {
    anime({
      targets: animeHero.targets,
      translateY: ['120%', 0],
      easing: easeEnter,
      duration: animeHero.duration,
      delay: anime.stagger(animeHero.stagger),
    });
  },
};
</script>


<style lang="scss">
.app-about__hero-illustration {
  top: 5%;
  right: -25%;
}

.app-about__hero-illustration path {
  fill: $color-accent-secondary;
}

.app-about__about-illustration {
  margin-left: -30%;
}

.app-about__about-illustration path {
  fill: $color-accent-primary;
}
</style>
