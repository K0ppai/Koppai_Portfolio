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
        secondary_pale_light: '#e7f6ed',
        bg_card_pale_light: '#efe7dd',
        accent_light: '#b56b17',
        bg_light: '#f1f7fd',
        bg_card_white_light: '#e9eff6',
        text_light: '#030c17',
        third_light: '#eee2d2',
        gradient_lToR: 'linear-gradient(to right, #e38b26, #eeb677)',
        accent_pale: '#cda373',
        tailwindGradient:
          'linear-gradient(90deg,hsl(187deg 73% 42%) 0%,hsl(186deg 85% 40%) 11%,hsl(184deg 100% 37%) 22%,hsl(183deg 100% 37%) 33%,hsl(181deg 100% 37%) 44%,hsl(180deg 100% 37%) 56%,hsl(178deg 100% 38%) 67%,hsl(177deg 100% 39%) 78%,hsl(175deg 100% 40%) 89%,hsl(173deg 85% 44%) 100%)',
      },
      backgroundImage: {
        'gradient-light':
          'linear-gradient(90deg, hsl(32deg 77% 52%) 0%, hsl(50deg 48% 66%) 50%, hsl(105deg 67% 81%) 100%)',
      },
    },
  },
  plugins: [],
};
