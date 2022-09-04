<template lang="pug">
h3.text-gray-400.text-xl {{ title }}
hr.bg-gradient-to-r.border-none.from-gray-700.mb-2(class='h-[1px]')
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
