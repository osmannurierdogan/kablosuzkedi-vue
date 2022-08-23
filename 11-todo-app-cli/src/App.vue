<template lang="pug">
div.container
  div.row.m-5 
  h3.text-center.mb-4 Todo App
  AddTodoItemComponent
  hr.my-4
  TodoListComponent
  ResultBarComponent(:todoItemCount="this.provideData.todoList.length")
</template>

<script>
import AddTodoItemComponent from "@/components/AddTodoItemComponent.vue";
import TodoListComponent from "@/components/TodoListComponent.vue";
import ResultBarComponent from "@/components/ResultBarComponent.vue";
export default {
  name: "App",
  data() {
    return {
      provideData: {
        todoList: [
          { id: 1, text: "Todo Item #1", completed: false },
          { id: 2, text: "Todo Item #2", completed: false },
          { id: 3, text: "Todo Item #3", completed: false },
          { id: 4, text: "Todo Item #4", completed: false },
          { id: 5, text: "Todo Item #5", completed: false },
        ],
      },
    };
  },
  components: {
    AddTodoItemComponent,
    TodoListComponent,
    ResultBarComponent,
  },
  methods: {
    addTodoItem(data) {
      this.provideData.todoList.push({
        id: this.provideData.todoList.length + 1,
        text: data,
        completed: false,
      });
      data = null;
    },
    deleteTodoItem(item) {
      /* this.provideData.todoList = this.provideData.todoList.filter(
        (todo) => todo.id != item.id
      ); */
      this.provideData.todoList = this.provideData.todoList.filter(
        // eslint-disable-next-line
        (todo) => todo.id !== item.id,
      );
    },
  },
  provide() {
    return {
      provideData: this.provideData,
      deleteTodoItem: this.deleteTodoItem,
      addTodoItem: this.addTodoItem,
    };
  },
};
</script>
