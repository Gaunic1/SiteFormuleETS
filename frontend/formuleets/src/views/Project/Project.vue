<template>
    <div :style='`height: ${height}`'>
        <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
        <div class="h-16 dark:bg-dark-mode flex items-end">
             <hr class="bg-red-500 border border-red-500 ml-5 mr-5 w-full opacity-50">
        </div>

        <div class="dark:bg-dark-mode h-screen sticky top-0 w-full flex justify-center flex-col lg:flex-row bg-cover bg-center overflow-x-hidden" 
        :lazy-background="require('../../assets/project/curve_line.svg')">

            <!-- TEXT -->
            <div class="flex-initial lg:w-1/2 lg:h-full h-1/2 w-full flex items-center justify-center flex-col text-center p-5">
                <h2 v-if="text.title" class="text-3xl font-bold text-red-500 uppercase slide-left">{{ text.title }}</h2>
                <p v-if="text.label" class="dark:text-white mt-5 slide-left delay-300">{{ text.label }}</p>
                <i v-if="this.count == 1" class="fas fa-chevron-down dark:text-white mt-5 fade-arrow"></i>
                <i v-if="this.count == 1" class="fas fa-chevron-down dark:text-white -mt-2 fade-arrow"></i>
            </div>

            <!-- FORMULE -->
            <div class="lg:w-1/2 lg:h-full w-full flex justify-center items-center">
                <img id="3d-model" lazy-animation="zoomin" v-if="img" :src="img" alt="3D model">
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
            height: "100vh",
            imageHeight: 0,
            step: 0,

            speed: 1,

            text: {
                title: "Animation dynamique",
                label: "Faites défiler vers le bas pour lancer l'animation et voir notre protoype en 3D."
            }
        };
    },
    mounted() {
        this.speed = project.speed;
        this.mount3D();
        this.preloadImage();
        document.addEventListener("scroll", this.animateFormule, { passive: false });
    },
    beforeUnmount(){
      document.removeEventListener("scroll", this.animateFormule, { passive: false });
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
        preloadImage(){
            const lst = [];
            let loaded = false;
            for(const img of this.images){
                const load = new Image();
                load.src = img;
                load.onload = () => {
                    if(loaded) return;

                    const height = document.getElementById('3d-model').offsetHeight;

                    if(!height || height == 0) return;

                    const calc = (height/this.speed)*(this.images.length-1);
                    const screenDivide = window.innerHeight/2;
                    this.height = (calc + screenDivide) + "px";
                    this.imageHeight = height;

                    loaded = true;
                }
                lst.push(load);
            }
        },
        animateFormule(){
            const scroll = window.scrollY ? window.scrollY : document.body.scrollTop;

            const delta = -(this.mouseY - scroll);

            this.step += delta;

            const ancient = JSON.parse(JSON.stringify(this.step));

            this.step %= (this.imageHeight/this.speed);

            this.mouseY = scroll;

            const countValid = this.count > 0 && this.count < this.images.length-1;

            if(ancient != this.step && delta > 0 && this.count < this.images.length-1) this.count++;
            else if(this.count > 1 && ancient != this.step) this.count--;

            if(countValid ) {
                this.img = this.images[this.count];

                //text handler
                let text = project.text.find(e => e.imageCount == this.count);

                const index = project.text.find(e => this.text.title == e.title && this.text.label == e.label);

                if(index && this.count < index.imageCount) {
                    let i = project.text.indexOf(index);
                    if(i > 0) text = project.text[i-1];
                }

                if(text && (text.title != this.text.title || text.label != this.text.label)) {
                    this.text.title = false;
                    this.text.label = false;

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