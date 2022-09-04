<script setup>
import { ref, reactive, watch } from "vue";
import OddOrEven from "./components/oddOrEven.vue";
import Utils from "./composables/Utils";
const { title, counter, increase, alertMe } = Utils();

//const firstName = ref("");
//const lastName = ref("");
const state = reactive({
  personal: {
    firstName: null,
    lastName: null,
  },
  itemList: [],
});
//const itemList = ref([])
watch(
  () => JSON.parse(JSON.stringify(state.personal)),
  (newPersonal, oldPersonal) => {
    console.log(oldPersonal, " :>> ", newPersonal);
  },
);
</script>

<template lang="pug">
div.container
  div.row.m-5
    div.col-12
      h3 {{ title }}
      input(v-model="title" type="text")
      button.btn.btn-danger(@click="increase") {{ counter }}
    OddOrEven(:counter="counter" @OddEvent="alertMe")
  hr
  div.row.m-5
    h1 User App
    div.d-flex.gap-2
      input(v-model="state.personal.firstName" type="text")
      input(v-model="state.personal.lastName" type="text")
    pre {{ state.personal }}
</template>
