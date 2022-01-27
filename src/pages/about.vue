<template>
  <div class="pt-32 space-y-16 sm:space-y-24">
    <LayoutContainer class="g-about__hero text-center text-3xl whitespace-pre sm:text-7xl">
      <p
        v-for="(sentence, index) in $t('about.hero')"
        :key="index"
        class="overflow-hidden leading-tight"
      >
        <span
          v-for="word in sentence"
          :key="word"
          class="inline-block"
        >{{ word }}</span>
      </p>
    </LayoutContainer>

    <div class="sm:py-16">
      <SvgDevices class="w-full h-full" />
    </div>

    <AboutSection>
      <AboutArticle>
        <template #title>
          {{ $t('about.title') }}
        </template>

        <p>
          {{ $t('about.me.intro', { year: workedSpan }) }}
        </p>

        <p
          v-for="paragraph in ['current', 'history', 'moto']"
          :key="paragraph"
          class="py-2"
        >
          {{ $t(`about.me.${paragraph}`) }}
        </p>

        <i18n
          path="about.me.linkedin"
          tag="p"
        >
          <template #linkedin>
            <UiLink
              :href="$config.links.linkedin"
              external
            >
              {{ $t('links.social.linkedin') }}
            </UiLink>
          </template>
        </i18n>
      </AboutArticle>
    </AboutSection>

    <AboutSection>
      <AboutSkill />
    </AboutSection>

    <AboutSection>
      <AboutArticle>
        <template #title>
          {{ $t('about.cv.title') }}
        </template>

        <ul>
          <li
            v-for="period in resume"
            :key="period.workplace"
            class="pb-8 sm:grid sm:grid-cols-5 sm:gap-4 sm:pb-16"
          >
            <div class="sm:col-span-2 text-wash-muted">
              {{ $d(new Date(period.from), 'year') }}
              <template v-if="period.to && (period.from !== period.to)">
                ー {{ $d(new Date(period.to), 'year') }}
              </template>
            </div>

            <div class="sm:col-span-3">
              {{ period.workplace }}
              <sup class="text-sm">{{ period.location }}</sup>
              <div class="text-lg">
                {{ period.job }}
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
import { ease } from '~/components/transition';
import transitionPage from '~/mixins/transitionPage';
import SvgDevices from '~/assets/svg/devices.svg?inline';

const animeHero = {
  duration: 1,
  stagger: 0.1,
};

export default {
  components: {
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

  head() {
    return {
      title: this.$t('links.about'),
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
      gsap.fromTo(
        '.g-about__hero p',
        {
          rotate: 10,
          transformOrigin: 'left bottom',
        },
        {
          duration: animeHero.duration,
          ease: ease.enter,
          stagger: animeHero.stagger,
          rotate: 0,
        },
      ).then(() => this.$store.commit('setPageTransitioning', false));

      gsap.fromTo(
        '.g-about__hero span',
        {
          yPercent: 120,
        },
        {
          duration: animeHero.duration,
          ease: ease.enter,
          stagger: animeHero.stagger,
          yPercent: 0,
        },
      );
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
        gsap.fromTo(
          device,
          {
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
          },
        );
      });
    },
  },
};
</script>
