/** @type {import('tailwindcss').Config} */
module.exports = {
content: ['./*.html'],
  theme: {
    screens: {
        mobile: '375px',
        desktop: '1440px'
    },
    colors: {
        white: 'hsl(0, 0%, 100%)',
        lightGray: 'hsl(212, 45%, 89%)',
        grayishBlue: 'hsl(220, 15%, 55%)',
        darkBlue: 'hsl(218, 44%, 22%)'
    },
    fontFamily: {
        'primary': ['Outfit', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

