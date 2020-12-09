const tailwindcss = require('tailwindcss');
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            serif: ['Castoro', ...defaultTheme.fontFamily.serif]
        },
    },
    plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')]
  }