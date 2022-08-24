<template lang="pug">
li.list-group-item.d-flex.align-items-center.justify-content-between
  span {{ item.title }}
  RemoveItemButton(:item="item")
</template>

<script>
import RemoveItemButton from "@/components/RemoveItemButton";
export default {
  name: "ListItemComponent",
  components: {
    RemoveItemButton,
  },
  props: {
    item: Object,
  },
};
</script>
