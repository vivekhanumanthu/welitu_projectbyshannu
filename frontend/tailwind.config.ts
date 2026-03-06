import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#faf7f2",
        champagne: "#d7b089",
        beige: "#e7d8c7",
        night: "#111111",
        blush: "#f5ece6"
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Manrope'", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 20px 50px rgba(0, 0, 0, 0.2)",
        glow: "0 0 80px rgba(215, 176, 137, 0.35)"
      },
      backgroundImage: {
        noise: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8) 0%, rgba(250,247,242,0.95) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
