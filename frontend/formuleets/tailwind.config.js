module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-mode": "#121212",
        "dark-mode-2": "#121212f8"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}