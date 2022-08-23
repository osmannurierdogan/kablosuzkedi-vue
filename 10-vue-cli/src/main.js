import { createApp } from "vue";
import App from "./App.vue";
import AppHeader from "@/components/AppHeader.vue";

const app = createApp(App);
// ! Global Registering => Adding component to main app folder.
app.component("AppHeader", AppHeader);

app.mount("#app");
