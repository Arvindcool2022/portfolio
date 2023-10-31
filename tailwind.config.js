/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        DMsans: "'DM sans',san-serif"
      },
      backgroundColor: {
        primary: '#0c0c1d'
      },
      textColor: {
        primary: 'lightgray'
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
