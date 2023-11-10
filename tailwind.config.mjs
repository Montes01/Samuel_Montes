/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#252525",
        contrast: "#934141",
        secondary: "#5ED8FF",
        third: "#BA20D3"
      },
      textColor: {
        principalText: "#FFF",
        secondaryText: "#000",
      },
      backgroundImage: {
        primaryGradient: "linear-gradient(135deg , #0C171E 30%, #262626 90%)",
      },
      borderRadius: {
        normal: "50px",
        short: "25px",
        minimum: "10px",
      },
    },
  },
  plugins: [],
};
