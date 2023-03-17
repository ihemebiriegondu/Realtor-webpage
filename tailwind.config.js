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
        'primary': '#EB6753',
        'secondaryBlack':'#181A20'
      },
      screens: {
        'xs': '425px',
      },
      transitionProperty: {
        multiple: "width , height , backgroundColor , border-radius"
      },
      fontSize: {
        'medium': '15px',
        'small': '13px'
      },
    },
  },
  plugins: [],
}
