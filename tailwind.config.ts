import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#981e32', // Haverford Red RGB(152, 30, 50)
          600: '#7a1829',
          700: '#5c1220',
          800: '#3e0c16',
          900: '#20060b',
        },
      },
    },
  },
  plugins: [],
};

export default config;
