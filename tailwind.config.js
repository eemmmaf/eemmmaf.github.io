/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        'dark-pink' : "#c2185b",
        'light-pink' : "#de90b1",
        'dark-purple' : "#59034b",
        'grey' : "#e5e0e0",
        'dark-color' : '#2e2c2e' 
      },
      container : {
        center: true
      },
    },
  },
  plugins: [require('@tailwindcss/forms')]
}

