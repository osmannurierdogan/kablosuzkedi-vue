import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import AccountPage from "../views/AccountPage.vue";
import FavoritesPage from "../views/FavoritesPage.vue";
import NewBookmarkPage from "../views/NewBookmarkPage.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: "/account",
    name: "Account",
    component: AccountPage,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: FavoritesPage,
  },
  {
    path: "/newbookmark",
    name: "NewBookmark",
    component: NewBookmarkPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  const authRequiredRoutes = ["Home"];
  const authNotRequiredRoutes = ["Login", "Register"];
  const _isAuthenticated = store.getters._isAuthenticated;

  if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated)
    next(false);
  if (authRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuthenticated) next();
    else next({ name: "Login" });
  } else {
    next();
  }
});
export default router;
