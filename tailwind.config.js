module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'blue-150':'#809BCE',
        'c-green' : '#d6eadf',
        'b-green' : '#B8E0D2',
        'pink' : '#EAC4D5',
        'blue' : '#95B8D1',
        'blue-dark' : '#1887d6'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
