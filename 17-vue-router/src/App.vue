<template lang="pug">
div.container
  div.row.m-5
    div.col-sm-12.d-flex.align-items-center.justify-content-between.mb-5
      RouterLink.navigation-link(to="/" active-class="navigation-link--active") Home
      RouterLink.navigation-link(to="/about" active-class="navigation-link--active") About
      RouterLink.navigation-link(to="/contact" active-class="navigation-link--active") Contact
      //RouterLink.navigation-link(to="/details" active-class="navigation-link--active") Details
    RouterView
</template>

<script>
/* import HomePage from "@/views/HomePage";
import AboutPage from "@/views/AboutPage";
import ContactPage from "@/views/ContactPage"; */
export default {
  name: "App",
  components: {
    /* HomePage,
    AboutPage,
    ContactPage, */
  },
};
</script>
<style lang="scss" scoped>
.navigation-link {
  padding: 5px 10px;
  text-decoration: none;
  border: #fa6558 2px solid;
  color: #fa6558;
  font-weight: bold;
  &--active {
    background-color: #fa6558;
    color: #ffffff;
  }
}
</style>
