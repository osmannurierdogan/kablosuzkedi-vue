<template lang="pug">
div.container
  div.row.m-5 
  h3.text-center.mb-4 Todo App
  AddTodoItemComponent(@add-todo="addTodoItem")
  hr.my-4
  TodoListComponent(:todoList='this.todoList' @delete-todo-item="deleteTodoItem($event)")
  ResultBarComponent(:todoItemCount="this.todoList.length")
</template>

<script>
import AddTodoItemComponent from "@/components/AddTodoItemComponent.vue";
import TodoListComponent from "@/components/TodoListComponent.vue";
import ResultBarComponent from "@/components/ResultBarComponent.vue";
export default {
  name: "App",
  data() {
    return {
      todoList: [
        { id: 1, text: "Todo Item #1", completed: false },
        { id: 2, text: "Todo Item #2", completed: false },
        { id: 3, text: "Todo Item #3", completed: false },
        { id: 4, text: "Todo Item #4", completed: false },
        { id: 5, text: "Todo Item #5", completed: false },
      ],
    };
  },
  components: {
    AddTodoItemComponent,
    TodoListComponent,
    ResultBarComponent,
  },
  methods: {
    addTodoItem(data) {
      this.todoList.push({
        id: this.todoList.length + 1,
        text: data,
        completed: false,
      });
    },
    deleteTodoItem(item) {
      this.todoList = this.todoList.filter((todo) => todo.id != item.id);
    },
  },
};
</script>
