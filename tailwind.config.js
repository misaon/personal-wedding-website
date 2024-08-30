const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        belleza: ["Belleza", ...defaultTheme.fontFamily.sans],
        parisienne: ["Parisienne", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#8DA48A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
