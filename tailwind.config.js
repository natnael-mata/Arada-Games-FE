/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#8DC63F",
        primaryLight: "#C8F38C",
        primaryDark: "#5F990F",
        secondary: "#1E2810",
        grayLight: "#D5D9D1",
        grayDark: "#424F30",
        Dark: "#1E2810",
        activeTab: "#C8F38C",
        yellowLight: "#C6C43F",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
