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
        brown: "#796C5B",
        blue: "#CFF2F4",
        gray: "#A6A6A6",
        white: "#FFFFFF",
        accent: "#0397F5",
      },
      fontFamily: {
        montrealRegular: ["NeueMontreal-Regular"],
        montrealMedium: ["NeueMontreal-Medium"],
      },
    },
  },
  plugins: [],
};
