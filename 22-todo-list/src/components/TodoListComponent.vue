<template lang="pug">
ul.list-group.my-3
  TodoListItemComponent(v-for="todo in todoList" :key="todo.id" :todo="todo" :removeTodo="removeTodo")
</template>
<script>
import TodoListItemComponent from "./TodoListItemComponent.vue";
//import { computed } from "vue";
export default {
  components: {
    TodoListItemComponent,
  },
  props: {
    todoList: {
      type: Array,
      required: true,
      default: () => [],
    },
    removeTodo: {
      type: Function,
      required: true,
    },
  },
  /* setup(props) {
    // context, props => parameters
    const todoLength = computed(() => props.todoList.length);
    return { todoLength };
  }, */
};
</script>
