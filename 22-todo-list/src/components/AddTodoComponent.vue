<template lang="pug">
div.col-12.d-flex.align-items-center.justify-content-between
  //input.form-control.p-2(type="text" v-model="todoText" @keydown.enter="addTodoItemFunction(todoText)" placeholder="Add your todo...")
  input.form-control.w-100(type="text" @keydown.enter="addTodoItemFunction($event)" placeholder="Add your todo...")
  //button.btn.btn-success.ms-2 Add  
</template>
<script>
export default {
  props: {
    addTodoFunction: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const addTodoItemFunction = (event) => {
      props.addTodoFunction(event.target.value);
      event.target.value = "";
    };
    return {
      addTodoItemFunction,
    };
  },
};
</script>
