/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
        sage: {
          50: "#f6faf8",
          100: "#ecf5f1",
          200: "#d9ebe7",
          300: "#c6dfd9",
          400: "#a1c9be",
          500: "#7bb3a3",
          600: "#5f9387",
          700: "#4a786f",
          800: "#2d8c7a",
          900: "#1a5258",
        },
        electric: {
          400: "#00d9ff",
          500: "#00bfff",
          600: "#0099ff",
        },
        neon: {
          blue: "#00d9ff",
          cyan: "#00f0ff",
          purple: "#b837f0",
          pink: "#ff0080",
        },
        glow: {
          blue: "#00bfff",
          purple: "#9d4edd",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 191, 255, 0.3)",
        "glow-lg": "0 0 40px rgba(0, 191, 255, 0.4)",
        "glow-purple": "0 0 20px rgba(157, 78, 221, 0.3)",
        card: "0 8px 32px rgba(0, 0, 0, 0.2)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0, 191, 255, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(0, 191, 255, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        shimmer: "shimmer 3s infinite",
        slideUp: "slideUp 0.6s ease-out",
        fadeIn: "fadeIn 0.6s ease-out",
      },
      transitionDuration: {
        350: "350ms",
      },
    },
  },
  plugins: [],
};
