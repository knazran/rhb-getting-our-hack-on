const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tgray: colors.trueGray,
        "heavy-metal": {
          DEFAULT: "#21231F",
          50: "#949A8D",
          100: "#878E80",
          200: "#6E7467",
          300: "#54594F",
          400: "#3B3E37",
          500: "#21231F",
          600: "#080807",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
