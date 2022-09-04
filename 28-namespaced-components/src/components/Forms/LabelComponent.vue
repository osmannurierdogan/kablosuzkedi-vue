<template lang="pug">
//Slot
label {{ title }}
</template>
<script setup>
const props = defineProps({
  title: String,
});
</script>
