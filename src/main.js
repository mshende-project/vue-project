import "./assets/main.css";
import "primeicons/primeicons.css";
import router from "./router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

const options = {
  // You can set your default options for toast notifications here
};

app.use(router);
app.use(Toast, options);

app.mount("#app");
