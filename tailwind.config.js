
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
  './src/**/*.{js,jsx,ts,tsx}' //esto también es una forma de englobar subdirectorios
  ],
  theme:
   {


  extend: {
    fontFamily: {
      'sans': ['Poppins'],
    },
    colors:{
      primary:"#222"
    },
    backgroundImage: {
      'background': "url('../src/assets/background.png')",
      
    }
  }
  },
  variants: {},
  plugins: []
 }