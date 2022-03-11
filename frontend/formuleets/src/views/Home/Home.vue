<template>
  <div>
    <!-- PRESENTATION -->
    <div
      class="bg-first w-full flex flex-wrap overflow-x-hidden bg-center bg-fixed bg-cover bg-no-repeat
       dark:bg-dark-mode bg-white"
      lazy-background="/static/home/fond.svg"
    >
     <div class="flex flex-col lg:flex-row justify-center items-center h-screen">
        <!-- TITLE -->
      <div
        class="flex-initial lg:h-screen w-full lg:w-1/3 flex flex-col justify-center p-10 z-20 text-dark-mode-2"
        data-aos="fade-right" :class="isMobile ? 'items-center' : ''"
      >
        <img :src=" isMobile ? '/static/home/logo-fets-mobile.png' : '/static/home/logo-fets.png'" 
        alt="logo" class="w-full logow -m-2" />
        <p
          class="mt-7 dark:text-white text-center lg:text-left"
        >{{ $t('message.home.presentation') }}</p>
      </div>

      <!-- ANIMATED FORMULE -->
      <div class="flex-initial lg:h-screen w-full lg:w-2/3 justify-center items-center flex z-0">
        <img
          id="formule"
          src="/static/home/f1.png"
          data-aos="fade-left"
          alt="Formule"
          class="z-0 w-4/5 lg:ml-20"
        />
      </div>
     </div>

      <!-- MAIN CONTENT -->
      <div class="flex-initial w-full z-10 bg-first overflow-x-hidden bg-white dark:bg-dark-mode">
        <hr lazy-animation="zoomin" lazy-reset class="border-red-600 m-3" />

        <!-- PARALLAX LEFT -->
        <ParallaxHome
          :item="{text: 'message.home.aboutUs', image: '/static/home/fond3.jpg'}"
          :isMobile="isMobile"
          position="left"
        ></ParallaxHome>

        <hr lazy-animation="zoomin" lazy-reset class="border-red-600 m-3" />

        <!-- SPONSORS -->
        <SponsorsHome v-if="!isMobile" :sponsors="sponsors"></SponsorsHome>

        <hr v-if="!isMobile" lazy-animation="zoomin" lazy-reset class="border-red-600 m-3" />

        <!-- PARALLAX RIGHT -->
        <ParallaxHome
          :item="{text: 'message.home.project', image: '/static/home/formuleETS.jpg'}"
          :isMobile="isMobile"
          position="right"
        ></ParallaxHome>

        <hr lazy-animation="zoomin" lazy-reset class="border-red-600 m-3" />

        <!-- CONTACT US -->
        <FormContact></FormContact>
      </div>
    </div>
  </div>
</template>

<script>
import sponsors from "../Sponsors/sponsors";
import phoneMixin from '../../mixins/phone-mixin';
import ParallaxHome from "../../components/home/ParallaxHome.vue";
import SponsorsHome from "../../components/home/SponsorsHome.vue";
import FormContact from "../../components/Form/FormContact.vue";

export default {
  name: "Home",
  mixins: [phoneMixin],
  components: { ParallaxHome, FormContact, SponsorsHome },
  data() {
    return {
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
  },
}
</script>

<style scoped>
.h-screen-div{
  height: 50vh;
}

.bg-triangle {
  clip-path: polygon(0 0, 60vw 100vh, 0 100vh);
}

.logow {
  min-width: 40vw;
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