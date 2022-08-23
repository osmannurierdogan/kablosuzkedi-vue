<template lang="pug">
div.form-group.d-flex.align-items-center.justify-content-between
  input.form-control(type="text", placeholder="Enter your task", v-model='todoText', @keydown.enter="addTodoItem").me-2
  AddTodoButton(@add-todo-item='addTodoItem')
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
  methods: {
    addTodoItem() {
      this.$emit("add-todo", this.todoText);
      this.todoText = "";
    },
  },
};
</script>
