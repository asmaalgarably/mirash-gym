import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mirash: {
          50: "#FFF5F8",
          100: "#FFE6EE",
          200: "#FFCCDE",
          300: "#FFA3C3",
          400: "#FF6699",
          500: "#D81B60", // primary brand magenta
          600: "#C2185B",
          700: "#AD1457",
          800: "#880E4F",
          900: "#50062E",
          plum: "#24151F", // deep plum brand background
          espresso: "#1A0D16",
          dark: "#140A11",
          gold: "#FFB300",
          amber: "#FFA000",
          cream: "#FFF9FB",
        },
      },
      fontFamily: {
        heading: ["'Baloo Bhaijaan 2'", "Tajawal", "sans-serif"],
        body: ["Tajawal", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        rose: "0 10px 30px -5px rgba(216, 27, 96, 0.25)",
        "rose-lg": "0 20px 40px -10px rgba(216, 27, 96, 0.35)",
        gold: "0 10px 25px -5px rgba(255, 179, 0, 0.25)",
        luxury: "0 12px 35px -8px rgba(36, 21, 31, 0.12)",
      },
      borderRadius: {
        "3xl": "28px",
        "4xl": "36px",
      },
      animation: {
        float: "float 3.5s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
        shimmer: "shimmer 2.2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
