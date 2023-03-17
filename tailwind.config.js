/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./index.html",
    "./listings.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EB6753'
      },
      screens: {
        'xs': '425px'
      },
      transitionProperty: {
        multiple: "width , height , backgroundColor , border-radius"
      },
    },
  },
  plugins: [],
}
