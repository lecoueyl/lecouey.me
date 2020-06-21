<template>
  <div class="u-pt-x10">
    <section class="o-type-l o-container p-about__hero u-color-primary u-mv-x4@xs u-mv-x10@sm u-text-center u-whitespace-pre">
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
    </section>

    <section class="o-container u-color-wash-light u-mv-x4@xs u-mv-x10@sm">
      <SvgDevices />
    </section>

    <AboutSection class="o-container">
      <AboutArticle>
        <template v-slot:title>
          {{ $t('about.title') }}
        </template>

        <i18n
          path="about.me.intro"
          tag="p"
          class="o-type-m u-color-foreground"
        >
          <span slot="year">{{ workedSpan }}</span>
        </i18n>

        <p
          v-for="paragraph in ['current', 'history', 'moto']"
          :key="paragraph"
          class="o-type-m u-color-foreground u-pv"
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
            :href="$config.links.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="c-link c-link-underline c-link--primary"
          />
        </i18n>
      </AboutArticle>
    </AboutSection>

    <AboutSection>
      <AboutSkill />
    </AboutSection>

    <AboutSection class="o-container">
      <AboutArticle>
        <template v-slot:title>
          {{ $t('about.cv.title') }}
        </template>

        <ul class="o-list o-list--block u-color-foreground">
          <li
            v-for="period in resume"
            :key="period.workplace"
            class="o-list__item"
          >
            <div class="o-grid">
              <div class="o-grid__col o-type-m u-5/12@sm">
                {{ $d(new Date(period.from), 'year') }}
                <template v-if="period.to && (period.from !== period.to)">
                  ー {{ $d(new Date(period.to), 'year') }}
                </template>
              </div>

              <div class="o-grid__col u-7/12@sm u-pl-x4@xs">
                <span class="o-type-m">{{ period.workplace }}</span>
                <sup class="o-type-xs">{{ period.location }}</sup>
                <p class="o-type-s">
                  {{ period.job }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </AboutArticle>
    </AboutSection>
  </div>
</template>

<script>
import gsap from 'gsap';
import { ease } from '~/components/transitions';
import AboutArticle from '~/components/about/Article';
import AboutSection from '~/components/about/Section';
import AboutSkill from '~/components/about/Skill';
import transitionPage from '~/mixins/transitionPage';
import SvgDevices from '~/assets/svg/devices.svg?inline';

const animeHero = {
  duration: 1,
  stagger: 0.1,
};

export default {
  components: {
    AboutArticle,
    AboutSection,
    AboutSkill,
    SvgDevices,
  },

  mixins: [transitionPage],

  data() {
    return {
      workedSpan: new Date().getFullYear() - 2007,
      resume: [
        {
          from: '2020',
          to: new Date().getFullYear().toString(),
          workplace: this.$t('about.cv.workplace.appier'),
          location: 'JP',
          job: this.$t('about.cv.job.fullstack'),
        },
        {
          from: '2014',
          to: '2020',
          workplace: this.$t('about.cv.workplace.emin'),
          location: 'JP',
          job: this.$t('about.cv.job.techleader'),
        },
        {
          from: '2012',
          to: '2014',
          workplace: this.$t('about.cv.workplace.syllage'),
          location: 'FR',
          job: this.$t('about.cv.job.fullstack'),
        },
        {
          from: '2010',
          to: '2012',
          workplace: this.$t('about.cv.workplace.frenchEmbassy'),
          location: 'JP',
          job: this.$t('about.cv.job.sysadmin'),
        },
        {
          from: '2007',
          to: '2010',
          workplace: this.$t('about.cv.workplace.telindus'),
          location: 'FR',
          job: this.$t('about.cv.job.sysadmin'),
        },
        {
          from: '2007',
          workplace: this.$t('about.cv.workplace.af83'),
          location: 'FR',
          job: this.$t('about.cv.job.fullstack'),
        },
      ],
    };
  },

  beforeDestroy() {
    gsap.killTweensOf('.i-devices__item');
  },

  mounted() {
    this.animeHeroText();
    this.animeIllustration();
  },

  methods: {
    animeHeroText() {
      gsap.fromTo('.p-about__hero p', {
        rotate: 10,
        transformOrigin: 'left bottom',
      },
      {
        duration: animeHero.duration,
        ease: ease.enter,
        stagger: animeHero.stagger,
        rotate: 0,
      }).then(() => this.$store.commit('setPageTransitioning', false));

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

    animeIllustration() {
      [
        '.i-devices__iphone',
        '.i-devices__mixer',
        '.i-devices__ipad',
        '.i-devices__pencil',
        '.i-devices__book',
        '.i-devices__macbook',
        '.i-devices__keyboard',
        '.i-devices__headphone',
      ].forEach((device) => {
        gsap.fromTo(device, {
          transformOrigin: 'center center',
          rotation: gsap.utils.random(-6, 6),
          xPercent: gsap.utils.random(-5, 5),
          yPercent: gsap.utils.random(-5, 5),
        },
        {
          duration: gsap.utils.random(10, 15),
          ease: 'expo.inOut',
          yoyo: true,
          repeat: -1,
          rotation: gsap.utils.random(-6, 6),
          xPercent: gsap.utils.random(-5, 5),
          yPercent: gsap.utils.random(-5, 5),
        });
      });
    },
  },

  head() {
    return {
      title: this.$t('links.about'),
    };
  },
};
</script>
