<template lang="pug">
section.bg-gray-900.mx-auto.my-10.p-2.px-5.rounded-md.shadow-2xl(class='w-1/3')
  InvoiceContactComponent
  InvoiceDetailsComponent
  InvoiceSummaryComponent
  SaveInvoiceComponent
</template>
<script setup>
import InvoiceContactComponent from "./InvoiceContactComponent.vue";
import InvoiceDetailsComponent from "./InvoiceDetailsComponent.vue";
import InvoiceSummaryComponent from "./InvoiceSummaryComponent.vue";
import SaveInvoiceComponent from "../ui/SaveInvoiceComponent.vue";
import { reactive, provide, inject } from "vue";
const SaveInvoice = inject("SaveInvoice");
const UpdateInvoice = inject("UpdateInvoice");
const state = reactive({
  id: null,
  createdAt: null,
  contactInfo: {
    contactName: null,
    email: null,
    city: null,
    country: null,
    zipCode: null,
  },
  invoiceItems: [],
});
const AddInvoiceItemToList = () => {
  state.invoiceItems.push({
    id: new Date().getTime(),
    name: null,
    quantity: null,
    price: null,
    total: 0,
  });
  //console.log("state.invoiceItems.length :>> ", state.invoiceItems.length);
};
const DeleteInvoiceItemFromList = (item) => {
  state.invoiceItems = state.invoiceItems.filter((i) => i.id !== item.id);
  /*console.log(
    "state.invoiceItems :>> ",
    JSON.parse(JSON.stringify(state.invoiceItems)),
  );*/
};
const OnSubmit = () => {
  console.log("state :>> ", state);
  SaveInvoice({ ...state, createdAt: new Date(), id: new Date().getTime() });
  state.contactInfo = {
    contactName: null,
    email: null,
    city: null,
    country: null,
    zipCode: null,
  };
  state.invoiceItems = [];
  console.log("state.contactInfo :>> ", state.contactInfo);
  console.log("state.invoiceItems :>> ", state.invoiceItems);
};
provide("contactInfo", state.contactInfo);
provide("invoiceItems", state.invoiceItems);
provide("AddInvoiceItemToList", AddInvoiceItemToList);
provide("DeleteInvoiceItemFromList", DeleteInvoiceItemFromList);
provide("OnSubmit", OnSubmit);
</script>
