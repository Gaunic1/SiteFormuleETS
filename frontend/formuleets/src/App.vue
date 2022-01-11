<template>
  <Header></Header>
  <router-view/>
  <Footer></Footer>

  <go-to-top></go-to-top>
</template>
<script>
import Header from "./components/Header/Header.vue"
import Footer from "./components/Footer/Footer.vue"
import GoToTop from './components/GoToTop/GoToTop.vue';

export default {
  components: {
    Header,
    Footer,
    GoToTop,
  },
  mounted(){
    const lg = navigator.language.split('-')[0];
    this.$root.$i18n.setLocale(lg);
  }
}
</script>

