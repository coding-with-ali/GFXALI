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
        'theme-white': '#000000',
        'theme-black': '#ffffff',
        'theme-silver': '#C0C0C0',
      },
      fontFamily: {
      marker: ['var(--font-marker)', 'cursive'], // Muhammad Ali heading ke liye
      handwriting: ['var(--font-handwriting)', 'sans-serif'], // About Me labels ke liye
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;