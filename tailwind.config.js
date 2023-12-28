/** @type {import('tailwindcss').Config} */
/* eslint-disable import/no-extraneous-dependencies */
import { fontFamily } from 'tailwindcss/defaultTheme';

export const theme = {
  fontFamily: {
    sans: ['Inter var', ...fontFamily.sans],
  },

  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '-0.01em', fontWeight: 500 }],
    sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.01em', fontWeight: 500 }],
    base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.01em', fontWeight: 500 }],
    lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em', fontWeight: 500 }],
    xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em', fontWeight: 500 }],
    '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.01em', fontWeight: 500 }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.01em', fontWeight: 500 }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.01em', fontWeight: 500 }],
    '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: 500 }],
    '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: 500 }],
    '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: 500 }],
    '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: 500 }],
    '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: 500 }],
  },

  extend: {
    transitionTimingFunction: {
      'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
  },
};

export const corePlugins = {
  container: false,
};

export default theme;
