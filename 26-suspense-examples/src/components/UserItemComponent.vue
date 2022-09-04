<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template lang="pug">
li.list-group-item {{ user.name }}
</template>
