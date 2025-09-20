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
    },
  },
  plugins: [],
}

