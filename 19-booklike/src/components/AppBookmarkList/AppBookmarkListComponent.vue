<template lang="pug">
//h3 Bookmark List Component
div.flex.flex-row
  div
    div.p-2.grid.grid-cols-8.gap-4
      AppBookmarkItemComponent(v-for="bookmark in bookmarks" :key="bookmark.id" :bookmarkItem="bookmark")
</template>
<script>
import AppBookmarkItemComponent from "./AppBookmarkItemComponent.vue";
export default {
  name: "AppBookmarkListComponent",
  components: {
    AppBookmarkItemComponent,
  },
  data() {
    return {
      bookmarks: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks").then((response) => {
      //console.log("response :>> ", response);
      this.bookmarks = response.data;
    });
  },
};
</script>
