export default {
  namespaced: true,
  state: {
    contactName: "Selman Kahya",
  },
  getters: {
    _contactName(state) {
      return state.contactName;
    },
  },
};
