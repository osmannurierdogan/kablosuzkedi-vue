import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage";
import AboutPage from "@/views/AboutPage";
import ContactPage from "@/views/ContactPage";
import DetailsPage from "@/views/DetailsPage";

const routes = [
  { name: "HomePage", path: "/", component: HomePage },
  { name: "AboutPage", path: "/about", component: AboutPage },
  { name: "ContactPage", path: "/contact", component: ContactPage },
  /* { name: "DetailsPage", path: "/details", component: DetailsPage }, */
  { name: "DetailsPage", path: "/details/:userId", component: DetailsPage },
];
const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
});

export default router;
