<template lang="pug">
h3 Details
p Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis saepe ab possimus provident pariatur aliquid ratione minima esse beatae, quidem quo dignissimos impedit fuga, perspiciatis placeat libero ut illum eius?
span params: #[strong {{ this.$route.params }}]
span query: #[strong {{ this.$route.query }}]
pre {{ this.$route }}
hr
pre {{ this.$router }}
button.btn.btn-danger.my-2(@click="goBack") Go Back
</template>

<script>
export default {
  name: "DetailsPage",
  created() {
    //console.log("this.$route :>> ", this.$route);
    //console.log("this.$router :>> ", this.$router);
  },
  methods: {
    goBack() {
      this.$router.push({ name: "HomePage" });
    },
  },
};
</script>
