/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
  './src/**/*.{js,jsx,ts,tsx}' //esto también es una forma de englobar subdirectorios
  ],
  theme:
   {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  extend: {
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