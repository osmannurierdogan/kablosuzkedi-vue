<template lang="pug">
HeaderComponent
div.flex.flex-row
  HomeSideBarComponent
  AppBookmarkListComponent(:bookmarkList="getBookmarkList" v-if="getBookmarkList.length > 0")
  div(v-else) There is no bookmark
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "HomePage",
  components: {},
  data() {
    return {
      bookmarkList: [],
    };
  },
  computed: {
    ...mapGetters({
      getBookmarkList: "_getCategoryAndUserData",
    }),
  },
  created() {
    this.$appAxios
      .get("/bookmarks?_expand=category&_expand=user")
      .then((response) => {
        //console.log("response :>> ", response);
        //this.bookmarkList = response.data;
        //console.log("response :>> ", response);
        this.$store.commit("_setBookmarkList", response?.data || []);
      });
  },
  /* methods: {
    updateStoreBookmarkList(categoryId) {
      const url = categoryId
        ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`
        : "/bookmarks?_expand=category&_expand=user";
      this.$appAxios.get(url).then((response) => {
        this.$store.commit("_setBookmarkList", response?.data);
      });
    },
  }, */
};
</script>
