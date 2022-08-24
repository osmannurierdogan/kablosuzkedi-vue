<template lang="pug">
h3 Home
p Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis saepe ab possimus provident pariatur aliquid ratione minima esse beatae, quidem quo dignissimos impedit fuga, perspiciatis placeat libero ut illum eius?
input.form-control(@keydown.enter="goDetails")
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    goDetails(e) {
      //this.$router.push(`/details/${e.target.value}`);
      this.$router.push({
        name: "DetailsPage",
        params: {
          userId: e.target.value,
        },
        query: {
          name: "Osiz",
          title: "Digital Agency",
        },
      });
    },
  },
};
</script>
