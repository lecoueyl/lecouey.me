<template>
  <div class="u-pt-x10">
    <section class="o-type-l o-container p-about__hero u-color-primary u-mv-x10 u-text-center u-whitespace-pre">
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

    <section class="o-container u-color-wash-light u-mv-x10">
      <SvgDevices />
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
            class="c-link c-link-underline c-link--primary"
          />
        </i18n>
      </AboutArticle>
    </section>

    <Slides class="u-mv-x10" />

    <section class="o-container u-relative u-mv-x10">
      <AboutArticle>
        <template v-slot:title>
          CV
        </template>

        <ul class="o-list o-list--block u-color-foreground">
          <li
            v-for="period in resume"
            :key="period.workplace"
            class="o-list__item"
          >
            <div class="o-media">
              <div class="o-media__fixed o-type-m u-inline-block u-5/12">
                {{ $d(new Date(period.from), 'year') }}
                <template v-if="period.to">
                  ー {{ $d(new Date(period.to), 'year') }}
                </template>
              </div>

              <div class="o-media__fluid">
                <span class="o-type-m">{{ period.workplace }}</span>
                <p class="o-type-s">
                  {{ period.job }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </AboutArticle>
    </section>
  </div>
</template>

<script>
import gsap from 'gsap';
import { ease } from '~/components/transitions';
import AboutArticle from '~/components/AboutArticle';
import Slides from '~/components/Slides';
import transitionPage from '~/mixins/transitionPage';
import SvgDevices from '~/assets/svg/devices.svg?inline';

const animeHero = {
  duration: 1,
  stagger: 0.1,
};

export default {
  components: {
    AboutArticle,
    Slides,
    SvgDevices,
  },

  mixins: [transitionPage],

  data() {
    return {
      mail: process.env.APP_mail,
      resume: [
        {
          from: '2014',
          to: new Date(),
          workplace: 'Emotion Intelligence',
          job: 'Tech leader',
        },
        {
          from: '2012',
          to: '2014',
          workplace: 'Syllage',
          job: 'Tech leader',
        },
        {
          from: '2010',
          to: '2012',
          workplace: 'French Embassy in Japan',
          job: 'Tech leader',
        },
        {
          from: '2007',
          to: '2010',
          workplace: 'Telindus',
          job: 'Tech leader',
        },
        {
          from: '2007',
          workplace: 'AF83',
          job: 'Tech leader',
        },
      ],
      links: {
        linkedIn: process.env.LINKS_LINKEDIN,
      },
    };
  },

  mounted() {
    this.animeHero();
    this.animeIllustration();
  },

  methods: {
    animeHero() {
      gsap.fromTo('.p-about__hero p', {
        rotate: 10,
        transformOrigin: 'left bottom',
      },
      {
        duration: animeHero.duration,
        ease: ease.enter,
        stagger: animeHero.stagger,
        rotate: 0,
      }).then(() => this.$store.commit('updatePageTransitioning', false));

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
        '.i-devices_iphone',
        '.i-devices_mixer',
        '.i-devices_ipad',
        '.i-devices_pencil',
        '.i-devices_book',
        '.i-devices_macbook',
        '.i-devices_keyboard',
        '.i-devices_headphone',
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
