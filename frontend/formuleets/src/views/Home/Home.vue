<template>
  <div>
    <!-- PRESENTATION -->
    <div class="bg-first w-full flex flex-wrap overflow-x-hidden bg-center bg-fixed bg-cover dark:bg-dark-mode bg-white"
    lazy-background="/static/home/fond.svg">

      <!-- TRIANGLE -->
      <div class="bg-triangle absolute top-0 left-0 w-full h-screen bg-gradient-to-tr from-red-600 
      to-dark-mode z-10"></div>

      <!-- TITLE -->
      <div class="flex-initial h-screen w-full lg:w-1/3 flex flex-col justify-center p-5 z-20 text-dark-mode-2" data-aos="fade-right">
        <h1 class="dark:text-white font-normal tracking-wider text-5xl italic text-center lg:text-8xl lg:text-left">{{ text.titre }}<span class="text-red-600 font-bold">{{ text.ETS }}</span></h1>
        <p class="mt-10 dark:text-white text-center lg:text-left">{{ $t('message.home.presentation') }}</p>
      </div>

      <!-- ANIMATED FORMULE -->
      <div class="flex-initial h-screen w-2/3 justify-center items-center hidden lg:flex z-0 pl-20">
        <img id="formule" src="/static/home/f1.png" data-aos="fade-left" alt="Formule" class="z-0 w-2/3">
      </div>

      <!-- PART2 -->
      <div class="flex-initial w-full z-10 bg-first overflow-x-hidden bg-white dark:bg-dark-mode">

        <template v-for="(item, index) of home" :key="item.text">

          <!-- BORDER -->
          <hr lazy-animation="zoomin" lazy-reset class="border-red-600 m-3">

          <!-- SPONSORS -->
          <template v-if="index == 1">
            <div class="w-full flex-col flex justify-center items-center h-screen p-10
            bg-cover bg-center bg-fixed" 
            lazy-background="/static/home/fond2.svg">

              <h1 class="text-red-600 text-4xl lg:text-7xl m-10 mb-20
                  font-bold italic tracking-wider text-shadow z-10 "
                  data-aos="zoom-in">
                    {{ $t("message.header.sponsors") }}
              </h1>

                  <div class="w-full flex h-48" style="margin-left: -100vh"
                  parallaxy-x 
                  parallaxy-overflow-x 
                  parallaxy-speed-x="0.65"
                  parallaxy-inverted-x
                  parallaxy-scale="1">

                    <template v-for="sponsor of sponsors.diamond" :key="sponsor.src">
                      <img :src="sponsor.imageSrc" alt="Sponsor" class="h-full">
                    </template>

                  </div>
            </div>

            <hr lazy-animation="zoomin" lazy-reset class="border-red-600 m-3">
          </template>

          <!-- CONTENT GENERATION -->
          <div class="flex justify-center items-center
           flex-col flex-wrap w-full min-h-screen lg:h-screen relative overflow-hidden">

            <img :src="item.image" class="hidden lg:block w-full" alt="Image" 
            parallaxy-y parallaxy-scale="1" parallaxy-speed-y="0.65" parallaxy-overflow-y
            parallaxy-breakpoint="(max-width: 1024px)" v-if="!isMobile">

            <div class="h-full overflow-y-auto lg:w-2/5 text-justify p-10 lg:absolute dark:bg-dark-mode bg-white 
            border-black dark:border-white flex justify-center flex-col top-0"
            :class="index%2 != 0 ? 'right-0 lg:border-l' : 'left-0 lg:border-r'">

              <h1 class="text-red-600 text-5xl m-3
              font-bold italic tracking-wider text-shadow z-10"
              data-aos="zoom-in"
              :class="index%2 != 0 ? 'text-right' : 'text-left'">
                {{ $t(item.text + '.title') }}
              </h1>

              <p class="mt-10 mb-10 text-justify text-black dark:text-white text-lg" 
              v-html="$t(item.text + '.text')" :data-aos="index%2 == 0 ? 'fade-right' : 'fade-left'"></p>
            </div>

          </div>

        </template>

        <!-- CONTACT US -->
        <hr lazy-animation="zoomin" lazy-reset class="border-red-600 m-3">

        <div class="min-h-screen dark:text-white flex flex-col md:flex-row justify-center items-center 
        bg-cover bg-center bg-fixed"
        lazy-background="/static/home/fond.svg">

          <h1 class="text-red-600 text-7xl m-10 mb-20 w-full md:w-1/3
              font-bold italic tracking-wider text-shadow z-10 p-5 text-center"
              lazy-animation="slide-left"
              lazy-reset>
                {{ $t("message.header.contact-us") }}
          </h1>

          <form name="contact" 
          lazy-animation="slide-right"
          lazy-reset
          class="w-full md:w-2/3 flex justify-center items-center flex-col text-black relative" 
          method="POST" data-netlify="true">
            <input class="p-5 m-5 w-3/4 h-10 border border-dark-mode" type="text" name="name" placeholder="Name"/>
            <input class="p-5 m-5 w-3/4 h-10 border border-dark-mode" type="email" name="email" placeholder="Email"/>
            <input class="p-5 m-5 w-3/4 h-10 border border-dark-mode" type="text" name="subject" placeholder="Subject"/>
            <textarea class="p-5 m-5 w-3/4 h-32 border border-dark-mode" name="message" placeholder="Message"></textarea>

            <div class="flex items-end justify-end md:w-3/4">
              <button class="bg-red-600 p-3 pl-10 pr-10 text-white" type="submit">Send</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import home from "./home"
import sponsors from "../Sponsors/sponsors";
import phoneMixin from '../../mixins/phone-mixin';

export default {
    name: "Home",
    mixins: [phoneMixin],
    data() {
        return {
            home: home,
            sponsors: sponsors,
            text: {
                titre: "Formule",
                ETS: "ETS",
            },
        };
    },
    created() {
        this.$data.mobileSize = "1024px";
        document.addEventListener("scroll", this.scrollFormule);
    },
    beforeUnmount() {
        document.removeEventListener("scroll", this.scrollFormule);
    },
    methods: {
        scrollFormule() {
            const scroll = window.scrollY ? window.scrollY : document.body.scrollTop;
            if (scroll < window.innerHeight) {
                const formule = document.querySelector("#formule");
                if (formule)
                    formule.style = `transition: none!important; transform: translate(${-scroll}px, ${scroll}px)`;
                else
                    document.removeEventListener("scroll", this.scrollFormule);
            }
        }
    }
}
</script>

<style scoped>
.bg-triangle{
  clip-path: polygon(0 0, 60vw 100vh, 0 100vh);
}

.text-shadow{
  text-shadow: 4px 4px 0px #000;
}

.dark .text-shadow{
  text-shadow: 4px 4px 0px #fff;
}

*:focus {
    outline: none;
}

.truncate-mul::before {
  content: "...";
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>