import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  srcDir: 'src',
  ssr: true,

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

  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-eslint-global-imports',
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
