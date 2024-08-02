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
        articulatcf: ["ArticulatCF", ...defaultTheme.fontFamily.sans],
        clearface: ["ITC Clearface Std", ...defaultTheme.fontFamily.serif],
        faktPro: ["Fakt Pro", ...defaultTheme.fontFamily.sans],
        mabryPro: ["Mabry pro", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "spin-slow": "spin 1s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-45deg)" },
          "50%": { transform: "rotate(45deg)" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
