import svgLoader from 'vite-svg-loader';

const config = {
  siteDescription: '',
  siteKeyword: '',
  siteLang: 'en',
  siteName: 'Leonard Lecouey',
  siteUrl: 'https://www.lecouey.me',
};

export default defineNuxtConfig({
  srcDir: 'src',

  runtimeConfig: {
    public: {
      ...config,
    },
  },

  app: {
    head: {
      title: config.siteName,

      script: [
        ...(process.env.NODE_ENV !== 'development' ? [{
          src: '/js/script.js',
          async: true,
          defer: true,
          'data-domain': 'lecouey.me',
        }] : []),
      ],

      meta: [
        {
          name: 'keyword',
          content: config.siteKeyword,
        },
      ],

      htmlAttrs: {
        lang: config.siteLang,
      },
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/html-validator',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    'nuxt-eslint-global-imports',
    'nuxt-schema-org',
  ],

  site: {
    url: config.siteUrl,
  },

  robots: {
    allow: ['/'],
  },

  tailwindcss: {
    viewer: false,
  },

  nitro: {
    static: process.env.NODE_ENV !== 'development',
  },

  vite: {
    plugins: [
      svgLoader(),
    ],
  },

  features: {
    inlineStyles: false,
  },

  build: {
    transpile: ['gsap'],
  },

  ignore: [
    'src/pages/breakout.vue',
  ],

  compatibilityDate: '2024-08-22',
});
