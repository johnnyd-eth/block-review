/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      swatch: {
        50: '#F5F7FF', // homepage "trustless", etc. BACKGROUND
        100: '#EFF1FE', // walletConnect button modal background
        200: '#DFE3FD', //icon inner background,
        400: '#6172f3', // primary button background (e.g. "Search button"), homepage icon colors 
        500: '#4E5CC6', // primary button hover background
        800: '#1E2455' // footer background
      },
      gray: {
        50: '#F9FAFB',
        300: '#D0D5DD',
        400: '#98A2B3',
        500: '#667085',
        600: '#475467'
      },
      white: '#fff'
    },
    fontFamily: {
      display: ['Beatrice'],
      heading: ['Beatrice'],
      body: ['Beatrice']
    }
  },
  plugins: [],
}
