/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontSize: {
        body: '1.125rem',
        header: '2rem',
      },
      lineHeight: {
        body: '1.75',
        header: '1.25',
      },
      spacing: {
        section: '2rem',
      },
    },
  },
  plugins: [],
};
