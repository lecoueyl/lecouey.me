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
    'plugin:tailwindcss/recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'max-len': ['error', { code: 160 }],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [
      'error',
      {
        ignore: ['.svg'],
      },
    ],
    'vue/multi-word-component-names': 0,
    'tailwindcss/migration-from-tailwind-2': 0,
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue', '.svg', '.mp4'],
        nuxtSrcDir: 'src',
      },
    },
  },
};
