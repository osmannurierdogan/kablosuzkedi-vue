<template lang="pug">
input.form-control.my-3(placeholder="What will you buy?" @keypress.enter="onSave")
</template>

<script>
export default {
  name: "AddItemSection",
  inject: {
    onSave: {
      type: Function,
      required: true,
    },
  },
};
</script>
