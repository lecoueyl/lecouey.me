import svgLoader from 'vite-svg-loader';

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  srcDir: 'src',
  ssr: true,

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
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-eslint-global-imports',
  ],

  image: {
    dir: 'public/img/',
  },

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
