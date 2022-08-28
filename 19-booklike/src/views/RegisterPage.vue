<template lang="pug">
div.login_register_container
  h3.text-2xl.text-center.mb-3 Register
  input.input.mb-3(v-model="this.userData.fullName" type='text', placeholder='Tam Ad')
  input.input.mb-3(v-model="this.userData.userName" type='text', placeholder='Kullanıcı Adı')
  input.input.mb-3(v-model="this.userData.password" type='password', placeholder='Şifre')
  button.default-button(@click="onSave") Register
  span.text-center.mt-3.text-sm
    | Already have a member?
    RouterLink(:to="{name: 'Login'}").ml-1.text-red-900(href='#', class='hover:text-black')  Log in
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
        password: null,
        likes: [],
        bookmarks: [],
      },
    };
  },
  methods: {
    /* hashPassword(password, key, cycleNumber) {
      let newPassword;
      for (let i = 0; i < cycleNumber; i++) {
        newPassword = CryptoJs.AES.encrypt(password, key).toString();
      }
      return newPassword;
    }, */
    onSave() {
      /* const password = this.hashPassword(
        this.userData.password,
        this.getSaltKey,
        //eslint-disable-next-line
        10,
      ); */
      const password = CryptoJs.HmacSHA1(
        this.userData.password,
        //eslint-disable-next-line
        this.getSaltKey,
      ).toString();
      this.$appAxios.post("/users", { ...this.userData, password }).then(() => {
        this.$router.push({ name: "Home" });
      });
    },
    computed: {
      ...mapGetters({
        getSaltKey: "_getSaltKey",
      }),
    },
  },
};
</script>
