<template lang="pug">
ul.list-group
  ListItemComponent(v-for="item in this.provideData.itemsList" :key="item" :item="item")
</template>

<script>
import ListItemComponent from "@/components/ListItemComponent";
export default {
  name: "ListComponent",
  components: {
    ListItemComponent,
  },
  inject: {
    provideData: {
      type: Object,
      required: true,
    },
  },
};
</script>
