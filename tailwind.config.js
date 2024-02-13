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
        'hero-desktop': "url('/assets/home/desktop/image-hero.jpg')",
        'hero-tablet': "url('/assets/home/tablet/image-header.jpg')",
        'hero-mobile': "url('/assets/home/mobile/image-header.jpg')",
        'circles':  "url('/assets/home/desktop/pattern-circles.svg')",
        'zx7-speaker-desktop': "url('/assets/home/desktop/image-speaker-zx7.jpg')",
        'zx7-speaker-tablet': "url('/assets/home/tablet/image-speaker-zx7.jpg')",
        'zx7-speaker-mobile': "url('/assets/home/mobile/image-speaker-zx7.jpg')",
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

