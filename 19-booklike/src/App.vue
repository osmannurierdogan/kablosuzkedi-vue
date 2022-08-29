<template lang="pug">
div
  //RouterLink(to="/" active-clas="router-link-exact-active") Home
  //span  | | 
  //RouterLink(to="/login" active-clas="router-link-exact-active") Login
  //span  | | 
  //RouterLink(to="/register" active-clas="router-link-exact-active") Register
  //span  | | 
  //RouterLink(to="/account" active-clas="router-link-exact-active") Account
  //span  | | 
  //RouterLink(to="/newbookmark" active-clas="router-link-exact-active") NewBookmark
  //span  | | 
  //RouterLink(to="/favorites" active-clas="router-link-exact-active") Favorites
  RouterView
</template>
<script>
export default {
  mounted() {
    this.$socket.on("NEW_BOOKMARK_ADDED");
    console.log("NEW_BOOKMARK_ADDED :>> ", () => {
      console.log("calistiasdasdasdasdsa");
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
