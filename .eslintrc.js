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
    'import/no-extraneous-dependencies': 0,
  },
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
};
