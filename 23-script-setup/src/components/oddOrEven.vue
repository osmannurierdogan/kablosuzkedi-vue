<template lang="pug">
h1 {{ result }}
h3 {{ counter }}
</template>

<script setup>
import { computed, watch } from "vue";
const props = defineProps({ counter: Number });
const emit = defineEmits({
  OddEvent: "OddEvent",
});
const result = computed(() => {
  return props.counter % 2 === 1 ? "Odd" : "Even";
});
watch(result, (result) => {
  if (result === "Odd") {
    emit("OddEvent", true);
  }
});
</script>
