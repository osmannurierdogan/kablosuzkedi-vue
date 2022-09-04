<script setup>
import { defineAsyncComponent, onErrorCaptured } from "@vue/runtime-core";
import { ref } from "vue";
//import TodosComponent from "./components/TodosComponent.vue";
//import UsersComponent from "./components/UsersComponent.vue";
const err = ref(null);
const TodosComponent = defineAsyncComponent(() =>
  import("./components/TodosComponent.vue")
);
const UsersComponent = defineAsyncComponent(() =>
  import("./components/UsersComponent.vue")
);
onErrorCaptured((e) => {
  err.value = e;
  return true;
});
console.log("err => ", err.value);
</script>

<template lang="pug">
div.container
  div.row.m-5
    div.col-sm-12.d-flex.justify-content-between.gap-3
      span(v-if="err").alert.alert-danger {{ err }}
      Suspense(v-else)
        Dashboard
          UsersComponent
          hr
          TodosComponent
        template(#fallback)
          div.alert.alert-warning Loading...
</template>
