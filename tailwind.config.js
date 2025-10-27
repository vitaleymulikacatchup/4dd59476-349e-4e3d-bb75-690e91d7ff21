/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'polymarket-dark': '#1a2332',
        'polymarket-darker': '#0f1419',
        'polymarket-blue': '#3b82f6',
        'polymarket-green': '#10b981',
        'polymarket-red': '#ef4444',
        'polymarket-gray': '#6b7280',
        'polymarket-light-gray': '#9ca3af',
        'card-bg': '#1e293b',
        'card-border': '#334155',
        'text-primary': '#f8fafc',
        'text-secondary': '#cbd5e1',
        'text-muted': '#64748b'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem'
      }
    },
  },
  plugins: [],
}