<script setup>
import SideBarHeading from "../ui/SideBarHeading.vue";
import { inject, computed } from "vue";
const invoiceList = inject("invoiceList");
/* const contactName = computed((item) => {
  //console.log("item :>> ", item);
  invoiceList.value.forEach((invoice) => {
    return item.id === invoice.id ? item.contactName : "ERROR";
  });
});
const contactId = computed((item) => {
  //console.log("item :>> ", item);
  invoiceList.value.forEach((invoice) => {
    return item.id === invoice.id ? item.id.toString().slice(0, 4) : "ERROR";
  });
}); */
/* const getContactName = (item) => {
  invoiceList.value.forEach((invoice) => {
    return item.id === invoice.id ? this.item.contactInfo.contactName : "ERROR";
  });
};
const getContactId = (item) => {
  invoiceList.value.forEach((invoice) => {
    return item.id === invoice.id ? this.item.id.toString().slice(0, 4) : "ERROR";
  });
}; */
/* const contactName = computed(getContactName);
const contactId = computed(getContactId); */
</script>
<template lang="pug">
aside.bg-gray-700.h-screen(class='w-[400px]')
  SideBarHeading(title="Fatura Listesi")
  div.flex.justify-between.items-center.p-2(v-for='item in invoiceList' :key='item.id' class='odd:bg-gray-600')
    //span # {{ index + 1 }}
    span # {{ item.id}}
    span {{ item.contactInfo.contactName }}
    //span # {{ getContactId(item) || item.contactInfo.contactName }}
    //span {{ getContactName(item) || item.id }}
    span
      button.danger-button.mr-1
        img.fill-current(src="../../assets/trash-outline.svg" width="16" height="16")
      button.purple-button
        img.fill-current(src="../../assets/eye-outline.svg" width="16" height="16")
</template>
