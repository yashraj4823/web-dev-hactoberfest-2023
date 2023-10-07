/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["'Outfit', sans-serif", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

