import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/main.css";
import i18n from "./i18n";
import "@/assets/styles/main.css";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

// //Lazy-attr
import "lazy-attr";
import "lazy-attr/dist/lazy-attr-animation.css";

//Pinia
import { createPinia } from "pinia";

createApp(App)
  .use(createPinia())
  .use(i18n)
  .use(AOS.init())
  .use(router)
  .mount("#app");
