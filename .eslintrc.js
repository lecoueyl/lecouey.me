module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'max-len': ['error', { code: 160 }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      ignores: [
        'nuxt',
        'nuxt-link',
        'i18n',
      ],
    }],
  },
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
};
