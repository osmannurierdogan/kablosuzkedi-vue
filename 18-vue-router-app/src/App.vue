<template lang="pug">
div.container
  div.row.m-5
    h3.text-center.mb-4 Bookmark App
    //div.col-sm-12.d-flex.align-items-center.justify-content-between.mb-5
      RouterLink.navigation-link(to="/" active-class="navigation-link--active") Home
      RouterLink.navigation-link(to="/about" active-class="navigation-link--active") About
      RouterLink.navigation-link(to="/new-bookmark" active-class="navigation-link--active") New Bookmark
    RouterView
</template>

<style lang="scss">
.navigation-link {
  text-decoration: none;
  font-weight: bold;
  color: #42b983;
  border: 3px solid #42b983;
  padding: 5px 10px;
  background-color: #2c3e50;
  &:hover {
    background-color: #42b983;
    color: #2c3e50;
    border-color: #2c3e50;
  }
  &--active {
    background-color: #42b983;
    border-color: #2c3e50;
    color: #2c3e50;
    &:hover {
      background-color: #2c3e50;
      color: #42b983;
      border-color: #42b983;
    }
  }
}
</style>
