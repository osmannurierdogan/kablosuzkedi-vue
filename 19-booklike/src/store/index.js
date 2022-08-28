import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import { appAxios } from "@/utils/appAxios";

let ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    user: null,
    saltKey: "booklike123!456?#",
    /* bookmarkList:
      appAxios.get("/bookmarks?_expand=category&_expand=user").then().data ||
      [], */
    bookmarkList: [],
  },
  mutations: {
    _setUser(state, user) {
      state.user = user;
    },
    _logoutUser(state) {
      state.user = null;
    },
    _setBookmarkList(state, bookmarkList) {
      state.bookmarkList = bookmarkList;
    },
    _changeBookmarksOfCategory(state, categoryId) {
      const url = categoryId
        ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`
        : "/bookmarks?_expand=category&_expand=user";
      appAxios.get(url).then((response) => {
        state.bookmarkList = response.data;
      });
    },
    _updateLikes(state, likes) {
      state.user.likes = likes;
    },
  },
  getters: {
    _isAuthenticated(state) {
      return state.user !== null;
    },
    _getCurrentUser(state) {
      const user = state.user;
      delete user?.password;
      return user;
    },
    _getCurrentUserId(state) {
      return state?.user?.id;
    },
    _getSaltKey(state) {
      return state.saltKey;
    },
    _getCategoryAndUserData(state) {
      return state.bookmarkList;
      /* appAxios
        .get("/bookmarks?_expand=category&_expand=user")
        .then((response) => {
          //console.log("response :>> ", response);
          state.bookmarkList = response.data;
          //console.log("response :>> ", response);
        }); */
    },
    _getUserLikes(state) {
      return state.user?.likes || [];
    },
    _getUserBookmarks(state) {
      return state.user?.bookmarks || [];
    },
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
  actions: {},
  modules: {},
});
