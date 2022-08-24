<template lang="pug">
div.container
  div.row.m-5
    div.col-sm-12.d-flex.flex-column.align-items-center.justify-content-center
      NewUser
      UserList
</template>
<script>
//import { mapGetters } from "vuex";
import NewUser from "@/components/NewUser";
import UserList from "@/components/UserList";
export default {
  name: "App",
  components: {
    NewUser,
    UserList,
  },
  /* h3 Osman
      p {{ this.$store.state.user }}
      p {{ this.$store.state.theme }}
      ul.list-group.d-flex.flex-row.my-2
        li.list-group-item(v-for="item in $store.state.permissions" :key="item") {{ item }}
      ul.list-group.d-flex.flex-row
        li.list-group-item(v-for="user in $store.state.userList" :key="user") {{ user }}
      strong {{ $store.state.fullName }}
      button.btn.btn-danger(@click="updateFullName") Change Fullname
      ul.list-group
        li.list-group-item(v-for="(item, index) in woodItems" :key="index") {{ item }} */
  /* methods: {
    updateFullName() {
      this.$store.state.itemList.push({ id: 9, title: "Raf", type: "mobilya" });
      this.$store.state.fullName = new Date().getTime();
    },
  },
  created() {
    console.log(this.$store.state.person);
    console.log(this.$store.getters.woodItems);
    console.log(this.$store.getters.activeUser);
  },
  computed: {
    ...mapGetters({
      woodItems: "_woodItems",
      activeUser: "_activeUser",
    }),
    //customComputed(){}
  }, */
};
</script>
