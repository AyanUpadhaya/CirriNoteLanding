/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#808080",
        dark: "#000000",
        dark_gray: "#0A0A0A",
        dark_soft_gray: "#191919",
        cold_gray: "#1C1C1C",
        white: "#FFFFFF",
        gray_medium: "#808080",
        topnav: "#166E4E",
        footerText: "#848484",
        // featureCardHover: "#1C1C1C",
        featureCardHoverBorder: "#00BB77",
        textGreen: "#00BB77",
      },

      backgroundImage: {
        heroBg: "url('./src/assets/images/hero.png')",
        introBg: "url('./src/assets/images/intro.png')",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
