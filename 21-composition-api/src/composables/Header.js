import { ref, computed } from "vue";
export default function () {
  const title = ref("This is setup title");
  const titleLengthMessage = computed(() => {
    return title.value.length + " adet karakter vardir.";
  });
  return { title, titleLengthMessage };
}
