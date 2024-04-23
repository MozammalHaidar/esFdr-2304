/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      maxWidth:{
        container:"1320px",
      },
      fontFamily:{
        poppins:["Poppins",'sans-serif'],
        montserrat:["Montserrat",'sans-serif'],
      },
      colors:{
        deepGreen:"#03312e",
        lightRed:"#250902",
        lightWhite:"#e4f0d0",
        lightOrange:"#ffe6a7",
        lightPink:"#fdfcdc"

      }
    },
  },
  plugins: [],
}

