var colors = require('tailwindcss/colors')

module.exports = {
   purge: [
     './resources/**/*.blade.php',
     './resources/**/*.js',
     './resources/**/*.vue',
   ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: colors
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
