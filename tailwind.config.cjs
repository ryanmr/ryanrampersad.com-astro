const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "8rem",
      },
      minWidth: {
        64: "16rem",
      },
      colors: {
        "ryan-off-white": "rgb(221, 221, 221)",
        "ryan-black": "rgb(24, 24, 24)",
        "ryan-black-transparent": "rgba(0, 0, 0, .5)",
      },
      fontFamily: {
        brand: ["League Gothic", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
        hyper: ["Atkinson Hyperlegible", defaultTheme.fontFamily.sans],
      },
      keyframes: {
        fadeY: {
          "100%": {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },
        fadeX: {
          "100%": {
            transform: "translateX(0px)",
            opacity: 1,
          },
        },
        superSpin: {
          "0%": {
            transform: "rotate(0deg) translateZ(1px)",
          },
          "100%": {
            transform: "rotate(360deg) translateZ(1px)",
          },
        },
        superPulse: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0.1",
          },
        },
        helloWave: {
          // based on https://brianm.me/ waving hand
          "0%": {
            transform: "rotate(0deg)",
          },
          "5%": {
            transform: "rotate(12deg)",
          },
          "10%": {
            transform: "rotate(-10deg)",
          },
          "15%": {
            transform: "rotate(10deg)",
          },
          "20%": {
            transform: "rotate(-8deg)",
          },
          "25%": {
            transform: "rotate(11deg)",
          },
          "30%": {
            transform: "rotate(-11deg)",
          },
          "35%": {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        "fade-down": "fadeY 0.75s linear 1s 1 forwards",
        "fade-x": "fadeX 0.75s linear 1s 1 forwards",
        "hello-wave": "helloWave 5s linear forwards infinite",
        "super-spin": "superSpin 5s linear forwards infinite",
        "super-pulse": "superPulse 5s linear alternate forwards infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
