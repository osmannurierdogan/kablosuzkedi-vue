<template lang="pug">
div.login_register_container
  h3.text-2xl.text-center.mb-3 Yeni Ekle
  input.input.mb-3(ref="title" type='text', placeholder='Başlık' v-model="newBookmarkData.title")
  input.input.mb-3(type='text', placeholder='URL' v-model="newBookmarkData.url")
  select.input.mb-3(v-model="newBookmarkData.categoryId")
    option(disabled='', value='', selected='') Kategori
    option(v-for="categoryItem in categoryList" :key="categoryItem.id" :value='categoryItem.id') {{ categoryItem.name }}
  textarea.input.mb-3(placeholder='Açıklama', cols='30', rows='10' v-model="newBookmarkData.description")
  div.flex.items-center.justify-end.gap-x-1
    button.secondary-button(@click="$router.go(-1)") &Idot;ptal
    button.default-button(@click="saveBookmark") Kaydet
</template>
<script>
/* eslint-disable */
import { mapGetters } from "vuex";
export default {
  name: "NewBookmarkPage",
  data() {
    return {
      newBookmarkData: {
        title: null,
        url: null,
        categoryId: null,
        description: null,
      },
      categoryList: [],
    };
  },
  methods: {
    saveBookmark() {
      const bookmarkUpdatedData = {
        ...this.newBookmarkData,
        userId: this.getCurrentUser?.id,
        created_at: new Date(),
      };
      this.$appAxios
        .post("/bookmarks", bookmarkUpdatedData)
        .then((saveBookmarkResponse) => {
          Object.keys(this.newBookmarkData)?.forEach(
            (field) => (this.newBookmarkData[field] = null),
          );
          console.log("saveBookmarkResponse :>> ", saveBookmarkResponse);
          this.$socket.emit("NEW_BOOKMARK_EVENT", saveBookmarkResponse.data);
          this.$router.push({ name: "Home" });
        });
    },
  },
  computed: {
    ...mapGetters({
      getCurrentUser: "_getCurrentUser",
    }),
  },
  mounted() {
    this.$appAxios.get("/categories").then((response) => {
      //console.log("response :>> ", response);
      //console.log("this.getCurrentUser :>> ", this.getCurrentUser);
      this.categoryList = response?.data || [];
    });
    //console.log("this.$refs.title :>> ", this.$refs.title);
  },
};
</script>
