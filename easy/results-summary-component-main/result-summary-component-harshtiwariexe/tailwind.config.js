/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        "Pale-blue": "hsl(221, 100%, 96%)",
        "Light-lavender": "hsl(241, 100%, 89%)",
        "Dark-gray-blue": "hsl(224, 30%, 27%)",
        "Light-slate-blue": "hsl(252, 100%, 67%)",
        "Light-royal-blue": "hsl(241, 81%, 54%)",
        "Violet-blue": " hsla(256, 72%, 46%, 1)",
        "Persian-blue": "hsla(241, 72%, 46%, 0)",
        "Light-red": {
          default: " hsl(0, 100%, 67%)",
          light: " hsl(0, 100%, 67%,.1)",
        },
        "Orangey-yellow": {
          default: "hsl(39, 100%, 56%)",
          light: "hsl(39, 100%, 56%,0.1)",
        },
        "Green-teal": {
          default: "hsl(166, 100%, 37%)",
          light: "hsl(166, 100%, 37%,0.1)",
        },
        "Cobalt-blue": {
          default: "hsl(234, 85%, 45%)",
          light: "hsl(234, 85%, 45%,0.1)",
        },
      },
      width: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
