import { ref, computed, watch, watchEffect } from "vue";
export default function () {
  const searchText = ref("");
  const isTyping = ref(false);

  /* watch(searchText, () => {
      if (searchText.value.length > 0) {
        isTyping.value = true;
        setTimeout(() => {
          isTyping.value = false;
        }, 1500);
      }
    }); */
  //const stop = watchEffect((onInvalidate) => {
  watchEffect((onInvalidate) => {
    if (searchText.value.length > 0) {
      isTyping.value = true;
      const typing = setTimeout(() => {
        isTyping.value = false;
        //stop(); ! eger boyle yaparsak typing effect bir daha calismaz.
      }, 1500);
      onInvalidate(() => {
        clearTimeout(typing);
      });
    }
  });
  return { searchText, isTyping };
}
