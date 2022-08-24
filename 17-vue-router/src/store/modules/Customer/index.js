export default {
  namespaced: true,
  state: {
    customerName: "Erkek Adam",
  },
  getters: {
    _customerName(state) {
      return state.customerName;
    },
  },
};
