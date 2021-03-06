const dateTimeFormats = require('./dateTimeFormats');

module.exports = {
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
    useCookie: true,
  },
  langDir: 'i18n/',
  parsePages: false,
  vueI18n: {
    dateTimeFormats,
    fallbackLocale: 'en',
  },
};
