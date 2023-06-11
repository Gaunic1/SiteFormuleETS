import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/main.css";
import i18n from "./i18n";
import "./assets/styles/main.css";
import { createPinia } from "pinia";
import AOS from "aos";
import "aos/dist/aos.css";
import "lazy-attr";
import "lazy-attr/dist/lazy-attr-animation.css";
import "parallaxy-img";
import "vue-i18n/dist/vue-i18n.d.ts";

createApp(App)
  .use(createPinia())
  .use(i18n)
  .use(AOS.init())
  .use(router)
  .mount("#app");
