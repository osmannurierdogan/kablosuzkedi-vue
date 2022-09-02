<script>
import Counter from "./composables/Counter";
import Header from "./composables/Header";
import Search from "./composables/Search";
import Toggle from "./composables/Toggle";
export default {
  data() {
    return {
      title: "Osman",
    };
  },
  setup() {
    const { counter, oddOrEven } = Counter();
    const { title, titleLengthMessage } = Header();
    const { searchText, isTyping } = Search();
    const { show, toggleIt } = Toggle();
    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping,
    };
  },
};
</script>
<template lang="pug">
div.container
  div.row.m-5
    div.col-sm-12.d-flex.align-items-center.justify-content-between.flex-column
      h3 {{ titleLengthMessage }}
      h1 {{ title }}
      input(type="text" v-model="title")
      button.btn.btn-danger.btn-sm(@click="toggleIt") Show
      p(v-if="show") lorem ipsum dolor sit amet.
      hr
      button.btn.btn-lg.btn-success.fw-bold(@click="counter++") {{ counter }} : {{ oddOrEven }}
      hr
      input(type="text" v-model="searchText")
      p(v-if="isTyping") Typing....
</template>
