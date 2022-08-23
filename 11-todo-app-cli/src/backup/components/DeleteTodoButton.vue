<template lang="pug">
// button.btn.btn-sm.btn-danger(@click='$emit('delete-todo-item')') Remove
button.btn.btn-sm.btn-danger(@click='deleteTodoItem') Remove
</template>

<script>
export default {
  name: "DeleteTodoButton",
  methods: {
    deleteTodoItem() {
      this.$emit("delete-todo-item");
    },
  },
};
</script>
