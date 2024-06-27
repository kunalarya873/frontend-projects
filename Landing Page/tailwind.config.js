/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3238f2",
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body':['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

