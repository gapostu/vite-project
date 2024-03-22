/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
};
