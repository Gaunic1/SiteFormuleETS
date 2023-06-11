<template>
  <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
  <div class="h-24 lg:hidden"></div>

  <div
    class="min-h-screen w-full flex flex-col pl-5 justify-center bg-center bg-fixed bg-cover bg-no-repeat dark:bg-dark-mode bg-white"
    lazy-background="/static/videos/contour.svg"
  >
    <h2
      data-aos="fade-right"
      class="dark:text-white text-3xl uppercase font-bold border-b-4 border-red-900 w-20"
    >
      {{ $t("message.videos.title") }}
    </h2>

    <!-- <hr data-aos="zoom-in" class="mt-5 border bg-red-900 border-red-900"> -->

    <section class="w-full relative h-auto">
      <!-- ARROWS -->

      <!-- LEFT -->
      <div
        @click="slideLeft"
        v-if="showLeft"
        class="w-20 h-full absolute left-0 top-0 bg-dark-mode dark:bg-white z-10 lg:flex hidden justify-center items-center cursor-pointer opacity-80"
      >
        <i class="text-white dark:text-black fas fa-chevron-left text-5xl"></i>
      </div>

      <!-- RIGHT -->
      <div
        @click="slideRight"
        v-if="showRight"
        class="w-20 h-full absolute right-0 top-0 bg-dark-mode dark:bg-white z-10 lg:flex hidden justify-center items-center cursor-pointer opacity-80"
      >
        <i class="text-white dark:text-black fas fa-chevron-right text-5xl"></i>
      </div>

      <div
        ref="slider"
        v-if="datas"
        class="w-auto overflow-x-hidden mt-5 relative lg:whitespace-nowrap"
      >
        <!-- VIDEOS -->
        <template v-for="item of datas" :key="item.pubDate">
          <article class="mr-5 pt-5 pb-5 lg:inline-block">
            <div
              class="uppercase text-lg dark:text-white mb-3 relative whitespace-nowrap flex"
            >
              <div class="w-2/3 font-thin truncate">{{ item.title }}</div>
              <span class="absolute right-0 font-thin w-1/3 text-right"
                >&nbsp; ({{ item.pubDate.split(" ")[0] }})</span
              >
            </div>

            <!-- width: 560, height: 315, diff: 245 -->
            <iframe
              :width="widthVideo"
              :height="widthVideo - 245"
              :class="isMobile ? 'w-full' : ''"
              :lazy-embed="createEmbed(item.link)"
              :lazy-poster="item.thumbnail"
              :title="item.title"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </article>
        </template>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import ytb from "./ytb";
import phoneMixin from "../../mixins/phone-mixin";

export default {
  name: "VideosPage",
  mixins: [phoneMixin],
  data() {
    return {
      datas: null,
      showRight: true,
      showLeft: false,
      widthVideo: 675,
    };
  },
  watch: {
    actualSize() {
      if (this.isMobile) this.widthVideo = document.body.offsetWidth + 75;
      else this.widthVideo = 675;
    },
  },
  async mounted() {
    const ytbDatas = localStorage.ybtDatas;

    if (ytbDatas) {
      console.log("[INFO] YouTube Datas already loaded !");
      this.datas = JSON.parse(ytbDatas);
      return;
    }

    const response = await fetch(ytb.url + ytb.chanelId);
    const json = await response.json();
    this.datas = json.items;
    localStorage.ybtDatas = JSON.stringify(json.items);
  },
  methods: {
    createEmbed(url = "") {
      const id = url.split("v=")[1];
      return "https://www.youtube.com/embed/" + id + "?autoplay=1";
    },
    showRightF(delta = 0, width = 0) {
      this.showRight = delta < width;
    },
    showLeftF(delta = 0) {
      this.showLeft = delta > 0;
    },
    scroll(delta = 0) {
      const elem = this.$ref("slider");

      let left = document.body.offsetWidth;
      let scroll = left * delta;
      //right
      if (elem.scrollLeft + scroll * 2 + scroll / 2 >= elem.scrollWidth) {
        scroll = elem.scrollWidth + 10;
      }
      //left
      if (elem.scrollLeft + scroll * 2 - scroll / 2 <= 0) {
        scroll = -elem.scrollWidth - 10;
      }
      elem.scrollBy({
        left: scroll,
        behavior: "smooth",
      });
      this.showLeftF(elem.scrollLeft + scroll);
      this.showRightF(elem.scrollLeft + scroll, elem.scrollWidth);
    },
    slideRight() {
      this.scroll(1);
    },
    slideLeft() {
      this.scroll(-1);
    },
  },
};
</script>
