module.exports = {
  mode: 'jit',
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'tb': '840px',
        'nesthub': '1030px',
        'portrait': {'raw': '(orientation: portrait)'}, 
        'landscape': {'raw': '(orientation: landscape)'}
      },
      colors: {
        "dark-mode": "#121212",
        "dark-mode-2": "#1B1A1A",
        "overlay": "#12121290",
        "overlay-2": "#121212c0"
      },
      backgroundSize: {
        'screen': '100% 100vh'
      }
    },
  },
  variants: {
    opacity: ['disabled', 'group-hover'],
  },
  plugins: [],
}