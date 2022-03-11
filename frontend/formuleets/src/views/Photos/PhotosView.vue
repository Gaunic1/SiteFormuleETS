<template>
    <div class="h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover bg-fixed"
    lazy-background="/static/photos/fond.svg">

        <!-- GO BACK -->
        <div @click="$router.go(-1)"
        class="cursor-pointer flex justify-center items-center p-3 dark:text-white text-xl absolute left-5 top-10">
            <i class="fa-solid fa-door-open"></i>
            <span class="ml-2">{{ $t('message.other.back') }}</span>
        </div>

        <!-- SLIDE -->
        <swiper
            class="size"
            :slides-per-view="1"
            :navigation="true"
            :loop="true"
            :autoplay="{
                delay: 7000,
                disableOnInteraction: false,
            }"
            :pagination="{
                clickable: true,
            }"
            :modules="modules">
            <swiper-slide v-for="img of db.images" :key="img.id">

                <!-- IMAGE -->
                <div class="bg-cover bg-center w-full h-full lazy-skeleton" 
                :lazy-background="img.url">
                </div>

            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import googleDriveMixin from './google-drive-mixin'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.css";

export default {
    name: "Album",
    props: ["id"],
    components: {
      Swiper,
      SwiperSlide,
    },
    mixins: [googleDriveMixin],
    async mounted(){
        await this.getDb(this.id);
        if(this.db.images.length == 0){
            this.$router.go(-1);
        }
    },
    setup() {
      return {
        modules: [Pagination, Autoplay, Navigation],
      };
    },
}
</script>

<style scope>
.size{
    width: 60rem;
    height: 33rem;
    max-width: 100vw;
}

@media only screen and (max-width: 728px) {
  .size{
      height: 20rem;
  }
}

.swiper-pagination-bullet{
    background-color: #ffffff;
}

.swiper-pagination-bullet-active {
  background-color: red!important;
}

.swiper-button-next,
.swiper-button-prev {
    color: red!important;
    fill: red !important;
    stroke: red !important;
}
</style>