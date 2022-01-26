<template>
  <div>
    <!-- PRESENTATION -->
    <div class="bg-first w-full flex flex-wrap overflow-x-hidden bg-center bg-fixed bg-cover"
    lazy-background="/static/home/fond.svg">

      <!-- TRIANGLE -->
      <!-- <div class="bg-triangle absolute bottom-0 left-0 w-full h-screen bg-gradient-to-tr from-red-600 
      to-dark-mode z-10"></div> -->

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
          <hr lazy-animation="zoomin" lazy-reset class="border-red-600 mr-3 ml-3 mt-5 mb-5">

          <!-- CONTENT GENERATION -->
          <div class="flex flex-col lg:flex-row flex-wrap w-full min-h-screen 
          justify-center items-center bg-cover bg-center bg-fixed"
          :lazy-background="'/static/home/' + (index%2 == 0 ? 'fond2.svg' : 'fond.svg')">

            <div :data-aos="index%2 == 0 ? 'fade-left' : 'fade-right'" 
            class="flex-initial p-5 w-full lg:w-2/3" 
            :class="index%2 == 0 ? 'lg:order-2' : ''">
              <h1 class="text-red-600 text-5xl font-bold italic mb-12 md:text-left text-center tracking-wider text-shadow">
                {{ $t(item.text + '.title') }}
              </h1>
              <p class="mt-3 text-black dark:text-white text-justify text-lg" v-html="$t(item.text + '.text')"></p>
            </div>

            <div class="flex-initial p-5 w-full lg:w-1/3 h-full flex items-center justify-center">
              <img :lazy-src="item.image"
              :data-aos="index%2 == 0 ? 'fade-right' : 'fade-left'"
              alt="Teams" 
              class="w-full border-8 border-red-600 rounded">
            </div>

          </div>

        </template>

      </div>
    </div>
  </div>
</template>

<script>
import home from "./home"

export default {
    name: "Home",
    data(){
      return {
        home: home,
        text: {
          titre: "Formule",
          ETS: "ETS",
        },
      }
    },
    created(){
      document.addEventListener('scroll', this.scrollFormule);
    },
    beforeUnmount(){
      document.removeEventListener("scroll", this.scrollFormule);
    },
    methods: {
      scrollFormule(){
        const scroll = window.scrollY ? window.scrollY : document.body.scrollTop;
        if(scroll < window.innerHeight){
          const formule = document.querySelector('#formule');
          if(formule) formule.style = `transition: none!important; transform: translate(${-scroll}px, ${scroll}px)`;
          else document.removeEventListener("scroll", this.scrollFormule);
        }
      }
    }
}
</script>

<style scoped>
.bg-triangle{
  clip-path: polygon(0 0, 60% 100%, 0 100%);
}

.text-shadow{
  text-shadow: 4px 4px 0px #000;
}

.dark .text-shadow{
  text-shadow: 4px 4px 0px #fff;
}

/* .bg-cover{
  background-size: 100% auto!important;
  background-repeat: no-repeat;
  background-position: 0 0!important;
} */
</style>