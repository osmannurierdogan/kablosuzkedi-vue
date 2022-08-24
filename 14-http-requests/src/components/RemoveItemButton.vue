<template lang="pug">
button.btn.btn-danger(@click="onDelete(this.item)") Remove
</template>

<script>
export default {
  name: "RemoveItemButton",
  props: {
    item: Object,
  },
  inject: {
    onDelete: {
      type: Function,
      required: true,
    },
  },
};
</script>
