import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        evidence: {
          high: 'hsl(var(--evidence-high))',
          moderate: 'hsl(var(--evidence-moderate))',
          low: 'hsl(var(--evidence-low))',
          traditional: 'hsl(var(--evidence-traditional))',
        },
        risk: {
          informational: 'hsl(var(--risk-informational))',
          caution: 'hsl(var(--risk-caution))',
          high: 'hsl(var(--risk-high))',
          contraindicated: 'hsl(var(--risk-contraindicated))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
};

export default config;
