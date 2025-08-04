import "./assets/main.css";
import router from "./router";

import { createApp } from "vue";
import App from "./App.vue";
import "primeicons/primeicons.css";

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(router);
app.use(Toast);

app.mount("#app");
