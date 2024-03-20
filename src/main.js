import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { vMaska } from "maska";
import cids from "cids-cgi/lib";

const app = createApp(App);

app.directive("maska", vMaska);
app.use(router).use(vuetify).use(cids, opt).mount("#app");
