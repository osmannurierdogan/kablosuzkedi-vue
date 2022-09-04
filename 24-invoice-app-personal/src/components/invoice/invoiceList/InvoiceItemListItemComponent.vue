<template lang="pug">
div.table-body-item.group
  input.input.mr-2(autocomplete='off' type='text' class='w-[200px]' v-model="invoiceItem.name")
  input.input.mr-2(autocomplete='off' type='text' class='w-[50px]' v-model="invoiceItem.quantity")
  input.input.mr-2(autocomplete='off' type='text' class='w-[100px]' v-model="invoiceItem.price")
  span.p-1.text-center.text-gray-400 ${{ totalCostOfItem }}
  div.text-right.flex-grow
    button.delete-button(@click="DeleteInvoiceItemFromList(invoiceItem)")
      svg.fill-current(xmlns='http://www.w3.org/2000/svg' height='24' viewbox='0 0 24 24' width='24')
        path(d='M0 0h24v24H0V0z' fill='none')
        path(d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z')
</template>
<script setup>
import { computed, inject } from "vue";
const props = defineProps({
  invoiceItem: {
    type: Object,
    required: true,
  },
});
const totalCostOfItem = computed(() => {
  props.invoiceItem.total =
    props.invoiceItem.quantity * props.invoiceItem.price;
  return props.invoiceItem.total;
});
const DeleteInvoiceItemFromList = inject("DeleteInvoiceItemFromList");
</script>
