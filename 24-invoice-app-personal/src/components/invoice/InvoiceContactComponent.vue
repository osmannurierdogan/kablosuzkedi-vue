<template lang="pug">
// Fatura Bilgileri
div
  AppHeading(:title="'Fatura Bilgileri'")
  //pre {{ contact }}
  label.flex.flex-col.text-gray-400.mb-2(for='client_name')
    small.mb-1 M&uuml;&scedil;teri Ad&imath;
    input#client_name.input(autocomplete='off' type='text' v-model="contact.contactName")
  label.flex.flex-col.text-gray-400.mb-2(for='client_email')
    small.mb-1 E-posta
    input#client_email.input(autocomplete='off' type='email' v-model="contact.email")
  div.grid.grid-cols-3.gap-5
    label.flex.flex-col.text-gray-400.mb-2(for='city')
      small.mb-1 &Scedil;ehir
      input#city.input(autocomplete='off' type='text' v-model="contact.city")
    label.flex.flex-col.text-gray-400.mb-2(for='zip_code')
      small.mb-1 Posta Kodu
      input#zip_code.input(autocomplete='off' type='text' v-model="contact.zipCode")
    label.flex.flex-col.text-gray-400.mb-2(for='country')
      small.mb-1 &Uuml;lke
      input#country.input(autocomplete='off' type='text' v-model="contact.country")
</template>
<script setup>
import AppHeading from "../ui/AppHeading.vue";
import { inject } from "vue";
const contact = inject('contactInfo');
</script>
