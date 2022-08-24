<template lang="pug">
button.btn.btn-danger.my-1(@click="addNewItem") Add New Item
button.btn.btn-success(@click="changeActiveUser") Change Active User
</template>
<script>
export default {
  name: "NewUser",
  methods: {
    /* addItem() {
      // this.$store.state.itemList.push({
      //   id: new Date().getTime(),
      //   title: `Raf => ${new Date().getTime()}`,
      //   type: "mobilya",
      // });
      this.$store.commit("_newItem", {
        id: new Date().getTime(),
        title: `Raf => ${new Date().getTime()}`,
        type: "mobilya",
      });
    }, */
    addNewItem() {
      this.$store.dispatch("_addNewItem", {
        id: new Date().getTime(),
        title: `Raf => ${new Date().getTime()}`,
        type: "mobilya",
      });
    },
    changeActiveUser() {
      this.$store.commit("_changeActiveUser", {
        name: "John",
        surname: "Doe",
        age: 32,
        address: {},
        password: "01234567890",
        tckn: "11111111111",
      });
    },
  },
};
</script>
