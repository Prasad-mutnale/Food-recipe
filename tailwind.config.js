/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'#FF6363',
        mamm:'yellow',
        
        secondary:{
          100:'#E2E2D5',
          200:'#888883'
        }

      },
      fontFamily:{
        f1:['Poppins' ],
      },

    },
  },
  plugins: [],
}
