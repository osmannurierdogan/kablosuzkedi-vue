<template lang="pug">
div.card.border.p-2
  div.mb-3.d-flex.justify-content-end
    button.btn.btn-primary(@click="$router.push({ name: 'NewBookmark' })") + Add New
  table.table.table-hover
    thead
      tr
        th(scope="col") #
        th(scope="col") Title
        th(scope="col") URL
        th(scope="col")
    tbody
      tr(v-for="i in 10" :key="i")
        th(scope="row") {{ i }}
        td Vue 3 Docs
        td https://v3.vuejs.org
        td
          button.btn.btn-danger Delete
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  created() {
    this.$axios.get("http://localhost:3000/bookmark-list").then((response) => {
      console.log("response :>> ", response);
    });
  },
};
</script>
