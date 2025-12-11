import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        halo: {
          bg: "#f9f7f3",
          fg: "#111111",
          gold: "#c6a15b",
          deepGold: "#4a3613",
          dusk: "#241e21",
          linen: "#e4d7c3",
          teal: "#4aa39b",
          offwhite: "#f3eee4",

          "gold-deep": "var(--color-halo-gold-deep)",
          "border-subtle": "var(--color-halo-border-subtle)",
          "border-strong": "var(--color-halo-border-strong)",
        },
        // optional semantic aliases if you like base/accents
        "base-dark": "#111111",
        "base-light": "#f9f7f3",
        "accent-gold": "var(--color-halo-gold)",
        "accent-gold-deep": "var(--color-halo-gold-deep)",
        "base-offwhite": "var(--color-halo-offwhite)",
        "base-linen": "var(--color-halo-linen)",

        // tweak to your existing teal value
        "accent-teal": "#4aa39b",
      },
      fontFamily: {
        // hooked up to next/font variables in layout.tsx
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        serif: ["var(--font-garamond)", "serif"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
      },
    },
  },
  plugins: [],
};

export default config;
