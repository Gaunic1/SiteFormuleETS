<template>
  <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
  <div class="h-24 lg:hidden"></div>

  <div class="lg:h-screen flex flex-col pl-5 justify-center bg-center bg-fixed bg-cover" 
  lazy-background="/static/videos/contour.svg">
      <h2 data-aos="fade-right" class="dark:text-white text-3xl uppercase font-bold border-b-4 border-red-900 w-20">
          {{ $t("message.videos.title") }}
      </h2>

      <!-- <hr data-aos="zoom-in" class="mt-5 border bg-red-900 border-red-900"> -->

      <div class="w-full relative h-auto">
        <!-- ARROWS -->

        <!-- LEFT -->
        <div @click="slideLeft" 
        v-if="showLeft" 
        class="w-20 h-full absolute left-0 top-0 bg-dark-mode dark:bg-white 
        z-10 lg:flex hidden justify-center items-center cursor-pointer opacity-80">
            <i class="text-white dark:text-black fas fa-chevron-left text-5xl"></i>
        </div>

        <!-- RIGHT -->
        <div @click="slideRight" 
        v-if="showRight" 
        class="w-20 h-full absolute right-0 top-0 bg-dark-mode dark:bg-white 
        z-10 lg:flex hidden justify-center items-center cursor-pointer opacity-80">
            <i class="text-white dark:text-black fas fa-chevron-right text-5xl"></i>
        </div>

        <div id="slider" v-if="datas" class="w-auto overflow-x-hidden mt-5 relative lg:whitespace-nowrap">

            <!-- VIDEOS -->
            <template v-for="item of datas" :key="item.pubDate">
                <div class="mr-5 pt-5 pb-5 lg:inline-block">
                    <div class="uppercase text-lg dark:text-white mb-3 relative whitespace-nowrap flex">
                        <div class="w-2/3 font-thin truncate">{{ item.title }}</div>
                        <span class="absolute right-0 font-thin w-1/3 text-right">&nbsp; ({{ item.pubDate.split(' ')[0] }})</span>
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
                    allowfullscreen></iframe>
                </div>
            </template>
        </div>
      </div>
  </div>
</template>

<script>
import ytb from "./ytb"
import phoneMixin from "../../mixins/phone-mixin";

export default {
    name: "Videos",
    mixins: [phoneMixin],
    data(){
        return {
            datas: null,
            showRight: true,
            showLeft: false,

            widthVideo: 675
        }
    },
    watch: {
        "actualSize"(){
            if(this.isMobile) this.widthVideo = document.body.offsetWidth + 75;
            else this.widthVideo = 675;
        }
    },
    async mounted(){
        const ytbDatas = localStorage.ybtDatas;

        if(ytbDatas){
            console.log('[INFO] YouTube Datas already loaded !');
            this.datas = JSON.parse(ytbDatas);
        } else {
            const response = await fetch(ytb.url + ytb.chanelId);
            const json = await response.json();
            // const json = {
            //     items: [{"title":"FORMULE ETS \u2013 D\u00c9VOILEMENT","pubDate":"2021-11-27 18:00:07","link":"https://www.youtube.com/watch?v=PO9Oi1HBHFY","guid":"yt:video:PO9Oi1HBHFY","author":"Formule ETS","thumbnail":"https://i1.ytimg.com/vi/PO9Oi1HBHFY/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/PO9Oi1HBHFY?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i1.ytimg.com/vi/PO9Oi1HBHFY/hqdefault.jpg"},"categories":[]},{"title":"FORMULE ETS - Throwback","pubDate":"2021-11-25 18:00:04","link":"https://www.youtube.com/watch?v=8ehP5H5UOMI","guid":"yt:video:8ehP5H5UOMI","author":"Formule ETS","thumbnail":"https://i1.ytimg.com/vi/8ehP5H5UOMI/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/8ehP5H5UOMI?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i1.ytimg.com/vi/8ehP5H5UOMI/hqdefault.jpg"},"categories":[]},{"title":"FORMULE ETS - RECRUTEMENT 2021","pubDate":"2021-09-21 16:30:05","link":"https://www.youtube.com/watch?v=rzqknx5Udt4","guid":"yt:video:rzqknx5Udt4","author":"Formule ETS","thumbnail":"https://i3.ytimg.com/vi/rzqknx5Udt4/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/rzqknx5Udt4?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i3.ytimg.com/vi/rzqknx5Udt4/hqdefault.jpg"},"categories":[]},{"title":"FORMULE ETS - RECRUITMENT 2020","pubDate":"2020-10-24 18:42:03","link":"https://www.youtube.com/watch?v=kvjGoGLBqao","guid":"yt:video:kvjGoGLBqao","author":"Formule ETS","thumbnail":"https://i4.ytimg.com/vi/kvjGoGLBqao/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/kvjGoGLBqao?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i4.ytimg.com/vi/kvjGoGLBqao/hqdefault.jpg"},"categories":[]},{"title":"Formule ETS  - UTFR Toronto Shootout 2019","pubDate":"2019-10-16 21:09:25","link":"https://www.youtube.com/watch?v=4UU6juGHb0s","guid":"yt:video:4UU6juGHb0s","author":"Formule ETS","thumbnail":"https://i1.ytimg.com/vi/4UU6juGHb0s/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/4UU6juGHb0s?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i1.ytimg.com/vi/4UU6juGHb0s/hqdefault.jpg"},"categories":[]},{"title":"APEX NINETEEN Unveiling","pubDate":"2019-07-26 13:51:41","link":"https://www.youtube.com/watch?v=5V8h6OswSgg","guid":"yt:video:5V8h6OswSgg","author":"Formule ETS","thumbnail":"https://i2.ytimg.com/vi/5V8h6OswSgg/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/5V8h6OswSgg?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i2.ytimg.com/vi/5V8h6OswSgg/hqdefault.jpg"},"categories":[]},{"title":"D\u00e9voilement APEX-18","pubDate":"2018-04-29 15:45:42","link":"https://www.youtube.com/watch?v=7_l6dLm8vy4","guid":"yt:video:7_l6dLm8vy4","author":"Formule ETS","thumbnail":"https://i4.ytimg.com/vi/7_l6dLm8vy4/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/7_l6dLm8vy4?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i4.ytimg.com/vi/7_l6dLm8vy4/hqdefault.jpg"},"categories":[]},{"title":"Homepage preview","pubDate":"2017-12-09 20:44:06","link":"https://www.youtube.com/watch?v=0YVBkG6DWXc","guid":"yt:video:0YVBkG6DWXc","author":"Formule ETS","thumbnail":"https://i1.ytimg.com/vi/0YVBkG6DWXc/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/0YVBkG6DWXc?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i1.ytimg.com/vi/0YVBkG6DWXc/hqdefault.jpg"},"categories":[]},{"title":"Toronto Shootout 2017 - Formule ETS","pubDate":"2017-10-15 03:09:01","link":"https://www.youtube.com/watch?v=uU8DEp-q6DA","guid":"yt:video:uU8DEp-q6DA","author":"Formule ETS","thumbnail":"https://i2.ytimg.com/vi/uU8DEp-q6DA/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/uU8DEp-q6DA?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i2.ytimg.com/vi/uU8DEp-q6DA/hqdefault.jpg"},"categories":[]},{"title":"Formule \u00c9TS - APEX Unveiling","pubDate":"2017-05-06 22:51:44","link":"https://www.youtube.com/watch?v=3GvJ_xMZv0g","guid":"yt:video:3GvJ_xMZv0g","author":"Formule ETS","thumbnail":"https://i4.ytimg.com/vi/3GvJ_xMZv0g/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/3GvJ_xMZv0g?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i4.ytimg.com/vi/3GvJ_xMZv0g/hqdefault.jpg"},"categories":[]}]
            // }
            this.datas = json.items;
            localStorage.ybtDatas = JSON.stringify(json.items);
        }
    },
    methods: {
        createEmbed(url = ""){
            const id = url.split("v=")[1];
            return "https://www.youtube.com/embed/" + id + "?autoplay=1";
        },
        showRightF(delta = 0, width = 0){
            this.showRight = delta < width;
        },
        showLeftF(delta = 0){
            this.showLeft = delta > 0;
        },
        scroll(delta = 0){
            const elem = document.querySelector('#slider');
            
            let left = document.body.offsetWidth;

            let scroll = left * delta;

            //right
            if((elem.scrollLeft + scroll*2 + scroll/2) >= elem.scrollWidth) {
                scroll = elem.scrollWidth + 10;
            }

            //left
            if((elem.scrollLeft + scroll*2 - scroll/2) <= 0) {
                scroll = -elem.scrollWidth - 10;
            }

            elem.scrollBy({
                left: scroll,
                behavior: "smooth"
            });

            this.showLeftF(elem.scrollLeft + scroll);
            this.showRightF(elem.scrollLeft + scroll, elem.scrollWidth);
        },
        slideRight(){
            this.scroll(1);
        },
        slideLeft(){
            this.scroll(-1);
        }
    }
}
</script>

<style>

</style>