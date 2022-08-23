<template lang="pug">
ul.list-group
  TodoItemComponent(v-for="todoItem in provideData.todoList" :key='todoItem.id' :todoItem='todoItem')
</template>

<script>
import TodoItemComponent from "@/components/TodoItemComponent";
export default {
  name: "TodoListComponent",
  components: {
    TodoItemComponent,
  },
  inject: {
    provideData: {
      type: Object,
      required: true,
    },
  },
};
</script>
