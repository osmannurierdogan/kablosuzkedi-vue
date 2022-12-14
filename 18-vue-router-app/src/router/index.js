import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import NewBookmarkView from "../views/NewBookmarkView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    // component: () => import("../views/AboutView.vue"),
    component: AboutView,
  },
  {
    path: "/new-bookmark",
    name: "NewBookmark",
    component: NewBookmarkView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
