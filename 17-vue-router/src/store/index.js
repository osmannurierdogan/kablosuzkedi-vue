import { createStore } from "vuex";
import CustomerModule from "./modules/Customer/";
import ContactModule from "./modules/Contact/";
const store = createStore({
  state: {
    name: "Osman Nuri Erdogan",
  },
  modules: {
    CustomerModule,
    ContactModule,
  },
});

export default store;
