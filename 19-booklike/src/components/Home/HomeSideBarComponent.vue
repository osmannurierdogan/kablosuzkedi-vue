<template lang="pug">
aside.sidebar
  a.sidebar-item(href='#' @click="getBookmarksOfCategory(null), this.isActive = !this.isActive" :class="{'sidebar-item-active': this.isActive }")
    svg.fill-current.mr-3(xmlns='http://www.w3.org/2000/svg', height='24', viewBox='0 0 24 24', width='24')
      path(d='M0 0h24v24H0V0z', fill='none')
      path(d='M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z')
    span Show All
  a.sidebar-item(href='#' v-for="category in categoryList" :key="category.id" @click="getBookmarksOfCategory(category.id)" :class="{'sidebar-item-active' : isActive}")
    svg.fill-current.mr-3(xmlns='http://www.w3.org/2000/svg', height='24', viewBox='0 0 24 24', width='24')
      path(d='M0 0h24v24H0V0z', fill='none')
      path(d='M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z')
    span {{ category.name }}
</template>
<script>
export default {
  name: "SideBarComponent",
  data() {
    return {
      categoryList: [],
      isActive: true,
    };
  },
  created() {
    this.$appAxios.get("/categories").then((response) => {
      //console.log("category_response :>> ", response);
      this.categoryList = response.data;
    });
  },
  methods: {
    /* addActiveClassToItem(category) {
      this.categoryList.forEach((categoryItem) => {
        if (categoryItem?.id === category?.id) {
          this.isActive = true;
        } else {
          this.isActive = false;
        }
      });
      return this.isActive;
    }, */
    getBookmarksOfCategory(categoryId) {
      this.$store.commit("_changeBookmarksOfCategory", categoryId);
    },
  },
};
</script>
