<template>
    <div>
        <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
        <div class="h-24 dark:bg-dark-mode"></div>

        <div class="dark:bg-dark-mode w-full flex justify-center h-screen flex-col lg:flex-row">

            <div class="lg:w-1/2 w-full flex items-center justify-center flex-col text-center p-5">
                <h2 v-if="text.title" data-aos="fade-right" class="dark:text-white text-3xl font-bold">{{ text.title }}</h2>
                <p v-if="text.label" data-aos="fade-right" data-aos-delay="300" class="dark:text-white mt-5">{{ text.label }}</p>
            </div>
            <div class="lg:w-1/2 w-full flex justify-center items-center">
                <img v-if="img" :src="img" alt="3D model">
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
            scrollEventFormule: null,
            touchEventFormule: null,
            mouseY: 0,
            text: {
                title: false,
                label: false
            }
        };
    },
    mounted() {
        this.mount3D();
        this.scrollEventFormule = document.addEventListener("wheel", this.animateFormule, { passive: false });
        this.touchEventFormule = document.addEventListener("touchmove", this.animateFormulePhone, { passive: false });
    },
    unmounted(){
      document.removeEventListener("wheel", this.scrollEventFormule);
      document.removeEventListener("touchmove", this.touchEventFormule);
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
        },
        animateFormulePhone(event){
            const y = event.originalEvent.touches[0].clientY;
            if(this.mouseY - y < 0) this.animateFormule(Object.assign(event, { deltaY: 100 }));
            else this.animateFormule(Object.assign(event, { deltaY: -100 }));

            this.mouseY = y;
        },
        animateFormule(event){
            const scroll = window.scrollY ? window.scrollY : document.body.scrollTop;
            const delta = event.deltaY;

            const countValid = this.count > 0 && this.count < this.images.length-1;

            if(delta > 0 && this.count < this.images.length-1) this.count++;
            else if(this.count > 1) this.count--;

            if(countValid && (scroll == 0 || scroll < delta)) {
                this.img = this.images[this.count];
                event.preventDefault();

                const text = project.text.find(e => e.imageCount == this.count);

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

<style>

</style>