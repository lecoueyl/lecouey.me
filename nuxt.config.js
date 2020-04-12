const env = require('dotenv').config().parsed;
const i18n = require('./src/i18n');
const i18nEn = require('./src/i18n/en.js');

// Allow system env overwrite .env file
Object.keys(env).forEach((key) => {
  env[key] = process.env[key];
});

module.exports = {
  srcDir: 'src',
  env,
  /*
  ** Headers of the page
  */
  head: {
    title: i18nEn.head.title,
    titleTemplate: `%s — ${i18nEn.head.title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: i18nEn.head.title },
      { name: 'description', content: i18nEn.head.description },
      { name: 'keywords', content: i18nEn.head.keywords },

      { name: 'msapplication-TileColor', content: '#f5f5f5' },
      { name: 'theme-color', content: '#f5f5f5' },

      { property: 'og:title', content: i18nEn.head.title },
      { property: 'og:description', content: i18nEn.head.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: env.APP_URL },
      { property: 'og:image', content: `${env.APP_URL}/social.png` },
      { property: 'og:site_name', content: i18nEn.head.title },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: i18nEn.head.title },
      { name: 'twitter:description', content: i18nEn.head.description },
      { name: 'twitter:image', content: `${env.APP_URL}/social.png` },
      { name: 'twitter:site', content: env.TWITTER_ACCOUNT },
    ],

    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#2b2b2b',
      },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/Loading.vue',
  /*
  ** Style configuration
  */
  css: [
    '~/assets/scss/main.scss',
  ],
  /*
  ** Plugins
  */
  plugins: [
    { src: '~/plugins/vue-check-view', ssr: false },
  ],
  /*
  ** Modules
  */
  modules: [
    ['nuxt-i18n', i18n],
    ['nuxt-svg'],
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Sitemap
  */
  sitemap: {
    hostname: env.APP_URL,
    gzip: true,
  },
  /*
  ** Import global scss
  */
  styleResources: {
    scss: [
      './assets/scss/settings/_animations.scss',
      './assets/scss/settings/_baseline.scss',
      './assets/scss/settings/_colors.scss',
    ],
  },
  /*
  ** Router configuration
  */
  router: {
    linkActiveClass: 'c-link--is-active',
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: env.GOOGLE_ANALYTICS_ID,
      debug: {
        enabled: env.GOOGLE_ANALYTICS_DEBUG === 'true',
        sendHitTask: env.GOOGLE_ANALYTICS_DEBUG !== 'true',
      },
    }],
    '@nuxtjs/stylelint-module',
    'nuxt-purgecss',
  ],
  /*
  ** PurgeCSS configuration
  */
  purgeCSS: {
    extractors: () => [
      {
        extractor: (content) => content.match(/[\w-/@]+(?<!\/@)/g) || [],
        extensions: ['html', 'vue', 'js'],
      },
    ],
  },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    extend(config) {
      // Load media assets
      config.module.rules.push({
        test: /\.(m4a|mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]',
          outputPath: './assets/media/',
        },
      });
    },
  },
};
