/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        light: "url('@/assets/images/bg-desktop-light.svg')",
        dark: "url('@/assets/images/bg-desktop-dark.svg')",
      }),
      colors: {
        lightGrey: "#F4F6FA",
        darkNavy: "#313E51",
        purple: "#A729F5",
      },
      screens: {
        md: { max: "768px" },
      },
    },
  },
  variants: {
    extend: {
      progress: ["rounded-lg"],
    },
  },
  plugins: [],
};
