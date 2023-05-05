/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        showUp: {
          "0%": { opacity: "0" },
          "70%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideLeft: "slide 1s ease-in-out",
        showUp: "showUp 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
