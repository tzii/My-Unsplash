module.exports = {
  purge: {
    enabled: false,
    content: ["src/**/*.tsx"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        5: 5,
      },
      minWidth: {
        640: 640,
      },
      minHeight: {
        500: 500,
      },
      width: {
        500: 500,
      },
      keyframes: {
        "slide-top": {
          "0%": { transform: "translateY(120px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        "slide-down": {
          "0%": { transform: "translateY(-120px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        "slide-left": {
          "0%": { transform: "translateX(120px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        "slide-right": {
          "0%": { transform: "translateX(-120px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
      },
      animation: {
        "slide-top": "slide-top 0.3s ease-out ",
        "slide-down": "slide-down 0.3s ease-out ",
        "slide-left": "slide-left 0.3s ease-out ",
        "slide-right": "slide-right 0.3s ease-out ",
      },
    },
    fontFamily: {
      noto: ["Noto Sans"],
      mont: ["Montserrat"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
