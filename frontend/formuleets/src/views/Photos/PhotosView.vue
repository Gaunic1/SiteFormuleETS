<template>
  <div
    class="h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover bg-fixed"
    lazy-background="/static/photos/fond.svg"
  >
    <!-- GO BACK -->
    <div
      @click="$router.go(-1)"
      class="cursor-pointer flex justify-center items-center p-3 animate-pulse dark:text-white absolute left-2 top-0 nesthub:top-10 text-sm md:text-xl"
    >
      <i class="fa-solid fa-door-open"></i>
      <span class="ml-2">{{ $t("message.other.back") }}</span>
    </div>

    <!-- SLIDE -->
    <swiper
      class="size"
      :slides-per-view="1"
      :navigation="true"
      :loop="true"
      :initialSlide="1"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
    >
      <swiper-slide v-for="img of db" :key="img.id">
        <!-- IMAGE -->
        <div
          class="bg-cover bg-center w-full h-full lazy-skeleton"
          :lazy-background="img.url"
        ></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { useAlbumsStore } from "../../store/AlbumsStore";

// Import Swiper Vue.js components
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  name: "AlbumPage",
  props: ["id"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    const store = useAlbumsStore();

    return {
      store: store,
      db: [],
    };
  },
  async mounted() {
    await this.store.getAlbum(this.id);

    this.db = this.store.getImagesByFolderId(this.id);

    if (this.db.length == 0) {
      this.$router.go(-1);
    }
  },
  setup() {
    return {
      modules: [Pagination, Autoplay, Navigation],
    };
  },
};
</script>

<style scope>
.size {
  width: 60rem;
  height: 33rem;
  max-width: 100vw;
}

@media only screen and (max-width: 728px) {
  .size {
    height: 20rem;
  }
}

@media screen and (orientation: landscape) and (max-width: 1025px) {
  .size {
    height: 80vh !important;
    width: 120vh !important;
  }
}

.swiper-pagination-bullet {
  background-color: #ffffff;
}

.swiper-pagination-bullet-active {
  background-color: red !important;
}

.swiper-button-next,
.swiper-button-prev {
  color: red !important;
  fill: red !important;
  stroke: red !important;
}
</style>
