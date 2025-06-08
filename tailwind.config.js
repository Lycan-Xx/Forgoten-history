/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        copper: {
          DEFAULT: '#BB6B00',
          light: '#D68A26',
          dark: '#9A5700',
        },
        brown: {
          DEFAULT: '#312509',
          light: '#483714',
          dark: '#201805',
        },
        black: '#000000',
        glass: {
          light: 'rgba(255,255,255,0.1)',
          dark: 'rgba(0,0,0,0.1)',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626',
        },
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'sans': ['"Source Sans 3"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(49,37,9,0.5))',
        'card-gradient': 'linear-gradient(135deg, rgba(187,107,0,0.05), rgba(49,37,9,0.15))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};