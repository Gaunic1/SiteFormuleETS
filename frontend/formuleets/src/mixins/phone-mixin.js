const phoneMixin = {
    mounted(){
        this.detectMobile();
        window.addEventListener('resize', this.detectMobile);
    },
    beforeUnmount(){
        window.removeEventListener('resize', this.detectMobile);
    },
    data(){
        return {
            mobileSize: "1024px",
            isMobile: false,
        }
    },
    methods: {
        detectMobile(){
            this.isMobile = window.matchMedia("only screen and (max-width: " + this.mobileSize + ")").matches
        },
    }
}

export default phoneMixin;