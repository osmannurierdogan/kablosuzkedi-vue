<template lang="pug">
div.container
  div.row.m-5
    div.my-3.d-flex.align-items-center.justify-content-center
      button.btn.btn-danger(@click="this.activeComponent = 'RedCon'") Red
      button.btn.btn-success.mx-2(@click="this.activeComponent = 'GreenCon'") Green
      button.btn.btn-primary(@click="this.activeComponent = 'BlueCon'") Blue
    div.col-lg-12.d-flex.align-items-center.justify-content-between.flex-column
      keep-alive
        component(:is="this.activeComponent")
</template>
<script>
import RedCon from "./components/RedCon.vue";
import GreenCon from "./components/GreenCon.vue";
import BlueCon from "./components/BlueCon.vue";

export default {
  name: "App",
  components: {
    RedCon,
    GreenCon,
    BlueCon,
  },
  data() {
    return {
      activeComponent: "RedCon",
    };
  },
};
</script>
