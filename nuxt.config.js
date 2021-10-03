import i18n from './src/locales';
import i18nEn from './src/locales/en';

module.exports = {
  // Target: https://go.nuxtjs.dev/config-target
  srcDir: 'src',
  target: 'static',
  ssr: false,

  // Generate fallback pages: https://nuxtjs.org/docs/configuration-glossary/configuration-generate#fallback
  generate: {
    fallback: true,
  },

  // Environment variables
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

  // Global page headers: https://go.nuxtjs.dev/config-head
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

    script: [
      {
        src: '/js/script.js',
        async: true,
        defer: true,
        'data-domain': 'lecouey.me',
      },
    ],
  },

  loading: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components',
      ignore: ['**/index.js'],
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-check-view', ssr: false },
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/i18n', i18n],
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: process.env.APP_URL,
    gzip: true,
    i18n: i18n.defaultLocale,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg',
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    configPath: '../tailwind.config.js',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
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
