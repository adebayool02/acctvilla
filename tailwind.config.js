/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
    },
    extend: {
      colors:{
        lightBlack : 'hsl(0,0%,60%)',
        lightGray : 'hsl(0,0%,70%)'
      }
    },
  },
  plugins: [],
}

