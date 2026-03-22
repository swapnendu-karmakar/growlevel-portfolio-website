/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0f0f0f',
          soft: '#1a1a2e',
        },
        slate: {
          muted: '#6b7280',
        },
        accent: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          pale: '#eff6ff',
        },
        surface: {
          DEFAULT: '#ffffff',
          gray: '#f8f9fb',
          border: '#e5e7eb',
        },
      },
      boxShadow: {
        glass: '0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
        'glass-hover': '0 12px 40px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)',
        lift: '0 20px 60px rgba(0,0,0,0.10)',
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
}
