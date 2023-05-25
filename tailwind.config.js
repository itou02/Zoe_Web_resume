/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{html,js,vue,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font': ['Comfortaa', 'cwTeXYen'],
      },
      colors: {
        primary: colors.matcha,
        secondary: colors.reddish,
        matcha: {
          50: "#F1F0EA",
          100: "#E3E1D5",
          200: "#C8C5AE",
          300: "#AEAA88",
          400: "#938F64",
          500: "#797641",
          600: "#605E35",
          700: "#484629",
          800: "#31301E",
          900: "#29281C",
        },
        reddish: {
          50: "#F1EEEB",
          100: "#E9E0D7",
          200: "#E5CCB8",
          300: "#DFB89A",
          400: "#D8A47D",
          500: "#CF9160",
          600: "#A97750",
          700: "#855E40",
          800: "#634731",
          900: "#423023",
        },
        beige: {
          100: "#EBEAE7",
          200: "#E6E4E0",
          300: "#E2DED9",
        },
      },
    },
  },
};
