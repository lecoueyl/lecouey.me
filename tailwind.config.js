/** @type {import('tailwindcss').Config} */
/* eslint-disable import/no-extraneous-dependencies */
import fluidType from 'tailwindcss-fluid-type';
import { fontFamily } from 'tailwindcss/defaultTheme';

export const corePlugins = {
  container: false,
};

export const theme = {
  colors: {
    neutral: {
      50: '#EAE9E6',
      100: '#D4D2CA',
      200: '#BFBCB0',
      300: '#AAA797',
      400: '#96917E',
      500: '#7F7A67',
      600: '#656252',
      700: '#4C493E',
      800: '#333129',
      900: '#191815',
      950: '#171612',
    },
  },

  fontFamily: {
    sans: ['Inter var', ...fontFamily.sans],
  },

  // fontSize: {
  //   xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '-0.03em', fontWeight: 500 }],
  //   sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.03em', fontWeight: 500 }],
  //   base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.03em', fontWeight: 500 }],
  //   lg: [
  //     'clamp(1.125rem, calc(1.125rem + (1.25 - 1.125) * ((100vw - 20rem) / (96 - 20))), 1.25rem)',
  //     { lineHeight: '1.6', letterSpacing: '-0.03em', fontWeight: 500 }],
  //   xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.03em', fontWeight: 500 }],
  //   '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.03em', fontWeight: 500 }],
  //   '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.03em', fontWeight: 500 }],
  //   '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.03em', fontWeight: 500 }],
  //   '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: 500 }],
  //   '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: 500 }],
  //   '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: 500 }],
  //   '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: 500 }],
  //   '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: 500 }],
  // },

  extend: {
    transitionTimingFunction: {
      'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
  },
};

export const plugins = [
  fluidType({
    settings: {
      fontSizeMin: 1.125, // 1.125rem === 18px
      fontSizeMax: 1.25, // 1.25rem === 20px
      ratioMin: 1.125, // Multiplicator Min
      ratioMax: 1.2, // Multiplicator Max
      screenMin: 20, // 20rem === 320px
      unit: 'rem', // default is rem but it's also possible to use 'px'
    },
    values: {
      xs: [-2, 1.6],
      sm: [-1, 1.6],
      base: [0, 1.6],
      lg: [1, {
        lineHeight: 1.6,
        letterSpacing: '-0.03rem',
      }],
      xl: [2, 1.2],
      '2xl': [3, 1.2],
      '3xl': [4, 1.2],
      '4xl': [5, 1.1],
      '5xl': [6, 1.1],
      '6xl': [7, 1.1],
      '7xl': [8, 1],
      '8xl': [9, 1],
      '9xl': [10, 1],
    },
  }),
];
