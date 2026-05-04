export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          dark: '#000000',
          red: '#FF1F1F',
          redDark: '#8B0000',
          white: '#FFFFFF',
          gray: '#A0A0A0',
          tan: '#FF1F1F', // Mapping old keys to new colors for compatibility
          gold: '#FFFFFF',
          cream: '#FFFFFF',
          yellow: '#FF1F1F',
          green: '#40C057'
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        display: ['Barlow', 'Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
