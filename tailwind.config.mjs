import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: defaultTheme.fontFamily.serif,
      },
      colors: {
        accent: {
          DEFAULT: "#17b8a6",
          soft: "#7dd3c7",
        },
      },
    },
  },
  plugins: [typography],
};
