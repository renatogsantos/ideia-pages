// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        primary: "#38c460",
        green: {
          100: "#2ea24f",
          200: "#38c460",
          300: "#96d834",
          400: "#a9df57",
        },
        blue: {
          100: "#2ea24f",
          200: "#38c460",
          300: "#96d834",
          400: "#a9df57",
        },
        // .. rest of the colors
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
  ],
};

export default config;
