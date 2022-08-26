<template lang="pug">
div.login_register_container
  h3.text-2xl.text-center.mb-3 Yeni Ekle
  input.input.mb-3(type='text', placeholder='Başlık' v-model="newBookmarkData.title")
  input.input.mb-3(type='text', placeholder='URL' v-model="newBookmarkData.url")
  select.input.mb-3(v-model="newBookmarkData.category")
    option(disabled='', value='', selected='') Kategori
    option(value='Vue.js') Vue.js
    option(value='React.js') React.js
    option(value='Social') Social
  textarea.input.mb-3(placeholder='Açıklama', cols='30', rows='10' v-model="newBookmarkData.description")
  div.flex.items-center.justify-end.gap-x-1
    button.secondary-button(@click="$router.go(-1)") &Idot;ptal
    button.default-button(@click="saveBookmark") Kaydet
</template>
<script>
export default {
  name: "NewBookmarkPage",
  data() {
    return {
      newBookmarkData: {
        title: null,
        url: null,
        category: null,
        description: null,
      },
    };
  },
  methods: {
    saveBookmark() {
      this.$appAxios.post("/bookmarks", this.newBookmarkData).then(() => {
        this.newBookmarkData.title = null;
        this.newBookmarkData.url = null;
        this.newBookmarkData.category = null;
        this.newBookmarkData.description = null;
        this.$router.push({ name: "Home" });
      });
    },
  },
};
</script>
