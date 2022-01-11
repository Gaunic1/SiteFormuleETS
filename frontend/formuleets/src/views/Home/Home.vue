<template>
  <div>
    <!-- PRESENTATION -->
    <div class="bg-first w-full flex flex-wrap overflow-hidden">
      <div class="bg-triangle absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-red-600 to-dark-mode z-10"></div>

      <!-- TITLE -->
      <div class="flex-initial h-screen w-full lg:w-1/3 flex flex-col justify-center p-5 z-20 text-dark-mode-2" data-aos="fade-right">
        <h1 class="dark:text-white font-normal tracking-wider text-5xl italic text-center lg:text-8xl lg:text-left">{{ text.titre }}<span class="text-red-600 font-bold">{{ text.ETS }}</span></h1>
        <p class="mt-10 dark:text-white text-center lg:text-left">{{ $t('message.home.presentation') }}</p>
      </div>

      <!-- ANIMATED FORMULE -->
      <div class="flex-initial h-screen w-2/3 justify-center items-center hidden lg:flex z-0">
        <img id="formule" src="/static/home/formule.png" data-aos="fade-left" alt="Formule" class="z-0">
      </div>
    </div>
  </div>

  <!-- PART2 -->
  <div>
      <template v-for="(item, index) of home" :key="item.title">
          <div class="lg:sticky top-0 w-full h-auto lg:h-screen bg-center bg-cover bg-fixed overflow-hidden" 
          :style="`background-image: url('${item.image}')`">

            <!-- OVERLAY -->
            <div class="lg:h-full h-auto w-full bg-overlay-2 
            flex justify-center text-white flex-col p-5"
            :class="index%2==0 ? 'items-start' : 'items-end'">

              <!-- TEXT COTNAINER -->
              <div data-aos="zoom-in" class="w-full lg:w-1/2 text-center border-white border-4 p-5">

                <h2 data-aos="fade-left" class="text-red-500 uppercase text-3xl font-bold mb-10 italic">
                  {{ $t(item.text + '.title') }}
                </h2>

                <p data-aos="fade-right" class="m-5 text-xl" v-html="$t(item.text + '.text')"></p>

              </div>

            </div>

          </div>
        </template>
  </div>
</template>

<script>
import home from "./home";

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
</style>