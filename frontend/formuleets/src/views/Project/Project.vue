<template>
    <div>
        <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
        <div class="h-16 dark:bg-dark-mode flex items-end">
             <hr class="bg-red-500 border border-red-500 ml-5 mr-5 w-full opacity-50">
        </div>

        <div class="dark:bg-dark-mode w-full flex justify-center h-screen flex-col lg:flex-row bg-cover bg-center overflow-y-hidden" 
        :lazy-background="require('../../assets/project/curve_line.svg')">

            <div class="lg:w-1/2 w-full flex items-center justify-center flex-col text-center p-5">
                <h2 v-if="text.title" data-aos="fade-right" class="text-3xl font-bold text-red-500 uppercase">{{ text.title }}</h2>
                <p v-if="text.label" data-aos="fade-right" data-aos-delay="300" class="dark:text-white mt-5">{{ text.label }}</p>
                <i v-if="this.count == 1" class="fas fa-chevron-down dark:text-white mt-5 fade-arrow"></i>
                <i v-if="this.count == 1" class="fas fa-chevron-down dark:text-white -mt-2 fade-arrow"></i>
            </div>
            <div class="lg:w-1/2 w-full flex justify-center items-center">
                <img data-aos="zoom-in" v-if="img" :src="img" alt="3D model">
            </div>

        </div>
    </div>
</template>

<script>
import project from './project';

export default {
    name: "Project",
    data() {
        return {
            images: [],
            count: 1,
            img: null,
            mouseY: 0,
            countScroll: 0,
            phoneFormuleSpeed: 3,
            isPhone: false,
            text: {
                title: "Animation dynamique",
                label: "Faites défiler vers le bas pour lancer l'animation et voir notre protoype en 3D."
            }
        };
    },
    mounted() {
        this.mount3D();
        document.addEventListener("wheel", this.animateFormule, { passive: false });
        document.addEventListener("touchmove", this.animateFormule, { passive: false });
        // document.addEventListener("touchstart", this.animateFormule, { passive: false });
        // document.addEventListener("touchend", this.animateFormule, { passive: false });
    },
    beforeUnmount(){
      document.removeEventListener("wheel", this.animateFormule, { passive: false });
      document.removeEventListener("touchmove", this.animateFormule, { passive: false });
    //   document.removeEventListener("touchstart", this.animateFormule, { passive: false });
    //   document.removeEventListener("touchend", this.animateFormule, { passive: false });
    },
    methods: {
        mount3D() {
            const dir = project.images.directory;
            const ext = project.images.extension;
            for (let i = 0; i < project.images.nbImgs; ++i) {
                const img = (dir + (i+1) + "." + ext);
                this.images.push(img);
            }
            this.img = this.images[0];
            project.text.push({
                title: this.text.title,
                label: this.text.label,
                imageCount: 1
            });
        },
        animateFormule(event){
            let delta = 0;

            //Phone support
            try{
                const evt = (typeof event.originalEvent === 'undefined') ? event : event.originalEvent;
                const touch = evt.touches[0] || evt.changedTouches[0];
                const y = touch.pageY;

                const diff = this.mouseY - y;

                if(diff < 0) delta = -100;
                else delta = 100;

                this.mouseY = y;

                this.countScroll++;

                this.isPhone = true;

                if(this.count < this.images.length-1 && this.countScroll < this.phoneFormuleSpeed){
                    event.preventDefault();
                    return;
                } else {
                    this.countScroll = 0;
                }
            } catch(e) {
                delta = event.deltaY;
            }
            //END PHONE

            const scroll = window.scrollY ? window.scrollY : document.body.scrollTop;

            const countValid = this.count > 0 && this.count < this.images.length-1;

            if(delta > 0 && this.count < this.images.length-1) this.count++;
            else if(this.count > 1) this.count--;

            if(countValid && (scroll == 0 || scroll < delta)) {
                this.img = this.images[this.count];
                event.preventDefault();

                let text = project.text.find(e => e.imageCount == this.count);

                const index = project.text.find(e => this.text.title == e.title && this.text.label == e.label);

                if(index && this.count < index.imageCount) {
                    console.log("test")
                    let i = project.text.indexOf(index);
                    if(i > 0) text = project.text[i-1];
                }

                if(text && (text.title != this.text.title || text.label != this.text.label)) {
                    this.text.title = this.isPhone ? " " : false;
                    this.text.label = this.isPhone ? " " : false;

                    setTimeout(() => {
                        this.text.title = text.title;
                        this.text.label = text.label;
                    }, 200)
                }
            }
        },
    },
}
</script>

<style scoped>
.fade-arrow{
    opacity: 0;
    animation: fade-arrow 2s infinite linear;
    animation-delay: 700ms;
}

@keyframes fade-arrow {
    0%{
        opacity: 0.1;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0.1;
    }
}
</style>