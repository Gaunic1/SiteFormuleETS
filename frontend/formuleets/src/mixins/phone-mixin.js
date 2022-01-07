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
            isMobile: false,
        }
    },
    methods: {
        detectMobile(){
            this.isMobile = window.matchMedia("only screen and (max-width: 760px)").matches
        },
    }
}

export default phoneMixin;