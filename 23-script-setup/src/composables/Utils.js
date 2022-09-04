import { ref, onMounted } from "vue";
export default function () {
  const title = ref("Baslik");
  let counter = ref(0);
  const increase = () => {
    counter.value++;
  };
  const alertMe = (info) => {
    console.log("info :>> ", info);
  };
  onMounted(() => {
    console.log('mounted :>> ');
  })
  return { title, counter, increase, alertMe };
}
