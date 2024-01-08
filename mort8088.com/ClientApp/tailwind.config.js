import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        normal:{
          back: colors.white,
          backalt: colors.gray[300],
          text: colors.black,
        },
        headfoot: {
          DEFAULT: colors.slate[300],
          back: colors.gray[400],
          darkBack: colors.slate[700],
          backalt: colors.slate[600],
          title: colors.white,
          text: colors.zinc[100],
        },
      },
      height: {
        '128': '20rem',
        'half': '50vh',
        '3/4': '75vh'
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

