<template lang="pug">
div.table-body
  InvoiceItemListItemComponent(v-for="invoiceItem in invoiceItems" :key="invoiceItem.id" :invoiceItem="invoiceItem")
  AddInvoiceItemButtonComponent
</template>
<script setup>
import AddInvoiceItemButtonComponent from "../../ui/AddInvoiceItemButtonComponent.vue";
import InvoiceItemListItemComponent from "../invoiceList/InvoiceItemListItemComponent.vue";
import { inject } from "vue";
const invoiceItems = inject("invoiceItems"); 
</script>
