<template lang="pug">
ul.list-group.d-flex.flex-column.my-2
  li.list-group-item(v-for="user in woodItems" :key="user") {{ user.title }}
pre {{ activeUser }}
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "UserList",
  computed: {
    ...mapGetters({
      woodItems: "_woodItems",
      activeUser: "_activeUser",
    }),
    //customComputed(){}
  },
};
</script>
