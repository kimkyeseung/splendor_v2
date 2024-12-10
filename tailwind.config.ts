import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      boxShadow: {
        'inner-glow': 'inset 0 3px 4px -1px rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [require('@designbycode/tailwindcss-text-stroke')],
} satisfies Config;
