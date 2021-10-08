import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";

createApp(App)
  .use(router, VueViewer)
  .mount("#app");
