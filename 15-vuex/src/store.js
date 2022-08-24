import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: "Osman Nuri",
      surname: "Erdogan",
      age: 21,
      address: {},
      password: "1111",
      tckn: "0000",
    },
    theme: "Cobalt2 Dark",
    permissions: [1, 2, 3, 4, 5],
    userList: [
      "Bahriye",
      "Osman",
      "Nuri",
      "Erdogan",
      "Izzet",
      "Ikbal",
      "Aysegul",
    ],
    fullName: "Osman Nuri Erdogan",
    itemList: [
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      { id: 3, title: "Elma", type: "gida" },
      { id: 4, title: "Televizyon", type: "elektronik" },
      { id: 5, title: "Monitor", type: "elektronik" },
      { id: 6, title: "Bilgisayar", type: "elektronik" },
      { id: 7, title: "Perde", type: "dekor" },
      { id: 8, title: "Biblo", type: "dekor" },
    ],
  },
  getters: {
    _woodItems(state) {
      return state.itemList.filter((i) => i.type === "mobilya");
    },
    _activeUser(state) {
      const user = { ...state.user };
      delete user.password;
      return user;
    },
  },
  mutations: {
    _newItem(state, item) {
      state.itemList.push(item);
    },
    _changeActiveUser(state, newUser) {
      state.user = newUser;
    },
  },
  actions: {
    //_addNewItem(context, item) {
    _addNewItem({ commit }, item) {
      // ! context.commit()
      setTimeout(() => {
        //context.state
        //context.dispatch
        //context.commit
        //context.commit("_newItem", item);
        commit("_newItem", item);
      }, 1000);
    },
  },
});

export default store;
