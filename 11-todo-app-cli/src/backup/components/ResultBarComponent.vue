<template lang="pug">
div.d-flex.align-items-center.justify-content-end.mt-3
  span.text-danger.fw-bold {{ todoItemCount }} #[span.fw-normal todos are exist.]
</template>

<script>
export default {
  name: "ResultBarComponent",
  data() {
    return {};
  },
  components: {},
  props: {
    todoItemCount: Number,
  },
};
</script>
