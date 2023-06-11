export default {
  content: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        tb: "840px",
        nesthub: "1030px",
        portrait: { raw: "(orientation: portrait)" },
        landscape: { raw: "(orientation: landscape)" },
      },
      colors: {
        "white-opacity": "#ffffff41",
        "dark-mode": "#121212",
        "dark-mode-2": "#1B1A1A",
        overlay: "#12121290",
        "overlay-2": "#121212c0",
      },
      backgroundSize: {
        screen: "100% 100vh",
      },
      width: {
        "20rem": "20rem!important",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
    opacity: ["disabled", "group-hover"],
  },
  plugins: [],
};
