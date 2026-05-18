import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        payle: {
          black: "#030303",
          ink: "#070a08",
          forest: "#0d1f12",
          moss: "#14532d",
          leaf: "#22c55e",
          glow: "#4ade80",
          mist: "#86efac"
        }
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      backgroundImage: {
        "payle-radial":
          "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(34,197,94,0.18), transparent 55%)",
        "payle-grid":
          "linear-gradient(rgba(34,197,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.06) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "64px 64px"
      },
      keyframes: {
        "payle-pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" }
        },
        "payle-grid-drift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "64px 64px" }
        }
      },
      animation: {
        "payle-pulse-glow": "payle-pulse-glow 8s ease-in-out infinite",
        "payle-grid-drift": "payle-grid-drift 22s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
