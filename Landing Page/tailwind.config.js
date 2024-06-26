/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
      },
      fontFamily: {
        'kunal': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

