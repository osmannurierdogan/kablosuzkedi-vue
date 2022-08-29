<template lang="pug">
HeaderComponent
div.flex.flex-row
  AccountSideBarComponent
  Component(:is="$route.meta.componentName" :bookmarkList="getBookmarkList" v-if="getBookmarkList.length > 0")
  //AppBookmarkListComponent
  //AppBookmarkListComponent(:bookmarkList="bookmarkList" v-if="bookmarkList.length > 0")
  div(v-else) There is no bookmark
  //div.account_container.mx-auto.flex.flex-col(class='w-1/4')
    h3.text-2xl.text-center.mb-3 Hesab&imath;m
    input.input.mb-3(type='text', placeholder='Tam Ad')
    input.input.mb-3(type='text', placeholder='Kullanıcı Adı')
    input.input.mb-3(type='password', placeholder='Şifre')
    button.default-button Kaydet
</template>
<script>
import { mapGetters } from "vuex";
import AccountSideBarComponent from "@/components/Account/AccountSideBarComponent";
import UserSettingsComponent from "@/components/Account/UserSettingsComponent";
export default {
  name: "FavoritesPage",
  components: {
    AccountSideBarComponent,
    UserSettingsComponent,
  },
  data() {
    return {
      bookmarkList: [],
    };
  },
  computed: {
    ...mapGetters({
      getBookmarkList: "_getCategoryAndUserData",
      getCurrentUserId: "_getCurrentUserId",
    }),
  },
  created() {
    this.$appAxios
      .get(
        //eslint-disable-next-line
        `/bookmarks?_expand=category&_expand=user&userId=${this.getCurrentUserId}`,
      )
      .then((response) => {
        //console.log("response :>> ", response);
        //this.bookmarkList = response.data;
        //console.log("response :>> ", response);
        this.$store.commit("_setBookmarkList", response?.data || []);
      });
  },
};
</script>
