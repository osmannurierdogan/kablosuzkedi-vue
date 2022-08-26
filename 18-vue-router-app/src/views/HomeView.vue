<template lang="pug">
div.card.border.p-2
  div.mb-3.d-flex.justify-content-end
    button.btn.btn-primary(@click="$router.push({ name: 'NewBookmark' })") + Add New
  table.table.table-hover(v-if="this.bookmarkListLength > 0")
    thead
      tr
        th(scope="col") #
        th(scope="col") Title
        th(scope="col") URL
        th(scope="col")
    tbody
      tr(v-for="(bookmarkItem, index) in bookmarkList" :key="bookmarkItem.id")
        th(scope="row") {{ index + 1  }}
        td {{ bookmarkItem.title }}
        td 
          a(:href='bookmarkItem.url') {{ bookmarkItem.url }}
        td
          button.btn.btn-danger(@click="deleteItem(bookmarkItem)") Delete
  div.alert.alert-danger(v-else) There is no bookmark added.
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      bookmarkList: [],
    };
  },
  components: {},
  created() {
    this.$appAxios.get("/bookmarks").then((bookmark_list_response) => {
      //console.log("bookmark_list_response :>> ", bookmark_list_response);
      this.bookmarkList = bookmark_list_response.data;
    });
  },
  computed: {
    bookmarkListLength() {
      return this.bookmarkList.length;
    },
  },
  methods: {
    deleteItem(item) {
      this.$appAxios.delete(`/bookmarks/${item.id}`).then((delete_response) => {
        console.log("delete_response :>> ", delete_response);
        if (delete_response.status === 200) {
          this.bookmarkList = this.bookmarkList.filter(
            // eslint-disable-next-line
            (bookmark) => item.id !== bookmark.id,
          );
        }
      });
    },
  },
};
</script>
