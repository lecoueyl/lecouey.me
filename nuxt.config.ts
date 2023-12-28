import svgLoader from 'vite-svg-loader';

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  srcDir: 'src',

  runtimeConfig: {
    emailHost: process.env.EMAIL_HOST,
    emailPass: process.env.EMAIL_PASS,
    emailPort: process.env.EMAIL_PORT,
    emailUser: process.env.EMAIL_USER,
    public: {
      siteUrl: 'https://www.lecouey.me',
      siteName: 'Leonard Lecouey',
      siteDescription: '',
      language: 'en',
    },
  },

  app: {
    head: {
      script: [
        {
          src: '/js/script.js',
          async: true,
          defer: true,
          'data-domain': 'lecouey.me',
        },
      ],
    },
  },

  modules: [
    '@nuxtjs/html-validator',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-eslint-global-imports',
  ],

  extends: [
    'nuxt-seo-kit',
  ],

  colorMode: {
    classSuffix: '',
    dataValue: 'theme',
  },

  tailwindcss: {
    viewer: false,
  },

  vite: {
    plugins: [
      svgLoader(),
    ],
  },
});
