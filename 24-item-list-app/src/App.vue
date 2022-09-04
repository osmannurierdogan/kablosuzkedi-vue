<script setup>
import AppSideBarComponent from "./components/sidebar/AppSideBarComponent.vue";
import AppInvoiceContent from "./components/invoice/AppInvoiceContent.vue";
import { ref, provide } from "vue";
const invoiceList = ref([]);
const SaveInvoice = (invoice) => {
  invoiceList.value.push(invoice);
  console.log("invoiceList.value :>> ", invoiceList.value);
};
const UpdateInvoice = (invoiceList) => {
  invoiceList.value = invoiceList;
};
provide("SaveInvoice", SaveInvoice);
provide("UpdateInvoice", UpdateInvoice);
provide("invoiceList", invoiceList);
</script>

<template lang="pug">
div.w-screen.bg-gray-800.flex.flex-row.text-white.items-start.justify-center
  AppSideBarComponent
  AppInvoiceContent
</template>
