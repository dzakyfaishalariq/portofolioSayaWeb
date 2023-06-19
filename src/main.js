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
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faFlorinSign } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faCode, faFlorinSign, faServer, faDatabase, faPeopleGroup);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
