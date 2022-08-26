<template lang="pug">
HeaderComponent
div.flex.flex-row
  AccountSideBarComponent
  div.account_container.mx-auto.flex.flex-col(class='w-1/4')
    h3.text-2xl.text-center.mb-3 Hesab&imath;m
    input.input.mb-3(type='text', placeholder='Tam Ad')
    input.input.mb-3(type='text', placeholder='Kullanıcı Adı')
    input.input.mb-3(type='password', placeholder='Şifre')
    button.default-button Kaydet
</template>
<script>
import AccountSideBarComponent from "@/components/Account/AccountSideBarComponent";
export default {
  name: "FavoritesPage",
  components: {
    AccountSideBarComponent,
  },
};
</script>
