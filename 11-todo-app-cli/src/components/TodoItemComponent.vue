<template lang="pug">
li.list-group-item.d-flex.align-items-center.justify-content-between
  span {{ todoItem.text }}
  // DeleteTodoButton(@delete-todo-item="$emit('delete-todo-item')")
  DeleteTodoButton(@delete-todo-item='deleteTodoItem(this.todoItem)')
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
  inject: {
    deleteTodoItem: {
      type: Function,
      required: true,
    },
  },
};
</script>
