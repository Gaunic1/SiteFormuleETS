<template>
  <div>
    <!-- PRESENTATION -->
     <div class="h-screen overflow-hidden bg-center bg-cover" lazy-background="/static/home/fond.svg">
       <div class="flex flex-col landscape:flex-row tb:flex-row justify-center items-center min-h-screen">
          <!-- TITLE -->
        <div
          class="flex-1 landscape:h-screen tb:h-screen w-full
          landscape:w-1/2 tb:w-1/2 flex flex-col justify-end landscape:justify-center tb:justify-center items-center z-20 text-dark-mode-2 p-10"
          data-aos="fade-right"
        >
          <img :src="isMobile ? '/static/home/logo-fets-mobile.png' : '/static/home/logo-fets.png'" 
          alt="logo" class="w-full min-w-[40vw] -m-2" />
          <p
            class="mt-7 dark:text-white text-center landscape:text-left tb:text-left"
          >{{ $t('message.home.presentation') }}</p>
        </div>

        <!-- ANIMATED FORMULE -->
        <div class="flex-1 landscape:h-screen tb:h-screen w-full landscape:w-1/3 tb:w-1/3 justify-center landscape:justify-end
         tb:justify-end items-start landscape:items-center tb:items-center flex z-0">
          <img
            id="formule"
            src="/static/home/final2022.png"
            data-aos="fade-left"
            alt="Formule"
            class="z-0 w-full"
            style="will-change: transform;"
          />
        </div>
      </div>
     </div>

      <!-- MAIN CONTENT -->
      <div class="flex-initial w-full z-10 bg-first overflow-x-hidden bg-white dark:bg-dark-mode">
        <hr lazy-animation="zoomin" lazy-reset class="border-red-600 m-3" />

        <Date></Date>

        <hr lazy-animation="zoomin" lazy-reset class="border-red-600 m-3" />

        <!-- PARALLAX LEFT -->
        <ParallaxHome
          :item="{text: 'message.home.aboutUs', image: '/static/home/fond-pc.png', mobileImage: '/static/home/fond-mobile.png'}"
          :isMobile="isMobile"
          position="left"
        ></ParallaxHome>

        <hr lazy-animation="zoomin" lazy-reset class="border-red-600 m-3" />

        <!-- SPONSORS -->
        <SponsorsHome v-if="!isMobile" :sponsors="sponsors"></SponsorsHome>

        <hr lazy-animation="zoomin" lazy-reset class="border-red-600 m-3 hidden nesthub:block" />

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
</template>

<script>
import sponsors from "../Sponsors/sponsors";
import phoneMixin from '../../mixins/phone-mixin';
import ParallaxHome from "../../components/Home/ParallaxHome.vue";
import SponsorsHome from "../../components/Home/SponsorsHome.vue";
import FormContact from "../../components/Form/FormContact.vue";
import Date from "../../components/Date/Date.vue";

export default {
  name: "Home",
  mixins: [phoneMixin],
  components: { ParallaxHome, FormContact, SponsorsHome, Date },
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
    document.addEventListener("scroll", this.scrollFormule, {passive: true});
  },
  beforeUnmount() {
    document.removeEventListener("scroll", this.scrollFormule, {passive: true});
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
*:focus {
  outline: none;
}
</style>