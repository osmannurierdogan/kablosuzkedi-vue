<template lang="pug">
h4.mb-4 New Bookmark
div.card.p-4
  div.mb-3
    label.form-label(for='bookmark-title') Title
    input#bookmark-title.form-control(type='text', placeholder='Type something...' v-model="userData.title")
  div.mb-3
    label.form-label(for='bookmark-url') URL
    input#bookmark-url.form-control(type='text', placeholder='https://...' v-model="userData.url")
  div.mb-3
    label.form-label(for='bookmark-description') Description
    textarea#bookmark-description.form-control(rows="3" placeholder='Give some details ...' v-model="userData.description")
  div.d-flex.align-items-center.justify-content-center.gap-2
    //button.btn.btn-lg.btn-danger(@click="$router.go(-1)") Cancel
    // ! @click="$router.go(-1)" geriye gider 
    button.btn.btn-lg.btn-danger(@click="$router.push({ name: 'Home' })") Cancel
    button.btn.btn-lg.btn-success(@click="onSave") Save
</template>
<script>
export default {
  name: "NewBookmarkView",
  data() {
    return {
      userData: {
        id: new Date().getTime(),
        title: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
    /* onSave() {
      console.log(this.userData);
      this.$axios
        .post("http://localhost:3000/bookmarks", this.userData)
        .then((save_response) => {
          console.log("save_response :>> ", save_response);
        }); */
    /* resetData() {
      Object.keys(this.userData).foreach((key) => (this.userData[key] = null));
    }, */
    onSave() {
      //console.log(this.userData);
      this.$appAxios.post("/bookmarks", this.userData).then((saveResponse) => {
        console.log("Save Response => ", saveResponse);
        //this.resetData();
        this.userData.title = null;
        this.userData.url = null;
        this.userData.description = null;
        this.userData.id = null;
        this.$router.push({ name: "Home" });
      });
    },
  },
};
</script>
