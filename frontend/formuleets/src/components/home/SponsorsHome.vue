<template>
    <section
        class="w-full flex-col flex justify-center items-center h-screen p-10 bg-cover bg-center bg-fixed"
        lazy-background="/static/home/fond2.svg"
    >
        <h1
            class="text-red-600 text-4xl lg:text-5xl m-10 mb-20 font-bold italic tracking-wider text-shadow z-10 uppercase"
            data-aos="zoom-in"
        >{{ $t("message.header.sponsors") }}</h1>

        <div
            class="w-full flex h-48"
            style="margin-left: -100vh"
            parallaxy-x
            parallaxy-overflow-x
            parallaxy-speed-x="0.65"
            parallaxy-inverted-x
            parallaxy-scale="1"
        >
            <template v-for="sponsor of sponsors.diamond" :key="sponsor.src">
                <img :src="sponsor.imageSrc" alt="Sponsor" class="h-full" />
            </template>
        </div>

        <div
            class="w-full flex h-48"
            style="margin-left: -100vh"
            parallaxy-x
            parallaxy-overflow-x
            parallaxy-speed-x="0.65"
            parallaxy-scale="1"
        >
            <template v-for="sponsor of otherDiamond" :key="sponsor.imageSrc">
                <img :src="sponsor.imageSrc" alt="Sponsor" class="h-full" />
            </template>
        </div>
    </section>
</template>

<script>
export default {
    name: "SponsorsHome",
    props: {
        sponsors: {
            required: true
        }
    },
    computed: {
        otherDiamond() {
            const list = JSON.parse(JSON.stringify(this.sponsors.diamond));
            const half = Math.ceil(list.length / 2);
            const firstHalf = list.splice(0, half);
            const secondHalf = list.splice(-half);
            return secondHalf.concat(firstHalf);
        },
    }
}
</script>