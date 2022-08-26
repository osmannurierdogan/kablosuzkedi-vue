import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { appAxios } from "./utils/appAxios";
import "@/assets/style.css";
import HeaderComponent from "@/components/Shared/HeaderComponent.vue";
import HomeSideBarComponent from "@/components/Home/HomeSideBarComponent.vue";
import AppBookmarkListComponent from "@/components/AppBookmarkList/AppBookmarkListComponent";

const app = createApp(App);
app.use(store);
app.use(router);
app.component("HeaderComponent", HeaderComponent);
app.component("HomeSideBarComponent", HomeSideBarComponent);
app.component("AppBookmarkListComponent", AppBookmarkListComponent);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
