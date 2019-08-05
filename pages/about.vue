<template>
  <main class="u-pt-x10 u-overflow-hidden">
    <section
      class="o-container u-pv-x10 u-mv-x10 o-type-l u-color-primary u-relative"
    >
      <p
        v-for="(text, index) in $t('about.hero')"
        :key="index"
        class="u-overflow-hidden u-push-2/12"
      >
        <span class="app-about__hero-text u-inline-block">
          {{ text }}
        </span>
      </p>
    </section>

    <section class="o-container u-relative u-mv-x10">
      <AboutArticle>
        <template v-slot:title>
          {{ $t('about.title') }}
        </template>

        <p
          v-for="paragraph in ['intro', 'history', 'work', 'current']"
          :key="paragraph"
          v-t="`about.me.${paragraph}`"
          class="o-type-m u-pb-x2"
        />

        <i18n
          path="about.me.linkedin"
          tag="p"
          class="o-type-m"
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
      </AboutArticle>

      <AboutArticle class="u-pt-x10">
        <template v-slot:title>
          {{ $t('about.system') }}
        </template>

        <ul class="o-type-m o-list">
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
      </AboutArticle>

      <AboutArticle class="u-pt-x10">
        <template v-slot:title>
          {{ $t('about.design') }}
        </template>

        <ul class="o-type-m o-list">
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
      </AboutArticle>
    </section>
  </main>
</template>

<script>
import anime from 'animejs';
import { easeEnter } from '~/components/transitions';
import AboutArticle from '~/components/about-article';

const animeHero = {
  targets: '.app-about__hero-text',
  duration: 1000,
  stagger: 150,
};

export default {
  components: {
    AboutArticle,
  },

  data() {
    return {
      currentView: 'about',
      viewingAside: false,
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
