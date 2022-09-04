<template lang="pug">
button.mt-4.add-item-button(@click="AddInvoiceItemToList")
  svg.fill-current(xmlns='http://www.w3.org/2000/svg' height='24' viewbox='0 0 24 24' width='24')
    path(d='M0 0h24v24H0V0z' fill='none')
    path(d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z')
  span.text-gray-400 Ekle
</template>
<script setup>
import { inject } from "vue";

const AddInvoiceItemToList = inject("AddInvoiceItemToList");
</script>
