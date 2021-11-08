module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  theme: {
    colors: {
      terminalgreen: '#39ff14',
      white: '#FFF',
      black: '#000',
      transparent: 'transparent',
      red: '#F00',
    },
    fontFamily: {
      mono: ['SF Mono', 'mono'],
      display: ['Vampire Wars', 'display'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
