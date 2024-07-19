/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'fade-in': 'fadeIn 2s ease-in forwards',
        'bounce-in': 'bounceIn 1s ease-in forwards',
        'color-change': 'colorChange 3s linear infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        bounceIn: {
          '0%, 20%, 40%, 60%, 80%, 100%': {
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '0%': {
            opacity: 0,
            transform: 'scale(0.3)'
          },
          '20%': {
            opacity: 1,
            transform: 'scale(1.1)'
          },
          '40%': {
            transform: 'scale(0.9)'
          },
          '60%': {
            transform: 'scale(1.03)'
          },
          '80%': {
            transform: 'scale(0.97)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        colorChange: {
          '0%, 100%': { color: '#1e3a8a' },
          '25%': { color: '#ea580c' },
          '50%': { color: '#6b21a8' },
          '75%': { color: '#10b981' }
        }
      },
      colors: {
        'brand-blue': '#1e3a8a',
        'brand-green': '#10b981',
        'brand-purple': '#6b21a8',
        'brand-orange': '#ea580c'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
