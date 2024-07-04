/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        light: "url('@/assets/images/bg-desktop-light.svg')",
        dark: "url('@/assets/images/bg-desktop-dark.svg')",
      }),
      colors: {
        lightGrey: "#F4F6FA",
        darkNavy: "#313E51",
      },
    },
  },
  plugins: [],
};
