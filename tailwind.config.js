module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Livvic', 'sans'],
      },
      colors: {
        gray: {
          50: '#fafafa',
          100: '#f7f7fb', // tl light gray
          700: '#464646', // tl dark gray
        },
        pink: {
          50: '#fdf9f9',
          100: '#fdeef4',
          200: '#fbcde9',
          300: '#fba1d7',
          400: '#fc67b6',
          500: '#fd3d92',
          600: '#fa1e5a', // tl pink
          700: '#e01b54',
          800: '#b61740',
          900: '#901432',
        },
        blue: {
          50: '#f6fbfd',
          100: '#e7f7fd',
          200: '#c3e7fb',
          300: '#9bd0fb',
          400: '#64a5fa',
          500: '#3477fa',
          600: '#1756e2', // tl blue
          700: '#1e41de',
          800: '#1932ac',
          900: '#142984',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
