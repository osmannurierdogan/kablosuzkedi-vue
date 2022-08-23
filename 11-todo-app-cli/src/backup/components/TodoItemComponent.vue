<template lang="pug">
li.list-group-item.d-flex.align-items-center.justify-content-between
  span {{ todoItem.text }}
  // DeleteTodoButton(@delete-todo-item="$emit('delete-todo-item')")
  DeleteTodoButton(@delete-todo-item="deleteTodoItem")
</template>

<script>
import DeleteTodoButton from "@/components/DeleteTodoButton";
export default {
  name: "TodoItemComponent",
  components: {
    DeleteTodoButton,
  },
  props: {
    todoItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteTodoItem() {
      this.$emit("delete-todo-item", this.todoItem);
    },
  },
};
/* li.list-group-item.d-flex.align-items-center.justify-content-between(v-for="todo in todoList", :key="todo.id")
  span {{ todo.text }}
  DeleteTodoButton */
</script>
