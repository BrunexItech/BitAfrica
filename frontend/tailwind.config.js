/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2647',
        secondary: '#144272',
        accent: '#205295',
        light: '#2C74B3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      lineHeight: {
        tighter: '1.1',
        tight: '1.2',
        snug: '1.3',
        normal: '1.6',
        relaxed: '1.7',
        loose: '2',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
    },
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],      /* 12px */
      'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],     /* 14px */
      'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],            /* 16px */
      'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0' }],          /* 18px */
      'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],     /* 20px */
      '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.015em' }],    /* 24px */
      '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],   /* 30px */
      '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],   /* 36px */
      '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],       /* 48px */
      '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.035em' }],     /* 60px */
      '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],       /* 72px */
    }
  },
  plugins: [],
}