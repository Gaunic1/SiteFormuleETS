const phoneMixin = {
  mounted() {
    this.detectMobile();
    window.addEventListener("resize", this.detectMobile);
    window.addEventListener("orientationchange", this.detectMobile);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.detectMobile);
    window.removeEventListener("orientationchange", this.detectMobile);
  },
  data() {
    return {
      mobileSize: "1024px",
      isMobile: false,
      actualSize: false,
    };
  },
  methods: {
    detectMobile() {
      this.isMobile = window.matchMedia(
        "only screen and (max-width: " + this.mobileSize + ")"
      ).matches;
      this.actualSize = document.body.offsetWidth;
    },
  },
};

export default phoneMixin;
