import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary palette for Indikavoyages (India-inspired, high contrast on white)
          navy: "#0B1B2F",
          saffron: "#EA580C",
          sea: "#0F766E",
        },
      },
    },
  },
  plugins: [],
};

export default config;

