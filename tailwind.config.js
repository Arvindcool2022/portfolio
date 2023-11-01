/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1254px' }, // => @media (max-width: 1254px) { ... }
      xl: { max: '1140px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '475px' }
    },
    extend: {
      fontFamily: {
        DMsans: "'DM sans',san-serif"
      },
      backgroundColor: {
        primary: '#0c0c1d',
        secondary: '#111132'
      },
      textColor: {
        primary: 'lightgray',
        secondary: '#0c0c1d'
      },
      borderColor: {
        primary: '#0c0c1d',
        secondary: 'lightgray'
      },
      animation: {
        progress: 'progress 3s ease-in-out forwards'
      },
      keyframes: {
        progress: {
          '0%': {
            width: '0',
            opacity: '1'
          },
          '100%': {
            opacity: '1'
          }
          // Define more keyframes here for 'progress' or other animations
        }
        // Add more custom keyframes here if needed
      }
    }
  },
  plugins: []
};
