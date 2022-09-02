<template lang="pug">
div.item-counts.d-flex.align-items-center.justify-content-between
  small.text-danger #[span.fw-bold {{ unCompletedItemCount }}] uncompleted items
  small.text-success #[span.fw-bold {{ completedItemCount }}] completed items  
</template>
<script>
import { computed } from "vue";
export default {
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const completedItemCount = computed(() => {
      return props.todoList.filter((todo) => todo.completed).length;
    });
    const unCompletedItemCount = computed(() => {
      return props.todoList.filter((todo) => !todo.completed).length;
    });
    return {
      unCompletedItemCount,
      completedItemCount,
    };
  },
};
</script>
