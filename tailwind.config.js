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
      borderRadius: {
        '20': '20px'
      },
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
        "rhb-blue": {
          DEFAULT: "#6CCEE6",
          50: "#fafafa",
          100: "#FFFFFF",
          200: "#EFFAFC",
          300: "#e5f3f7",
          400: "#98DDED",
          500: "#6CCEE6",
          600: "#0067B1",
          700: "#22A9CA",
          800: "#0067B1",
          900: "#136073",
        },
        'fb-blue': {
          DEFAULT: '#1877f2'
        },
        'linkedin-blue': {
          DEFAULT: '#0067B1'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
