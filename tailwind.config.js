/** @type {import('tailwindcss').Config} */
/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const hexToRgb = (hex) => {
  const parsedHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return parsedHex ? `${parseInt(parsedHex[1], 16)} ${parseInt(parsedHex[2], 16)} ${parseInt(parsedHex[3], 16)}` : null;
};

module.exports = {
  jit: true,
  darkMode: 'class',
  theme: {
    boxShadow: {
      lg: '0px 0px 16px 0px rgba(var(--color-neutral-900), 0.05)',
      none: 'none',
    },
    colors: {
      primary: {
        1: 'hsl(var(--color-primary-1) / <alpha-value>)',
        2: 'hsl(var(--color-primary-2) / <alpha-value>)',
        3: 'hsl(var(--color-primary-3) / <alpha-value>)',
        4: 'hsl(var(--color-primary-4) / <alpha-value>)',
        5: 'hsl(var(--color-primary-5) / <alpha-value>)',
        6: 'hsl(var(--color-primary-6) / <alpha-value>)',
        7: 'hsl(var(--color-primary-7) / <alpha-value>)',
        8: 'hsl(var(--color-primary-8) / <alpha-value>)',
        9: 'hsl(var(--color-primary-9) / <alpha-value>)',
        10: 'hsl(var(--color-primary-10) / <alpha-value>)',
        11: 'hsl(var(--color-primary-11) / <alpha-value>)',
        12: 'hsl(var(--color-primary-12) / <alpha-value>)',
      },
      secondary: {
        DEFAULT: 'rgb(var(--color-secondary-900) / <alpha-value>)',
        900: 'rgb(var(--color-secondary-900) / <alpha-value>)',
        200: 'rgb(var(--color-secondary-200) / <alpha-value>)',
      },
      tertiary: {
        DEFAULT: 'rgb(var(--color-tertiary-900) / <alpha-value>)',
        900: 'rgb(var(--color-tertiary-900) / <alpha-value>)',
        200: 'rgb(var(--color-tertiary-200) / <alpha-value>)',
      },
      neutral: {
        1: 'hsl(var(--color-neutral-1) / <alpha-value>)',
        2: 'hsl(var(--color-neutral-2) / <alpha-value>)',
        3: 'hsl(var(--color-neutral-3) / <alpha-value>)',
        4: 'hsl(var(--color-neutral-4) / <alpha-value>)',
        5: 'hsl(var(--color-neutral-5) / <alpha-value>)',
        6: 'hsl(var(--color-neutral-6) / <alpha-value>)',
        7: 'hsl(var(--color-neutral-7) / <alpha-value>)',
        8: 'hsl(var(--color-neutral-8) / <alpha-value>)',
        9: 'hsl(var(--color-neutral-9) / <alpha-value>)',
        10: 'hsl(var(--color-neutral-10) / <alpha-value>)',
        11: 'hsl(var(--color-neutral-11) / <alpha-value>)',
        12: 'hsl(var(--color-neutral-12) / <alpha-value>)',
      },
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      japanese: ['"M PLUS 1p"', '"ヒラギノ角ゴ ProN"', '"Hiragino Kaku Gothic ProN"', '游ゴシック', '游ゴシック体', 'yugothic', '"Yu Gothic"', 'メイリオ', 'meiryo', '"ＭＳ ゴシック"',
        '"MS Gothic"', 'hirakakupron-w3', 'TakaoExゴシック', 'takaoexgothic', 'MotoyaLCedar', '"Droid Sans Japanese"', 'sans-serif',
      ],
    },
    extend: {
      animation: {
        blob: 'blob 30s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '33%': {
            transform: 'translate(3%, -2%) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-2%, 3%) scale(1)',
          },
          '100%': {
            transform: 'translate(0, 0) scale(1)',
          },
        },
      },
      transitionDuration: {
        2000: '2000ms',
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [
    plugin(({
      addBase,
      addUtilities,
    }) => {
      addBase({
        ':root': {

        },

        ':root.dark': {
          '--color-primary-1': '280 65.0% 99.4%',
          '--color-primary-2': '276 100% 99.0%',
          '--color-primary-3': '276 83.1% 97.0%',
          '--color-primary-4': '275 76.4% 94.7%',
          '--color-primary-5': '275 70.8% 91.8%',
          '--color-primary-6': '274 65.4% 87.8%',
          '--color-primary-7': '273 61.0% 81.7%',
          '--color-primary-8': '272 60.0% 73.5%',
          '--color-primary-9': '272 51.0% 54.0%',
          '--color-primary-10': '272 46.8% 50.3%',
          '--color-primary-11': '272 50.0% 45.8%',
          '--color-primary-12': '272 66.0% 16.0%',

          '--color-secondary-900': hexToRgb('#f0da4a'),
          '--color-secondary-200': hexToRgb('#854d0e'),

          '--color-tertiary-900': hexToRgb('#d45453'),
          '--color-tertiary-200': hexToRgb('#9d174d'),

          '--color-neutral-1': '0deg 0% 8.5%',
          '--color-neutral-2': '0deg 0% 11.0%',
          '--color-neutral-3': '0deg 0% 13.6%',
          '--color-neutral-4': '0deg 0% 15.8%',
          '--color-neutral-5': '0deg 0% 17.9%',
          '--color-neutral-6': '0deg 0% 20.5%',
          '--color-neutral-7': '0deg 0% 24.3%',
          '--color-neutral-8': '0deg 0% 31.2%',
          '--color-neutral-9': '0deg 0% 43.9%',
          '--color-neutral-10': '0deg 0% 49.4%',
          '--color-neutral-11': '0deg 0% 62.8%',
          '--color-neutral-12': '0deg 0% 93.0%',
        },
      });

      addUtilities({
        '.animation-delay-100': {
          'animation-delay': '100ms',
        },
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
        '.animation-delay-300': {
          'animation-delay': '300ms',
        },
        '.animation-delay-400': {
          'animation-delay': '400ms',
        },
        '.animation-delay-600': {
          'animation-delay': '600ms',
        },
        '.animation-delay-2000': {
          'animation-delay': '2000ms',
        },
        '.animation-delay-4000': {
          'animation-delay': '4000ms',
        },
        '.force-gpu': {
          transform: 'translateZ(0)',
        },
      });
    }),
  ],
  safelist: [
    'dark',
  ],
};
