import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Karla", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
