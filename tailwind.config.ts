import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          black: "#080808",
          dark: "#111111",
          card: "#171717",
          border: "#262626",
          red: {
            deep: "#B92720",
            bright: "#E5392F",
            glow: "rgba(229, 57, 47, 0.25)",
          },
          yellow: {
            DEFAULT: "#FFD426",
            hover: "#F5C810",
            glow: "rgba(255, 212, 38, 0.25)",
          },
          grey: {
            light: "#F2F2F2",
            muted: "#9CA3AF",
            dark: "#1F2937",
          },
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Anton", "Bebas Neue", "Oswald", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "Manrope", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-red": "radial-gradient(circle at top right, rgba(229, 57, 47, 0.15), transparent 70%)",
        "radial-yellow": "radial-gradient(circle at bottom left, rgba(255, 212, 38, 0.1), transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;

