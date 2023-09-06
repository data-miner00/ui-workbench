var baseconfig = require("./tailwind.base.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseconfig,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
};
