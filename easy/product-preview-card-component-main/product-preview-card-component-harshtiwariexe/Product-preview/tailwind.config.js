/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      widest: ".5em",
      wider: ".1em",
    },
    fontWeight: {
      black: "1100",
    },
    colors: {
      "dark-cyan": "hsl(158, 36%, 37%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        "Dark-cyan": "hsl(158, 36%, 37%)",
        Cream: "hsl(30, 38%, 92%)",
        "Very-dark-blue": " hsl(212, 21%, 14%)",
        "Dark-grayish-blue": " hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [],
};
