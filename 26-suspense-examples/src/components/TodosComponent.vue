<script setup>
import { ref } from "vue";
import TodoItemComponent from "./TodoItemComponent.vue";
const todoList = ref([]);
//const isLoaded = ref(false);
//aaaa; ! This line is added to see the error state
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    //console.log("Todos => ", json);
    todoList.value = json;
    //isLoaded.value = true;
  });
</script>

<template lang="pug">
div.d-flex.flex-column
  h3.text-center.fw-bold Todos
  ul.list-group
    //ul.list-group(v-if="isLoaded")
    TodoItemComponent(v-for="todo in todoList", :key="todo.id", :todo="todo")
  //span(v-else) Loading...
</template>
