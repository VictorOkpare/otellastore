/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/*.{js,jsx,ts,tsx}', "./index.html", './src/screens/*.{js,jsx,ts,tsx}'],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary: "#ffffff",
        secondary: "#000000"
      },
      container: {
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "3rem",

        }
      }
    },
  },
  plugins: [],
}

