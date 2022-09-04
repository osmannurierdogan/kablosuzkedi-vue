<template lang="pug">
div.summary.mt-5.flex.justify-end.items-end
  div.text-right.mr-2
    div.text-gray-500 Ara Toplam :
    div.text-gray-400 KDV Toplam :
    div.text-gray-300 Genel Toplam :
  div.text-right
    div.text-gray-500 ${{ subTotal }}
    div.text-gray-400 ${{ taxTotal }}
    div.text-gray-300 ${{ total }}
hr.bg-gradient-to-r.border-none.from-gray-700.mt-5(class='h-[1px]')
</template>
<script setup>
import { inject, computed } from "vue";
const invoiceItems = inject("invoiceItems");
const subTotal = computed(() => invoiceItems.reduce((t, i) => t + i.total, 0));
const taxTotal = computed(() => subTotal.value * 0.18);
const total = computed(() => subTotal.value + taxTotal.value);
/* const calculateSubTotalOfInvoice = () => {
  let subTotal = 0;
  invoiceItems.forEach((item) => (subTotal += item.total));
  return subTotal;
};
const getSubTotalOfInvoice = computed(calculateSubTotalOfInvoice);

const calculateVATPriceOfInvoice = () => {
  return calculateSubTotalOfInvoice().toFixed(3) * 0.18;
};
const getVATPriceOfInvoice = computed(calculateVATPriceOfInvoice);

const calculateTotalPriceOfInvoice = () => {
  return calculateSubTotalOfInvoice() + calculateVATPriceOfInvoice();
};
const getTotalPriceOfInvoice = computed(calculateTotalPriceOfInvoice); */
</script>
