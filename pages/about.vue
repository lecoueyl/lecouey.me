<template>
  <main class="u-pt-x10 u-overflow-hidden">
    <section
      class="o-container u-pv-x10 u-mv-x10 o-type-l u-color-primary u-relative u-text-center"
      style="white-space: pre;"
    >
      <p
        v-for="(sentence, index) in $t('about.hero')"
        :key="index"
        class="u-overflow-hidden"
      >
        <span
          v-for="word in sentence"
          :key="word"
          class="app-about__hero-text u-inline-block"
        >{{ word }}</span>
      </p>

      <div class="u-6/12@sm u-push-3/12@sm">
        <div class="o-media">
          <div class="o-media__fixed u-6/12">
            <SvgCircleLeft class="about-circle__left path" />
          </div>

          <div class="o-media__fixed u-6/12">
            <SvgCircleRight class="about-circle__right" />
          </div>
        </div>
      </div>
    </section>

    <section class="o-container u-relative u-mv-x10">
      <AboutArticle>
        <template v-slot:title>
          {{ $t('about.title') }}
        </template>

        <p
          v-for="paragraph in ['intro', 'history', 'work', 'current']"
          :key="paragraph"
          class="o-type-m u-pb-x2 u-color-background"
        >
          {{ $t(`about.me.${paragraph}`) }}
        </p>

        <i18n
          path="about.me.linkedin"
          tag="p"
          class="o-type-m u-color-background"
        >
          <a
            slot="linkedin"
            v-t="'links.social.linkedin'"
            :href="links.linkedin"
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

        <ul class="o-type-m o-list u-color-background">
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

        <ul class="o-type-m o-list u-color-background">
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
import SvgCircleLeft from '~/assets/svg/circle-rainbow-left.svg?inline';
import SvgCircleRight from '~/assets/svg/circle-rainbow-right.svg?inline';

const animeHero = {
  targets: '.app-about__hero-text',
  duration: 1000,
  stagger: 150,
};

const animeCircle = {
  duration: 3000,
  stagger: 150,
};

export default {
  head() {
    return {
      title: this.$t('about.title'),
      bodyAttrs: {
        class: 'u-bgcolor-foreground',
      },
    };
  },

  components: {
    AboutArticle,
    SvgCircleLeft,
    SvgCircleRight,
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
    this.$store.commit('updateTheme', 'dark');

    anime({
      targets: animeHero.targets,
      translateY: ['120%', 0],
      easing: easeEnter,
      duration: animeHero.duration,
      delay: anime.stagger(animeHero.stagger),
    });

    anime({
      targets: '.about-circle__left path',
      translateX: ['100%', 0],
      easing: easeEnter,
      duration: animeCircle.duration,
      delay: anime.stagger(animeCircle.stagger),
    });

    anime({
      targets: '.about-circle__right path',
      translateX: ['-100%', 0],
      easing: easeEnter,
      duration: animeCircle.duration,
      delay: anime.stagger(animeCircle.stagger),
    });
  },
};
</script>
