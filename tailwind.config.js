const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        192: "48rem",
        thousand: "1000%",
      },
      fontFamily: {
        juni: ["Junicode", "sans-serif"],
        droid: ["Droid", "sans-serif"],
      },
      width: {
        48: "48%",
        redBall: "12px",
      },
      height: {
        redBall: "12px",
      },
    },
    colors: {
      black: colors.black,
      opacBlack: "rgba(0, 0, 0, 0.65)",
      clear: "rgba(0, 0, 0, 0)",
      white: colors.white,
      lightBlack: "#3f3f3f",
      green: colors.emerald,
      darkRed: "#680727",
      lightRed: "#AA4465",
      superDarkRed: "#3E0E1E",
      superDarkRedOpac: "rgba(62, 14, 30, .55)",
    },
  },
  variants: {
    translate: ["responsive", "hover", "group-hover"],
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:group-hover"]);
    }),
  ],
};
