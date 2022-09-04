<script setup>
import AppHeading from "../ui/AppHeading.vue";
import InvoiceItemsList from "./invoiceList/InvoiceItemsList.vue";
</script>
<template lang="pug">
div.mt-5
  AppHeading(:title="'Fatura Kalemleri'")
  div.table-header.flex
    span.text-left.p-1.mr-2(class='w-[200px]') &Uuml;r&uuml;n Ad&imath;
    span.text-left.p-1.mr-2(class='w-[50px]') Adet
    span.text-left.p-1.mr-2(class='w-[100px]') Fiyat
    span.p-1(class='w-[100px]') Toplam
  InvoiceItemsList
</template>
