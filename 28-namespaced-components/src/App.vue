<script setup>
// import SelectComponent from "./components/Forms/SelectComponent.vue";
// import LabelComponent from "./components/Forms/LabelComponent.vue";
// import InputComponent from "./components/Forms/InputComponent.vue";
import * as Form from "./components/form-components.js";
</script>

<template lang="pug">
div.container
  div.row.m-5
    div.col-sm-12.d-flex.gap-3
      Form.Label(title="Title")
      Form.Input
      Form.Label(title="Kategori")
      Form.Select
</template>
