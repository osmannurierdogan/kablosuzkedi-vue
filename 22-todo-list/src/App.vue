<template lang="pug">
div.container.user-select-none
  div.row.m-5
    h2.text-center.mb-4 Todo List
    AddTodoComponent(:addTodoFunction="addTodo")
    TodoListComponent(:todoList="todoList" :removeTodo="removeTodo")
    TodoResultsComponent(:todoList="todoList")
    div.instructions.d-flex.align-items-center.justify-content-between.flex-column.mt-2.text-secondary
      small Press enter after writing your todo to add it. 
      small You can complete todo while clicking on it.
</template>
<script>
// setup
import AddTodoComponent from "./components/AddTodoComponent.vue";
import TodoListComponent from "./components/TodoListComponent.vue";
import TodoResultsComponent from "./components/TodoResultsComponent.vue";
import { ref } from "vue";

export default {
  components: {
    AddTodoComponent,
    TodoListComponent,
    TodoResultsComponent,
  },
  setup() {
    const todoList = ref([
      { id: 1, title: "Todo Item #1", completed: false },
      { id: 2, title: "Todo Item #2", completed: false },
      { id: 3, title: "Todo Item #3", completed: false },
      { id: 4, title: "Todo Item #4", completed: false },
      { id: 5, title: "Todo Item #5", completed: false },
    ]);
    const addTodo = (todoText) => {
      todoList.value.push({
        title: todoText,
        id: new Date().getTime(),
        completed: false,
      });
      todoText = null;
    };
    const removeTodo = (item) => {
      todoList.value = todoList.value.filter((t) => t.id !== item.id);
    };
    return {
      todoList,
      addTodo,
      removeTodo,
    };
  },
};
</script>

<style>
.user-select-none {
  user-select: none;
}
.cursor-pointer {
  cursor: pointer;
}
.completed-item {
  background-color: rgb(187, 255, 187);
}
.uncompleted-item {
  background-color: rgb(255, 188, 179);
}
</style>
