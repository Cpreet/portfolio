import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ===== CUSTOMIZATION: Brand Colors =====
      colors: {
        // Background colors
        bg: {
          primary: '#0a0a0f',
          secondary: '#12121a',
        },
        // Surface colors
        surface: {
          DEFAULT: '#18181b',
          hover: '#1f1f24',
          active: '#27272a',
        },
        // Accent colors
        accent: {
          cyan: '#00f0ff',
          magenta: '#ff00aa',
          lime: '#b4ff39',
        },
        // Text colors
        text: {
          primary: '#e4e4e7',
          secondary: '#a1a1aa',
          muted: '#71717a',
        },
      },
      // ===== CUSTOMIZATION: Typography =====
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      // Animation easings
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      // Keyframe animations
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      // Background patterns
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(to right, #0a0a0f 1px, transparent 1px), linear-gradient(to bottom, #0a0a0f 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

export default config

