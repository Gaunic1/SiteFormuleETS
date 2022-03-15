module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'tb': '840px',
      },
      colors: {
        "dark-mode": "#121212",
        "dark-mode-2": "#1B1A1A",
        "overlay": "#12121290",
        "overlay-2": "#121212c0"
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled'])
  },
  plugins: [],
}