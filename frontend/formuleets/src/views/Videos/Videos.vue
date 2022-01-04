<template>
  <div class="md:h-screen flex flex-col pl-5 justify-center">
      <h2 data-aos="fade-right" class="dark:text-white text-3xl uppercase font-bold">Videos</h2>

      <hr data-aos="zoom-in" class="mt-5 border dark:border-white border-black dark:bg-white bg-black">

      <div class="w-full relative h-auto">
        <!-- ARROWS -->
        <!-- LEFT -->
        <div @click="slideLeft" 
        v-if="!isMobile && showLeft" 
        class="w-20 h-full absolute left-0 top-0 bg-dark-mode dark:bg-white 
        z-10 flex justify-center items-center cursor-pointer opacity-80">
            <i class="text-white dark:text-black fas fa-chevron-left text-5xl"></i>
        </div>
        <!-- RIGHT -->
        <div @click="slideRight" 
        v-if="!isMobile && showRight" 
        class="w-20 h-full absolute right-0 top-0 bg-dark-mode dark:bg-white 
        z-10 flex justify-center items-center cursor-pointer opacity-80">
            <i class="text-white dark:text-black fas fa-chevron-right text-5xl"></i>
        </div>

        <div id="slider" v-if="datas" class="w-auto overflow-x-hidden mt-5 relative" 
        :class="isMobile ? '' : 'whitespace-nowrap'">

            <!-- VIDEOS -->
            <template v-for="item of datas" :key="item.pubDate">
                <div class="mr-5 pt-5 pb-5"
                :class="isMobile ? 'block' : 'inline-block'">
                    <h4 class="uppercase text-lg dark:text-white mb-3 relative">
                        <span class="font-thin">{{ item.title }}</span>
                        <span class="absolute right-0 font-thin">&nbsp; ({{ item.pubDate.split(' ')[0] }})</span>
                    </h4>

                    <iframe 
                    width="560" 
                    height="315" 
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

export default {
    name: "Videos",
    data(){
        return {
            datas: null,
            showRight: true,
            showLeft: false,
            isMobile: false
        }
    },
    async mounted(){
        //is phone ?
        this.detectMobile();
        window.addEventListener('resize', this.detectMobile);

        const response = await fetch(ytb.url + ytb.chanelId);
        const json = await response.json();
        //test: [{"title":"FORMULE ETS \u2013 D\u00c9VOILEMENT","pubDate":"2021-11-27 18:00:07","link":"https://www.youtube.com/watch?v=PO9Oi1HBHFY","guid":"yt:video:PO9Oi1HBHFY","author":"Formule ETS","thumbnail":"https://i1.ytimg.com/vi/PO9Oi1HBHFY/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/PO9Oi1HBHFY?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i1.ytimg.com/vi/PO9Oi1HBHFY/hqdefault.jpg"},"categories":[]},{"title":"FORMULE ETS - Throwback","pubDate":"2021-11-25 18:00:04","link":"https://www.youtube.com/watch?v=8ehP5H5UOMI","guid":"yt:video:8ehP5H5UOMI","author":"Formule ETS","thumbnail":"https://i1.ytimg.com/vi/8ehP5H5UOMI/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/8ehP5H5UOMI?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i1.ytimg.com/vi/8ehP5H5UOMI/hqdefault.jpg"},"categories":[]},{"title":"FORMULE ETS - RECRUTEMENT 2021","pubDate":"2021-09-21 16:30:05","link":"https://www.youtube.com/watch?v=rzqknx5Udt4","guid":"yt:video:rzqknx5Udt4","author":"Formule ETS","thumbnail":"https://i3.ytimg.com/vi/rzqknx5Udt4/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/rzqknx5Udt4?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i3.ytimg.com/vi/rzqknx5Udt4/hqdefault.jpg"},"categories":[]},{"title":"FORMULE ETS - RECRUITMENT 2020","pubDate":"2020-10-24 18:42:03","link":"https://www.youtube.com/watch?v=kvjGoGLBqao","guid":"yt:video:kvjGoGLBqao","author":"Formule ETS","thumbnail":"https://i4.ytimg.com/vi/kvjGoGLBqao/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/kvjGoGLBqao?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i4.ytimg.com/vi/kvjGoGLBqao/hqdefault.jpg"},"categories":[]},{"title":"Formule ETS  - UTFR Toronto Shootout 2019","pubDate":"2019-10-16 21:09:25","link":"https://www.youtube.com/watch?v=4UU6juGHb0s","guid":"yt:video:4UU6juGHb0s","author":"Formule ETS","thumbnail":"https://i1.ytimg.com/vi/4UU6juGHb0s/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/4UU6juGHb0s?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i1.ytimg.com/vi/4UU6juGHb0s/hqdefault.jpg"},"categories":[]},{"title":"APEX NINETEEN Unveiling","pubDate":"2019-07-26 13:51:41","link":"https://www.youtube.com/watch?v=5V8h6OswSgg","guid":"yt:video:5V8h6OswSgg","author":"Formule ETS","thumbnail":"https://i2.ytimg.com/vi/5V8h6OswSgg/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/5V8h6OswSgg?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i2.ytimg.com/vi/5V8h6OswSgg/hqdefault.jpg"},"categories":[]},{"title":"D\u00e9voilement APEX-18","pubDate":"2018-04-29 15:45:42","link":"https://www.youtube.com/watch?v=7_l6dLm8vy4","guid":"yt:video:7_l6dLm8vy4","author":"Formule ETS","thumbnail":"https://i4.ytimg.com/vi/7_l6dLm8vy4/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/7_l6dLm8vy4?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i4.ytimg.com/vi/7_l6dLm8vy4/hqdefault.jpg"},"categories":[]},{"title":"Homepage preview","pubDate":"2017-12-09 20:44:06","link":"https://www.youtube.com/watch?v=0YVBkG6DWXc","guid":"yt:video:0YVBkG6DWXc","author":"Formule ETS","thumbnail":"https://i1.ytimg.com/vi/0YVBkG6DWXc/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/0YVBkG6DWXc?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i1.ytimg.com/vi/0YVBkG6DWXc/hqdefault.jpg"},"categories":[]},{"title":"Toronto Shootout 2017 - Formule ETS","pubDate":"2017-10-15 03:09:01","link":"https://www.youtube.com/watch?v=uU8DEp-q6DA","guid":"yt:video:uU8DEp-q6DA","author":"Formule ETS","thumbnail":"https://i2.ytimg.com/vi/uU8DEp-q6DA/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/uU8DEp-q6DA?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i2.ytimg.com/vi/uU8DEp-q6DA/hqdefault.jpg"},"categories":[]},{"title":"Formule \u00c9TS - APEX Unveiling","pubDate":"2017-05-06 22:51:44","link":"https://www.youtube.com/watch?v=3GvJ_xMZv0g","guid":"yt:video:3GvJ_xMZv0g","author":"Formule ETS","thumbnail":"https://i4.ytimg.com/vi/3GvJ_xMZv0g/hqdefault.jpg","description":"","content":"","enclosure":{"link":"https://www.youtube.com/v/3GvJ_xMZv0g?version=3","type":"application/x-shockwave-flash","thumbnail":"https://i4.ytimg.com/vi/3GvJ_xMZv0g/hqdefault.jpg"},"categories":[]}]
        this.datas = json.items;
    },
    beforeUnmount(){
        window.removeEventListener('resize', this.detectMobile);
    },
    methods: {
        createEmbed(url = ""){
            const id = url.split("v=")[1];
            return "https://www.youtube.com/embed/" + id;
        },
        detectMobile(){
            this.isMobile = window.matchMedia("only screen and (max-width: 760px)").matches
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

            if((elem.scrollLeft + scroll*2 + scroll/2) > elem.scrollWidth) {
                left = elem.scrollWidth + 10;
                scroll = elem.scrollWidth + 10;
            }

            elem.scrollBy({
                left: scroll,
                behavior: "smooth"
            });

            this.showLeftF(elem.scrollLeft + left * delta);
            this.showRightF(elem.scrollLeft + left * delta, elem.scrollWidth);
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