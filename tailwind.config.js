/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./index.html",
    "./listing.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EB6753'
      },
    },
  },
  plugins: [],
}
