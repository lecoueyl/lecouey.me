const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      foreground: 'var(--color-foreground)',
      background: 'var(--color-background)',
      primary: 'var(--color-primary)',
      wash: {
        background: 'var(--color-wash-background)',
        muted: 'var(--color-wash-muted)',
      },
    },
    extend: {
      animation: {
        wave: 'wave 10s infinite ease forwards',
      },
      keyframes: {
        wave: {
          '0%, 30%, 100%': {
            transform: 'rotate(0)',
          },
          '5%, 15%, 25%': {
            transform: 'rotate(10deg)',
          },
          '10%, 20%': {
            transform: 'rotate(-10deg);',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        japanese: ['M PLUS 1p', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', '游ゴシック', '游ゴシック体', 'yugothic', 'Yu Gothic', 'メイリオ', 'meiryo', 'ＭＳ ゴシック',
          'MS Gothic', 'hirakakupron-w3', 'TakaoExゴシック', 'takaoexgothic', 'MotoyaLCedar', 'Droid Sans Japanese', 'sans-serif',
        ],
      },
    },
  },
  purge: [
    './src/**/*.{vue}',
  ],
};
