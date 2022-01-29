import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/styles/main.css"
import i18n from './i18n'
import "@/assets/styles/main.css";

//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

//Tilt.js
import VueTilt from 'vue-tilt.js'

//Lazy-attr
import lazyattr from 'lazy-attr'
import 'lazy-attr/dist/lazy-attr-animation.css'

//Parallax
import ScrollParallax from '@/components/Parallax/ScrollParallax.vue';
import parallaxy from "parallaxy-img/dist/parallaxy";

createApp(App)
.component('scroll-parallax', ScrollParallax)
.use(i18n)
.use(AOS.init())
.use(parallaxy)
.use(lazyattr)
.use(VueTilt)
.use(router)
.mount('#app')
