<template lang="pug">
h6.text-danger.d-flex.align-items-center.justify-content-end.gap-1.my-3(v-if="this.provideData.itemsList.length > 0")
  //span.fw-bold {{ itemCount }} 
  span.fw-bold {{ this.provideData.itemsList.length }} 
  span items will be bought
div.alert.alert-warning(v-else) There is no item to buy!
</template>

<script>
export default {
  name: "ResultBar",
  inject: {
    provideData: {
      type: Object,
      required: true,
    },
    /* itemCount: {
      type: Function,
      required: true,
    }, */
  },
};
</script>
