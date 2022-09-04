<template lang="pug">
h3.text-2xl.font-bold.mt-2.p-2 {{ title }}
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
