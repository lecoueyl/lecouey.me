<template>
  <main class="u-pt-x10">
    <Slides />

    <section class="o-type-l p-about__hero o-container u-pv-x10 u-mv-x10 u-color-primary u-relative u-text-center u-whitespace-pre">
      <p
        v-for="(sentence, index) in $t('about.hero')"
        :key="index"
        class="u-overflow-hidden"
      >
        <span
          v-for="word in sentence"
          :key="word"
          class="u-inline-block"
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
          class="o-type-m u-pb-x2 u-color-foreground"
        >
          {{ $t(`about.me.${paragraph}`) }}
        </p>

        <i18n
          path="about.me.linkedin"
          tag="p"
          class="o-type-m u-color-foreground"
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
    </section>

    <section class="o-container u-relative u-mv-x10">
      <AboutArticle>
        <template v-slot:title>
          {{ $t('about.system') }}
        </template>

        <ul class="o-type-m o-list u-color-foreground">
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

        <ul class="o-type-m o-list u-color-foreground">
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
import gsap from 'gsap';
import { ease } from '~/components/transitions';
import AboutArticle from '~/components/AboutArticle';
import Slides from '~/components/Slides';
import transitionPage from '~/mixins/transitionPage';
import SvgCircleLeft from '~/assets/svg/circle-rainbow-left.svg?inline';
import SvgCircleRight from '~/assets/svg/circle-rainbow-right.svg?inline';

const animeHero = {
  duration: 1,
  stagger: 0.1,
};

const animeCircle = {
  duration: 2,
  stagger: 0.1,
};

export default {
  components: {
    AboutArticle,
    Slides,
    SvgCircleLeft,
    SvgCircleRight,
  },

  mixins: [transitionPage],

  data() {
    return {
      currentView: 'about',
      viewingAside: false,
      mail: process.env.APP_mail,
      links: {
        linkedIn: process.env.LINKS_LINKEDIN,
      },
    };
  },

  mounted() {
    this.animateHero();

    gsap.fromTo('.about-circle__left path', {
      xPercent: 100,
    },
    {
      duration: animeCircle.duration,
      ease: ease.enter,
      stagger: animeCircle.stagger,
      xPercent: 0,
    });

    gsap.fromTo('.about-circle__right path', {
      xPercent: -100,
    },
    {
      duration: animeCircle.duration,
      ease: ease.enter,
      stagger: animeCircle.stagger,
      xPercent: 0,
    });
  },

  methods: {
    animateHero() {
      gsap.fromTo('.p-about__hero p', {
        rotate: 10,
        transformOrigin: 'left bottom',
      },
      {
        duration: animeHero.duration,
        ease: ease.enter,
        stagger: animeHero.stagger,
        rotate: 0,
      });

      gsap.fromTo('.p-about__hero span', {
        yPercent: 120,
      },
      {
        duration: animeHero.duration,
        ease: ease.enter,
        stagger: animeHero.stagger,
        yPercent: 0,
      });
    },
  },

  head() {
    return {
      title: this.$t('about.title'),
    };
  },
};
</script>
