/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
        margarine:["Margarine", "sans-serif"],
        nunito:["Nunito Sans", "sans-serif"]      },
      screens: {
        'max-sm': {'max': '1024px'}
      },
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
        tertiary: "#ec9006"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        }
      }
    },
  },
  plugins: [],
}