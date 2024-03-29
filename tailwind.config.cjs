/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        violet: "#C7A7D9",
        green: "#C8DBC5",
        darkGreen: "#405D2F",
        pink: "#C7A6D9",
        petrol: "#A57B7C",
        blue: "#CFF2F4",
        gray: "#A6A6A6",
        white: "#FFFFFF",
        accent: "#0397F5",
      },
      fontFamily: {
        montrealMedium: ["NeueMontreal-Medium"],
      },
    },
  },
  plugins: [],
};
