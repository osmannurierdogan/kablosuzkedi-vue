<template lang="pug">
button.btn.btn-sm.btn-danger(@click="$emit('delete-todo-item')") Remove
</template>

<script>
export default {
  name: "DeleteTodoButton",
};
</script>
