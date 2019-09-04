const envConfig = require('./config');
const i18n = require('./i18n');

module.exports = {
  env: envConfig,

  /*
  ** Headers of the page
  */
  head: {
    title: 'Leonard Lecouey',
    titleTemplate: '%s — Leonard Lecouey',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Leonard Lecouey' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '"#ffffff' },
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
        color: '#1e2bff',
      },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/loading.vue',
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
    '@nuxtjs/style-resources',
    ['nuxt-i18n', i18n],
    ['nuxt-svg'],
    ['@nuxtjs/google-analytics', {
      id: 'UA-66613236-1',
    }],
  ],
  /*
  ** Sitemap
  */
  sitemap: {
    hostname: envConfig.app.url,
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
      './assets/scss/settings/_zindex.scss',
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
    extractCSS: true,
    /*
    ** Safari hot reload fix
    */
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].[hash].js' : '[chunkhash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].[hash].js' : '[chunkhash].js'),
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }

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
