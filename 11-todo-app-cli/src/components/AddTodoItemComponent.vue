<template lang="pug">
div.form-group.d-flex.align-items-center.justify-content-between
  input.form-control(type="text", placeholder="Enter your task", v-model='todoText', @keydown.enter="addTodoItem(this.todoText)").me-2
  AddTodoButton(@add-todo-item='addTodoItem(this.todoText)')
</template>

<script>
import AddTodoButton from "@/components/AddTodoButton";
export default {
  name: "AddTodoItemComponent",
  data() {
    return {
      todoText: null,
    };
  },
  components: {
    AddTodoButton,
  },
  inject: {
    addTodoItem: {
      type: Function,
      required: true,
    },
  },
};
</script>
