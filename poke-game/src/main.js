import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import store from "./store/index";
import router from "./router";
import "./styles/animations.css";

createApp(App).use(Quasar, quasarUserOptions).use(router).use(store).mount("#app");
