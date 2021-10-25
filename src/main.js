import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "viewerjs/dist/viewer.css";
import Markdown from "vue3-markdown-it";

createApp(App)
  .use(router, Markdown)
  .mount("#app");
