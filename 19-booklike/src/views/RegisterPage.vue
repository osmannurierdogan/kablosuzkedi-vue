<template lang="pug">
div.login_register_container
  h3.text-2xl.text-center.mb-3 Register
  input.input.mb-3(v-model="this.userData.userName" type='text', placeholder='Tam Ad')
  input.input.mb-3(v-model="this.userData.fullName" type='text', placeholder='Kullanıcı Adı')
  input.input.mb-3(v-model="this.userData.password" type='password', placeholder='Şifre')
  button.default-button(@click="onSave") Register
  span.text-center.mt-3.text-sm
    | Already have a member?
    RouterLink(:to="{name: 'Login'}").text-red-900(href='#', class='hover:text-black')  Log in
</template>
<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      userData: {
        userName: null,
        fullName: null,
        password: null,
      },
    };
  },
  methods: {
    onSave() {
      this.$appAxios.post("/users", this.userData).then((response) => {
        console.log("response :>> ", response);
        this.$router.push({ name: "Home" });
      });
    },
  },
};
</script>
