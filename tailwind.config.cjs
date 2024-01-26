/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        violet: "#C7A6D9",
        green: "#1EC132",
        darkGreen: "#405D2F",
        pink: "#D745BB",
        brown: "#A47545",
        blue: "#578CC1",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
