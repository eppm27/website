// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
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
};
export const plugins = [];
