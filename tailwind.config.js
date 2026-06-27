/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4956A',
          dark: '#C45D3E',
          light: '#E8B89A',
        },
        secondary: '#C45D3E',
        background: '#FFF8F3',
        accent: '#2D2016',
        warm: {
          50: '#FFF8F3',
          100: '#FFF0E6',
          200: '#FFE4CC',
          300: '#FFD4AD',
          400: '#FFC08A',
          500: '#D4956A',
          600: '#B87D54',
          700: '#9A6440',
          800: '#7C4D30',
          900: '#2D2016',
        },
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
        'container': '20px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(45, 32, 22, 0.08)',
        'card-hover': '0 8px 30px rgba(45, 32, 22, 0.15)',
        'btn': '0 2px 8px rgba(45, 32, 22, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
