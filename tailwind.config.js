/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jinkasan: {
          red: '#DD442E',     // Rouge principal : CTA, titres, badges d'urgence
          'red-hover': '#C73C29', // Hover des CTA primaires (-10% luminosité)
          purple: '#512373',  // Secondaire - grands aplats décoratifs uniquement
          yellow: '#FACE31',  // Accent alerte douce, information, ruban "Restant"
          green: '#4B9C5B',   // Accent succès, progression, barres complétion
          gray: '#1A1A1A',    // Texte principal
          'gray-light': '#F5F5F5', // Fonds neutres, séparateurs
        },
        'jinkasan-red': '#DD442E',    // Rouge principal
        'jinkasan-green': '#4B9C5B',   // Succès/progression
        'jinkasan-yellow': '#FACE31', // Alerte douce/information
        'jinkasan-secondary': '#512373' // Aplats décoratifs uniquement
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      animation: {
        'shine': 'shine 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'gradient-x': 'gradientMove 8s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      backgroundImage: {
        'faso-pattern': "url('/src/assets/patterns/faso-pattern.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'size-200': '200% 100%',
      },
    },
  },
  plugins: [],
}
