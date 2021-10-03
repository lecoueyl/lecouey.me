const dateTimeFormats = require('./dateTimeFormats');

export default {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'EN',
      file: 'en.js',
    },
    {
      code: 'ja',
      iso: 'ja-JP',
      name: 'JP',
      file: 'ja.js',
    },
  ],
  defaultLocale: 'en',
  seo: true,
  lazy: true,
  baseUrl: process.env.APP_URL,
  detectBrowserLanguage: {
    cookieKey: 'redirected',
    useCookie: false,
  },
  langDir: 'locales/',
  parsePages: false,
  vueI18n: {
    dateTimeFormats,
    fallbackLocale: 'en',
  },
};
