const dateTimeFormats = require('./dateTimeFormats');

module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.js',
    },
    {
      code: 'ja',
      iso: 'ja-JP',
      name: '日本語',
      file: 'ja.js',
    },
  ],
  defaultLocale: 'en',
  seo: true,
  lazy: true,
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
