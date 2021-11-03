module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  theme: {
    colors: {
      terminalgreen: '#39ff14',
    },
    fontFamily: {
      mono: ['SF Mono', 'mono'],
      display: ['Vampire Wars', 'display'],
    },
  },
  plugins: [],
}
