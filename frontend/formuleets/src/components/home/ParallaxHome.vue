<template>
    <section
        class="flex justify-center items-center flex-col flex-wrap w-full min-h-screen relative overflow-hidden"
    >
        <!-- IMAGE PARALLAX -->
        <div class="flex justify-center items-center overflow-hidden h-48 lg:h-full">
            <img
                v-if="!isMobile"
                :src="item.image"
                class="w-full"
                alt="Image"
                parallaxy-y
                parallaxy-scale="1"
                :parallaxy-speed-y="0.65"
                parallaxy-overflow-y
            />
             <img
                v-if="isMobile"
                :src="item.image"
                class="w-full"
                alt="Image"
                parallaxy-y
                parallaxy-scale="1.4"
                :parallaxy-speed-y="0.15"
            />
        </div>

        <!-- TEXT CONTENT -->
        <article
            class="h-full lg:w-2/5 text-justify p-10 lg:absolute dark:bg-dark-mode bg-white border-black dark:border-white flex justify-center flex-col top-0"
            :class="position == 'right' != 0 ? 'right-0 lg:border-l' : 'left-0 lg:border-r'"
        >
            <h1
                class="text-red-600 text-4xl m-3 font-bold italic tracking-wider text-shadow z-10 uppercase text-center"
                data-aos="zoom-in"
                :class="position == 'right' != 0 ? 'lg:text-right' : 'lg:text-left'"
            >{{ $t(item.text + '.title') }}</h1>

            <p
                class="mt-10 mb-10 text-justify text-black dark:text-white text-lg"
                v-html="$t(item.text + '.text')"
                :data-aos="position == 'right' ? 'fade-right' : 'fade-left'"
            ></p>
        </article>
    </section>
</template>
<script>
export default {
    name: "ParallaxHome",
    props: {
        isMobile: {
            type: Boolean
        },
        item: {
            required: true
        },
        position: {
            required: true,
            type: String
        }
    }
}
</script>