<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
</script>

<template lang="pug">
li.list-group-item {{ todo.title }}
</template>
