/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        crimson : '#dc2626',
        dark: '#0f172a',
        'secondary' : '#64738b',
      },
      screens: {
        "2xl" : '1320px',
      },
    },
  },
  plugins: [],
}
