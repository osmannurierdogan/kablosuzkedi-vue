<template lang="pug">
div.container
  div.row.m-5
    div.col-sm-12.d-flex.align-items-start.justify-content-between.flex-column
      p Main Name: #[strong {{ $store.state.mainName }}]
      p Contact Name: #[strong {{ contactName }}]
      p Contact Address: #[strong {{ contactAddress }}]
      p Item List: #[pre {{ itemList }}]
      p User List: #[pre {{ userList }}]
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {},
  computed: {
    ...mapGetters({
      userList: "TaskManagerModule/_userList",
      itemList: "TaskManagerModule/_itemList",
      contactName: "ContactModule/_contactName",
      contactAddress: "ContactModule/_contactAddress",
    }),
  },
};
</script>
