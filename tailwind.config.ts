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
        primary: {
          DEFAULT: "#1a1a1a",
          dark: "#000000",
          light: "#2d2d2d",
        },
        secondary: {
          DEFAULT: "#333333",
          light: "#4d4d4d",
          dark: "#262626",
        },
        text: {
          primary: "#1a1a1a",
          secondary: "#4a4a4a",
          light: "#717171",
        },
        accent: "#666666",
        background: "#f8f9fa",
        surface: "#ffffff",
      },
      spacing: {
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
        slideInRight: 'slideInRight 0.5s ease-out',
        scaleUp: 'scaleUp 0.3s ease-out',
        bounce: 'bounce 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
