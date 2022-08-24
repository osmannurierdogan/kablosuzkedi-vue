import { createStore } from "vuex";
import ContactModule from "./modules/Contact";
import TaskManagerModule from "./modules/TaskManager";
const store = createStore({
  state: {
    mainName: "Osman Nuri Erdogan",
  },
  modules: {
    ContactModule,
    TaskManagerModule,
  },
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
