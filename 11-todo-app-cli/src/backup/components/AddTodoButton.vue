<template lang="pug">
button.btn.btn-success(@click="addTodoItem") Add
</template>

<script>
export default {
  name: "AddTodoButton",
  methods: {
    addTodoItem() {
      this.$emit("add-todo-item");
    },
  },
};
</script>
