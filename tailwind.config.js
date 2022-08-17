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
    boxShadow: {
      lg: '0px 0px 16px 0px rgba(var(--color-neutral-900), 0.05)',
      none: 'none',
    },
    colors: {
      primary: {
        DEFAULT: 'rgb(var(--color-primary-900) / <alpha-value>)',
        900: 'rgb(var(--color-primary-900) / <alpha-value>)',
        200: 'rgb(var(--color-primary-200) / <alpha-value>)',
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
        DEFAULT: 'rgb(var(--color-neutral-900) / <alpha-value>)',
        900: 'rgb(var(--color-neutral-900) / <alpha-value>)',
        300: 'rgb(var(--color-neutral-300) / <alpha-value>)',
        100: 'rgb(var(--color-neutral-100) / <alpha-value>)',
        50: 'rgb(var(--color-neutral-50) / <alpha-value>)',
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
          '--color-primary-900': hexToRgb('#8e4ec6'),
          '--color-primary-200': hexToRgb('#c1b6f8'),

          '--color-secondary-900': hexToRgb('#f0da4a'),
          '--color-secondary-200': hexToRgb('#f5d565'),

          '--color-tertiary-900': hexToRgb('#d45453'),
          '--color-tertiary-200': hexToRgb('#edacd2'),

          '--color-neutral-900': hexToRgb('#1a1523'),
          '--color-neutral-300': hexToRgb('#6f6e77'),
          '--color-neutral-100': hexToRgb('#f4f4f4'),
          '--color-neutral-50': hexToRgb('#f3f0f0'),
        },

        ':root.dark': {
          '--color-primary-900': hexToRgb('#8e4ec6'),
          '--color-primary-200': hexToRgb('#6b21a8'),

          '--color-secondary-900': hexToRgb('#f0da4a'),
          '--color-secondary-200': hexToRgb('#854d0e'),

          '--color-tertiary-900': hexToRgb('#d45453'),
          '--color-tertiary-200': hexToRgb('#9d174d'),

          '--color-neutral-900': hexToRgb('#ededef'),
          '--color-neutral-300': hexToRgb('#a09fa6'),
          '--color-neutral-100': hexToRgb('#232326'),
          '--color-neutral-50': hexToRgb('#161618'),
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
