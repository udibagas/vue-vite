import { createApp } from "vue";
import "./style.css";

// main component
import App from "./App.vue";
import Button from "./components/ui/Button.vue";

// create vue app and mount it to DOM
createApp(App)
  // global component
  .component("Button", Button)
  .mount("#app");
