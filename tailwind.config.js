/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
  './src/**/*.{js,jsx,ts,tsx}' //esto también es una forma de englobar subdirectorios
  ],
  theme:
   {
   /* screens: {
      'sm': {'min': '640px', 'max': '767px'},
      

      'md': {'min': '768px', 'max': '1023px'},
     

      'lg': {'min': '1024px', 'max': '1279px'},
      

      'xl': {'min': '1280px', 'max': '1535px'},
       }

      '2xl': {'min': '1536px'},
      
    },*/
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