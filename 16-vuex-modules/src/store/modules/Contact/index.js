export default {
  namespaced: true,
  state: {
    contactName: "puresol",
    contactAddress: "Canada",
  },
  mutations: {
    _setName(state, name) {
      state.contactName = name;
    },
    _setAddress(state, address) {
      state.contactAddress = address;
    },
  },
  getters: {
    _contactName(state) {
      return state.contactName;
    },
    _contactAddress(state) {
      return state.contactAddress;
    },
  },
};
