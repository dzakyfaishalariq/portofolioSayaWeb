import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// jquery
import jQuery from "jquery";
window.$ = jQuery;
// fontawesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

createApp(App).use(router).mount("#app");
