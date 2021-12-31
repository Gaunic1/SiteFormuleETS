import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/styles/main.css"
import i18n from './i18n'
import "@/assets/styles/main.css";

// importing AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App)
.use(i18n)
.use(AOS.init())
.use(router)
.mount('#app')
