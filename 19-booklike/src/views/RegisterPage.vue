<template lang="pug">
div.login_register_container
  h3.text-2xl.text-center.mb-3 Register
  input.input.mb-3(v-model="this.userData.fullName" type='text', placeholder='Tam Ad')
  input.input.mb-3(v-model="this.userData.userName" type='text', placeholder='Kullanıcı Adı')
  input.input.mb-3(v-model="this.userData.password" type='password', placeholder='Şifre')
  button.default-button(@click="onSave") Register
  span.text-center.mt-3.text-sm
    span Already have a member? 
    RouterLink.ml-1.text-red-900(:to="{ name: 'Login' }" class='hover:text-black')  Log in
    //a.ml-1.text-red-900(href="/login" class='hover:text-black')  Log in
</template>
<script>
import { mapGetters } from "vuex";
import CryptoJs from "crypto-js";
export default {
  name: "RegisterPage",
  data() {
    return {
      userData: {
        userName: null,
        likes: [],
        bookmarks: [],
      },
    };
  },
  computed: {
    ...mapGetters({
      getSaltKey: "_getSaltKey",
    }),
  },
  methods: {
    hashPassword(password, key) {
      return CryptoJs.HmacSHA1(password, key).toString();
    },
    onSave() {
      const password = this.hashPassword(
        this.userData.password,
        //eslint-disable-next-line
        this.getSaltKey,
        //this.$store.getters._getSaltKey,
      );
      /* const password = CryptoJs.HmacSHA1(
        this.userData.password,
        //eslint-disable-next-line
        this.getSaltKey,
      ).toString(); */
      console.log("password :>> ", password);
      this.$appAxios.post("/users", { ...this.userData, password }).then(() => {
        this.$router.push({ name: "Home" });
      });
    },
  },
};
</script>
