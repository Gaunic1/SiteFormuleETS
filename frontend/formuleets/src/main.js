import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/styles/main.css"
import i18n from './i18n'
import "@/assets/styles/main.css";

//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

//Lazy-attr
import lazyattr from 'lazy-attr'
import 'lazy-attr/dist/lazy-attr-animation.css'

//Parallax
import parallaxy from "parallaxy-img/src/parallaxy";

createApp(App)
.use(i18n)
.use(AOS.init())
.use(parallaxy)
.use(lazyattr)
.use(router)
.mount('#app')
