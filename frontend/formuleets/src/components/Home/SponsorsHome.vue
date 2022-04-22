<template>
    <section
        class="w-full flex-col flex justify-center items-center h-screen p-10 bg-cover bg-center"
        lazy-background="/static/home/fond2.svg"
    >
        <h1
            class="text-red-600 text-4xl lg:text-5xl m-10 mb-20 font-bold italic tracking-wider text-shadow z-10 uppercase"
            data-aos="zoom-in"
        >{{ $t("message.header.sponsors") }}</h1>

        <div
            class="w-full flex h-36"
            style="margin-left: -100vh"
            parallaxy-x
            parallaxy-overflow-x
            parallaxy-speed-x="0.65"
            parallaxy-inverted-x
            parallaxy-scale="1"
        >
            <template v-for="sponsor of sponsors.diamond" :key="sponsor.src">
                <img :src="isDarModeActually ? 
                (sponsor.whiteVersion ? sponsor.whiteVersion : sponsor.imageSrc) 
                : sponsor.imageSrc" alt="Sponsor" class="h-full" />
            </template>
        </div>

        <div
            class="w-full flex h-44"
            style="margin-left: -100vh"
            parallaxy-x
            parallaxy-overflow-x
            parallaxy-speed-x="0.65"
            parallaxy-scale="1"
        >
            <template v-for="sponsor of otherDiamond" :key="sponsor.imageSrc">
                <img :src="isDarModeActually ? 
                (sponsor.whiteVersion ? sponsor.whiteVersion : sponsor.imageSrc) 
                : sponsor.imageSrc" alt="Sponsor" class="h-full" />
            </template>
        </div>
    </section>
</template>

<script>
export default {
    name: "SponsorsHome",
    data(){
        return {
            darkModeEnabled: this.verifyDarkMode(),
            observer: null,
        }
    },
    props: {
        sponsors: {
            required: true
        }
    },
    beforeUnmount(){
        this.observer.disconnect();
    },
    mounted(){
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes") {
                    this.darkModeEnabled = this.verifyDarkMode();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true //configure it to listen to attribute changes
        });

        this.observer = observer;
    },
    computed: {
        isDarModeActually(){
            return this.darkModeEnabled;
        },
        otherDiamond() {
            const list = JSON.parse(JSON.stringify(this.sponsors.diamond));
            const half = Math.ceil(list.length / 2);
            const firstHalf = list.splice(0, half);
            const secondHalf = list.splice(-half);
            return secondHalf.concat(firstHalf);
        },
    },
    methods: {
        verifyDarkMode(){
            return document.documentElement.classList.contains('dark');
        }
    }
}
</script>