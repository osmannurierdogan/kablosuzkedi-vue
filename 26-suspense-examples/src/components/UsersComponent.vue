<script setup>
import { ref } from "vue";
import UserItemComponent from "./UserItemComponent.vue";
const userList = ref([]);
//const isLoaded = ref(false);
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    //console.log("Users => ", json);
    userList.value = json;
    //isLoaded.value = true;
  });
</script>

<template lang="pug">
div.d-flex.flex-column
  h3.text-center.fw-bold Users
  ul.list-group
    //ul.list-group(v-if="isLoaded")
    UserItemComponent(v-for="user in userList", :key="user.id", :user="user")
  //span(v-else) Loading...
</template>
