import { ref } from "vue";
export default function () {
  const show = ref(false);
  //console.log("show :>> ", show.value);
  const toggleIt = () => {
    show.value = !show.value;
  };
  return { show, toggleIt };
}
