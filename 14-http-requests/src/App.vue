<template lang="pug">
div.container
  div.row.m-5
    div.col-sm-12
      h3.text-center Shopping List
      AddItemSection
      ListComponent
      ResultBar
</template>

<script>
import axios from "axios";
import AddItemSection from "@/components/AddItemSection.vue";
import ListComponent from "@/components/ListComponent.vue";
import ResultBar from "@/components/ResultBar.vue";
export default {
  name: "App",
  components: {
    AddItemSection,
    ListComponent,
    ResultBar,
  },
  data() {
    return {
      provideData: {
        itemsList: [],
      },
    };
  },
  provide() {
    return {
      provideData: this.provideData,
      onSave: this.onSave,
      onDelete: this.onDelete,
      itemCount: this.itemCount,
    };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((response) => {
      this.provideData.itemsList = response.data || [];
    });
  },
  computed: {
    itemCount() {
      return this.provideData.itemsList.length || 0;
    },
  },
  methods: {
    onSave(e) {
      const saveObject = {
        title: e.target.value,
        id: new Date().getTime(),
        completed: false,
      };
      axios
        .post("http://localhost:3000/items", saveObject)
        .then((save_response) => {
          this.provideData.itemsList.push(save_response.data);
          e.target.value = "";
          e.target.focus();
        });
    },
    onDelete(item) {
      axios.delete(`http://localhost:3000/items/${item.id}`).then(() => {
        this.provideData.itemsList = this.provideData.itemsList.filter(
          (i) => item.id !== i.id
        );
      });
    },
  },
};
</script>
