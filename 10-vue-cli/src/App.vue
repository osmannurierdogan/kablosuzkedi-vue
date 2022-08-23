<template lang="pug">
AppHeader
div.container
  div.row.m-5
    CounterItem
</template>

<script>
import CounterItem from "@/components/CounterItem.vue";
export default {
  name: "App",
  components: {
    CounterItem,
  },
};
</script>
<style lang="scss"></style>
