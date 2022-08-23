<template lang="pug">
div.header
  slot(name="title")
slot
div.content.my-2.text-danger 
  slot(name="content")
div.footer
  slot(name="footer")
</template>
<script>
export default {
  name: "ModalComponent",
};
</script>
