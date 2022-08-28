<template lang="pug">
//h3 Bookmark List Component
div.flex.flex-row
  div
    div(class="p-2 grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4")
      AppBookmarkItemComponent(v-for="bookmark in bookmarkList" :key="bookmark.id" :bookmarkItem="bookmark")
</template>
<script>
import AppBookmarkItemComponent from "./AppBookmarkItemComponent.vue";
export default {
  name: "AppBookmarkListComponent",
  components: {
    AppBookmarkItemComponent,
  },
  props: {
    bookmarkList: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
