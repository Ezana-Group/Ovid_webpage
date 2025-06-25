/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  important: false,
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#00B4D8',
          600: '#0284c7',
          700: '#0369a1',
          900: '#1D2D50',
        },
        accent: {
          blue: '#00B4D8',
          dark: '#1B1B1B',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(40px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-40px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeInRight: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(40px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      }
    },
  },
  plugins: [],
} 