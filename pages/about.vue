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

    <section class="o-container u-relative u-mv-x10 u-relative">
      <div
        v-view="asideViewHandler"
        class="o-grid"
      >
        <aside class="o-grid__col u-4/12@sm u-relative">
          <!-- <h1
            v-t="'about.title'"
            class="o-type-l u-weight-normal u-color-secondary"
          /> -->

          <ul
            class="o-type-l o-list o-grid__col u-7/12@sm"
            style="top: 0"
            :class="{ 'u-fixed': viewingAside }"
          >
            <li
              v-for="item in [
                'About',
                'System',
                'Design',
              ]"
              :key="item"
              class="o-list__item"
            >
              {{ item }}
            </li>
          </ul>
        </aside>

        <div class="o-grid__col u-8/12@sm">
          <article v-view="setCurrentArticle('test')">
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
          </article>

          <article v-view>
            <ul class="o-type-m o-list o-grid__col u-pt-x10">
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
          </article>
        </div>
      </div>
    </section>
    <!--
    <section class="o-container u-relative u-mv-x10 u-relative">
      <div class="o-grid">
        <aside class="o-grid__col u-4/12@sm">
          <h1
            v-t="'about.system'"
            class="o-type-l u-weight-normal u-color-secondary"
          />
        </aside>

        <article class="o-grid__col u-8/12@sm">
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
        </article>
      </div>
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
    </section> -->
  </main>
</template>

<script>
import anime from 'animejs';
import { easeEnter } from '~/components/transitions';

const animeHero = {
  targets: '.app-about__hero-text',
  duration: 1000,
  stagger: 150,
};

export default {
  data() {
    return {
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

  methods: {
    asideViewHandler(event) {
      // console.log('percentTop', event.target.rect);
      // console.log('percentCenter', event.target.rect);
      if (event.target.rect.top <= 0 && event.percentTop > 0) {
        this.viewingAside = true;
      } else {
        this.viewingAside = false;
      }
    },

    setCurrentArticle(event, test) {
      console.log('percentTop', event, test);
    },
  },
};
</script>

<style lang="scss" scoped>
article {
  opacity: .2;
  transition: opacity 1s;
}
// .view-in--gt-half {
//   opacity: .5;
// }
.view-in--gt-half, .view-in--full {
  opacity: 1;
}
</style>
