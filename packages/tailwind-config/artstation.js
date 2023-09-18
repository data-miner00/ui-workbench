var defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./locales/**/*.json",
  ],
  theme: {
    extend: {
      fontFamily: {
        aktura: ["Aktura", ...defaultTheme.fontFamily.serif],
        "instrument-serif": [
          "Instrument Serif",
          ...defaultTheme.fontFamily.serif,
        ],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
