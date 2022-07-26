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
          alt="logo" class="w-full min-w-calc -m-2" />
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
            alt="Formule"
            class="z-0 w-full transform scale-125 slide-from-right"
            style="will-change: transform;"
          />
        </div>
      </div>
     </div>

      <!-- MAIN CONTENT -->
      <div class="flex-initial w-full z-10 bg-first overflow-x-hidden bg-white dark:bg-dark-mode">
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

        <hr v-if="dateDisplay" lazy-animation="zoomin" lazy-reset class="border-red-600 m-3" />

        <!-- DATES -->
        <Date v-if="dateDisplay"></Date>

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
import dateList from "../../components/Date/date";

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
  computed: {
    dateDisplay(){
      return dateList?.list?.filter(e => {
        const d = new window.Date();
        d.setDate(d.getDate() + dateList.stopDisplayingAfterDays);

        const c = new window.Date(e.date + " " + e.hour);

        return c > d;
      })?.length > 0;
    }
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
          formule.style = `transition: none!important; transform: translate(${-scroll}px, ${scroll}px) scale(1.25)`;
        else
          document.removeEventListener("scroll", this.scrollFormule);
      }
    }
  },
}
</script>

<style scoped>
.min-w-calc{
  min-width: 40vw;
}

.slide-from-right{
  animation: slide-right-an 0.4s ease forwards;
  opacity: 0;
  margin-right: -2rem;
}

@keyframes slide-right-an {
  to{
    opacity: 1;
    margin-right: 0;
  }
}
</style>