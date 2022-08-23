<template lang="pug">
ul.list-group
  TodoItemComponent(v-for="todoItem in todoList" :key='todoItem.id' :todoItem='todoItem', @delete-todo-item="deleteTodoItem")
</template>

<script>
import TodoItemComponent from "@/components/TodoItemComponent";
export default {
  name: "TodoListComponent",
  components: {
    TodoItemComponent,
  },
  props: {
    todoList: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteTodoItem(data) {
      //console.log("event :>> ", data);
      this.$emit("delete-todo-item", data);
    },
  },
};
</script>
