/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        DMsans: "'DM sans',san-serif"
      },
      animation: {
        progress: 'progress 3s ease-in-out forwards',
        progressOne: 'progress 3s ease-in-out 100ms forwards',
        progressTwo: 'progress 3s ease-in-out 200ms forwards',
        progressThree: 'progress 3s ease-in-out 300ms forwards',
        progressFour: 'progress 3s ease-in-out 400ms forwards'
        // Add more custom animations here if needed
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
