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
        border: "var(--color-border)",
        input: "var(--color-border)",
        ring: "var(--color-accent)",
        background: "var(--color-secondary)",
        foreground: "var(--color-text-main)",
        primary: {
          DEFAULT: "var(--color-accent)",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-text-main)",
        },
        destructive: {
          DEFAULT: "red",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-text-muted)",
        },
        accent: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-text-main)",
        },
        popover: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-text-main)",
        },
        card: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-text-main)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
