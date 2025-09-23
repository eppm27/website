/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      zIndex: {
        1000: "1000",
      },
      colors: {
        babyblue: "#A3D5FF",
        skyblue: "#CDEFFF",
        cornflower: "#79B8F3",
        lavender: "#EADCF8",
        peach: "#FFD6E0",
      },
    },
  },
  plugins: [],
};
