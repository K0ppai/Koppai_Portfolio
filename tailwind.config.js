/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary_dark: '#e38b26',
        secondary_dark: '#020501',
        accent_dark: '#eeb677',
        text_dark: '#f1f7fd',
        bg_dark: '#030c17',
        third_dark: '#251f1a',
        bg_card_dark: '#020b12',
        bg_card_pale_dark: '#0a131e',
        primary_light: '#e38b26',
        secondary_light: '#bfefaf',
        accent_light: '#b56b17',
        bg_light: '#f1f7fd',
        text_light: '#030c17',
        third_light: '#eee2d2',
        gradient_lToR: 'linear-gradient(to right, #e38b26, #eeb677)',
        accent_pale: '#cda373',
      },
    },
  },
  plugins: [],
};
