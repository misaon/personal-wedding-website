const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        gwendolyn: ["Gwendolyn", ...defaultTheme.fontFamily.sans],
        merriweather: ["Merriweather", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#8DA48A"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
