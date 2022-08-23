<template lang="pug">
button.btn.btn-success(@click="$emit('add-todo-item')") Add
</template>

<script>
export default {
  name: "AddTodoButton",
};
</script>
