const i18n = require('./src/i18n');
const i18nEn = require('./src/i18n/en.js');

module.exports = {
  srcDir: 'src',
  target: 'static',
  /*
  **  Runtime config
  */
  publicRuntimeConfig: {
    app: {
      mail: process.env.APP_MAIL || 'leonard@lecouey.me',
      source: process.env.APP_SOURCE || 'https://github.com/lecoueyl/lecouey.me',
      url: process.env.APP_URL || 'https://www.lecouey.me',
    },
    links: {
      codepen: process.env.LINKS_CODEPEN || 'https://codepen.io/llecouey',
      dribbble: process.env.LINKS_DRIBBBLE || 'https://dribbble.com/llecouey',
      github: process.env.LINKS_GITHUB || 'https://github.com/lecoueyl',
      linkedin: process.env.LINKS_LINKEDIN || 'https://www.linkedin.com/in/llecouey',
    },
  },
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

      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },

      { name: 'msapplication-TileColor', content: '#f5f5f5' },
      { name: 'theme-color', content: '#f5f5f5' },

      { property: 'og:title', content: i18nEn.head.title },
      { property: 'og:description', content: i18nEn.head.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: process.env.APP_URL },
      { property: 'og:image', content: `${process.env.APP_URL}/social.png` },
      { property: 'og:site_name', content: i18nEn.head.title },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: i18nEn.head.title },
      { name: 'twitter:description', content: i18nEn.head.description },
      { name: 'twitter:image', content: `${process.env.APP_URL}/social.png` },
      { name: 'twitter:site', content: process.env.TWITTER_ACCOUNT },
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

    bodyAttrs: {
      class: ['u-bgcolor-background'],
    },
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
    '@nuxtjs/sitemap',
  ],
  /*
  ** Sitemap
  */
  sitemap: {
    hostname: process.env.APP_URL,
    gzip: true,
    i18n: i18n.defaultLocale,
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg',
    'nuxt-purgecss',
  ],
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
  ** PurgeCSS configuration
  */
  purgeCSS: {
    whitelist: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'blockquote', 'p', 'pre', 'code', 'dl', 'dd', 'ol', 'ul', 'figure', 'hr', 'fieldset', 'legend',
      'c-link--is-active',
    ],
    whitelistPatterns: [
      /-(leave|enter|appear)(|-(to|from|active))$/, // Normal transitions
      /^nuxt-link(|-exact)-active$/, // Nuxt link classes
      /^(?!cursor-move).+-move$/, // Move transitions
      /data-v-.*/, // Keep scoped styles
    ],
    extractors: () => [
      {
        extractor: (content) => content.match(/[\w-/@]+(?<!\/@)/g) || [], // Extarct res class (eg: u-1/12@md)
        extensions: ['html', 'vue', 'js'],
      },
    ],
  },
  /*
  ** Router configuration
  */
  router: {
    linkActiveClass: 'c-link--is-active',
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
