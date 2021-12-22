const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        192: "48rem",
      },
      fontFamily: {
        custom: ["Junicode", "sans-serif"],
      },
    },
    colors: {
      black: colors.black,
      green: colors.emerald,
      darkRed: "#680727",
      lightRed: "#AA4465",
      superDarkRed: "#3E0E1E",
    },
  },
  variants: {},
  plugins: [],
};
