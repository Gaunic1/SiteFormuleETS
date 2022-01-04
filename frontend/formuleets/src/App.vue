<template>
  <Header></Header>
  <router-view/>
  <Footer></Footer>
</template>
<script>
import Header from "./components/Header/Header.vue"
import Footer from "./components/Footer/Footer.vue"

export default {
  components: {
    Header,
    Footer,
  },
  mounted(){
    const lg = navigator.language;
    this.$root.$i18n.setLocale(lg);
  }
}
</script>

