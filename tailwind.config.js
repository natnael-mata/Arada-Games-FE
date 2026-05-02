/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#A3E635", // Bright lime green
        secondary: "#0D1612", // Deep forest green
        accent: "#32FF00",
        dark: "#0D1612",
        "dark-surface": "#1A2521",
        "forest-light": "#17231E",
      },
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
        exo: ["'Exo 2'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
