import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1100px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "SF Pro Display",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        // Fontene overskriften danser innom, i tillegg til kursiv av
        // antikvaen. Alt er systemfonter, så de koster ingen nedlasting: Apple
        // gir New York og SF Mono, Windows gir Georgia og Consolas.
        serif: [
          "ui-serif",
          '"New York"',
          "Georgia",
          '"Times New Roman"',
          "serif",
        ],
        mono: [
          "ui-monospace",
          '"SF Mono"',
          '"Cascadia Mono"',
          "Consolas",
          "monospace",
        ],
      },
      // SF strammer sporingen selv på store grader; her hermer vi det.
      letterSpacing: {
        display: "-0.022em",
        // Store titler tåler enda strammere sporing enn brødtekst-displayet.
        stor: "-0.035em",
      },
      transitionTimingFunction: {
        mjuk: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      // Inngangen til det som står over bretten. Samme bevegelse som FadeUp,
      // men ren CSS: den starter med første maling og venter ikke på at
      // JavaScript skal laste. `both` holder elementet skjult gjennom
      // forsinkelsen, så det ikke blinker inn før det skal.
      keyframes: {
        inn: {
          from: { opacity: "0", transform: "translateY(1rem)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        inn: "inn 0.7s ease-out both",
      },
      colors: {
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Flata mellom bakgrunn og kort – bærer glasset.
        surface: "hsl(var(--surface))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // Trinnet under muted-foreground: perioder, spor-etiketter, meta.
        svak: "hsl(var(--svak))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          2: "hsl(var(--accent-2))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        // Konsentriske radier: barnet er foreldrenes radius minus luft.
        "2xl": "calc(var(--radius) + 8px)",
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 6px)",
        sm: "calc(var(--radius) - 10px)",
      },
    },
  },
};

export default config;
