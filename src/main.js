import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueYoutube from "vue-youtube";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
  .use(router, VueYoutube)
  .mount("#app");
