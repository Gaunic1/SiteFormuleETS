<template>
    <div class="h-screen flex justify-center items-center">
        <swiper
            class="w-full h-screen-c m-20 mySwiper"
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
import { Pagination, Autoplay } from "swiper";
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
        modules: [Pagination, Autoplay],
      };
    },
}
</script>

<style scope>
.h-screen-c{
    height: calc(100vh - 10rem);
}

@media only screen and (max-width: 728px) {
  .h-screen-c{
      margin: 0!important;
      height: 80vw;
  }
}

.swiper-pagination-bullet-active {
  background-color: red;
}

.swiper-button-next,
.swiper-button-prev {
    color: red!important;
    fill: red !important;
    stroke: red !important;
}
</style>