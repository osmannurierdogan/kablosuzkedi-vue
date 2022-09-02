<template lang="pug">
li.cursor-pointer.list-group-item.d-flex.align-items-center.justify-content-between(:class="{ 'completed-item' : todo.completed, 'uncompleted-item': !todo.completed }" @click="todo.completed = !todo.completed") 
  div
    input.me-2(type="checkbox" :checked="todo.completed")
    span(@click="completeTodoItem") {{ todo.title }}
  button.btn.btn-danger(@click="removeTodoItem(todo)") Remove  
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
      default: {},
    },
    removeTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const removeTodoItem = (todo) => {
      props.removeTodo(todo);
    };
    return { removeTodoItem };
  },
};
</script>
