import { ref, computed, watch } from "vue";
export default function () {
  const counter = ref(0);
  const oddOrEven = computed(() => {
    return counter.value % 2 === 1 ? "Odd" : "Even";
  });
  watch([counter, oddOrEven], ([newC, newO], [oldC, oldO]) => {
    console.log(oldO, " :>> ", newO);
    console.log(oldC, " :>> ", newC);
  });
  /* watch(oddOrEven, (newValue, oldValue) => {
      console.log(oldValue, " :>> ", newValue);
    }); */
  return { counter, oddOrEven };
}
