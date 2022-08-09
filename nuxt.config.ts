/* eslint-disable import/no-extraneous-dependencies */
import { defineNuxtConfig } from 'nuxt';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  srcDir: 'src',
  target: 'static',
  ssr: false,

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
