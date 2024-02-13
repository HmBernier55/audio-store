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
        'hero-desktop': "url('/public/assets/home/desktop/image-hero.jpg')",
        'hero-tablet': "url('/public/assets/home/tablet/image-header.jpg')",
        'hero-mobile': "url('/public/assets/home/mobile/image-header.jpg')",
        'circles':  "url('/public/assets/home/desktop/pattern-circles.svg')",
        'zx7-speaker-desktop': "url('/public/assets/home/desktop/image-speaker-zx7.jpg')",
        'zx7-speaker-tablet': "url('/public/assets/home/tablet/image-speaker-zx7.jpg')",
        'zx7-speaker-mobile': "url('/public/assets/home/mobile/image-speaker-zx7.jpg')",
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

