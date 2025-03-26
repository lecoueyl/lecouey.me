import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
// import globals from 'globals';
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'import/no-cycle': 'off',
      'max-len': [
        'error',
        {
          code: 160,
          ignorePattern: 'class="([\\s\\S]*?)"|d="([\\s\\S]*?)"',
          ignoreUrls: true,
        },
      ],
      'vue/multi-word-component-names': 'off',
    },
    // languageOptions: {
    //   sourceType: 'module',
    //   globals: {
    //     ...globals.browser,
    //   },
    // },
  },
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.nuxt/**', '**/.output/**'],
  },
]);
