/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "primary-color": "#4356FF",
      "secondary-color": "#394896",
      "thirth-color": "#EDD795",
      "main-color": "#e9f0f1",
      "gradient-color-1": "#212538",
      "gradient-color-2": "#0A0A0A",
    },
    fontFamily: {
      primary: ["Roboto", "sans-serif"],
      secondary: ["Saira", "sans-serif"],
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      extrabold: "900",
    },
    letterSpacing:{
      widest: '1.75rem',
    },
    extend: {
      backgroundImage: {
        hero: 'url("../img/hero.png")',
      },
    },
  },
  plugins: [],
};

