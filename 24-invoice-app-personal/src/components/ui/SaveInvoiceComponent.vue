<template lang="pug">
div.actionbar.text-right.my-5
  button.purple-button(@click="OnSubmit") Kaydet
</template>
<script setup>
import { inject } from "vue";
const OnSubmit = inject("OnSubmit");
</script>
