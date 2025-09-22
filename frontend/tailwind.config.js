/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'poppins, sans-serif',
        sans: 'poppins, sans-serif',
        main: 'merriweather, serif',
      },
      colors: {
        'primary': '#53D347',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out'
      }
    },
  },
  plugins: [],
}

