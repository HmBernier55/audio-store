/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': 'Manrope',
      },
      backgroundImage: {
        'hero-desktop': "url('/src/assets/home/desktop/image-hero.jpg')",
        'hero-tablet': "url('/src/assets/home/tablet/image-header.jpg')",
        'hero-mobile': "url('/src/assets/home/mobile/image-header.jpg')",
        'circles':  "url('/src/assets/home/desktop/pattern-circles.svg')",
        'zx7-speaker': "url('src/assets/home/desktop/image-speaker-zx7.jpg')",
      },
      colors: {
        'orange-button': '#D87D4A',
        'orange-hover': '#FBAF85',
        'black-hover': '#4C4C4C',
      }
    },
  },
  plugins: [],
}

