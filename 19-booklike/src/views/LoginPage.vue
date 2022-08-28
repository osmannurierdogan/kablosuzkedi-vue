<template lang="pug">
div.login_register_container
  h3.text-2xl.text-center.mb-3 Login
  input.input.mb-3(v-model="userData.userName" type='text', placeholder='Kullanıcı Adı')
  input.input.mb-3(v-model="userData.password" type='password', placeholder='Şifre')
  button.default-button(@click="onSubmit") Giri&scedil; yap
  span.text-center.mt-3.text-sm
    | &Uuml;ye de&gbreve;ilim,
    a.text-red-900(href='#', class='hover:text-black') &Uuml;ye olmak istiyorum!
</template>
<script>
import CryptoJs from "crypto-js";
import { mapGetters } from "vuex";
export default {
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
    onSubmit() {
      const userName = this.userData.userName;
      const password = CryptoJs.HmacSHA1(
        this.userData.password,
        //eslint-disable-next-line
        this.getSaltKey,
      ).toString();
      this.$appAxios
        .get(`/users?userName=${userName}&password=${password}`)
        .then((response) => {
          response?.data?.length > 0
            ? this.$store.commit("_setUser", response.data[0]) &
              this.$router.push({ name: "Home" })
            : alert("No user found");
        });
    },
  },
  computed: {
    ...mapGetters({
      getSaltKey: "_getSaltKey",
    }),
  },
};
</script>
