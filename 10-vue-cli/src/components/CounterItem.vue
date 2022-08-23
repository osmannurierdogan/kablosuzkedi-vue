<template lang="pug">
div.col-sm-2.card.p-1
  h3.text-center {{ counter }}
  div.d-flex.align-items-center.justify-content-center
    button(@click='increase').btn.btn-sm.btn-success.me-1 + 
    button(@click='decrease').btn.btn-sm.btn-danger - 
</template>
<script>
export default {
  name: "CounterItem",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
};
</script>
