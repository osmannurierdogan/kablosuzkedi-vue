<template lang="pug">
div.container
  div.row.m-5
    div.col-sm-12.card.d-flex.align-items-center.justify-content-between.p-3
      ModalComponent
        template(#title)
          h3 Slot title
        template(#content)
          p Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, deserunt, magni dolores consectetur reiciendis temporibus doloremque.
        template(#footer)
          button.btn.btn-success.me-2 Save
          button.btn.btn-danger Close
        template(#default)
          p This is default content.
</template>

<script>
import ModalComponent from "@/components/ModalComponent";
export default {
  name: "App",
  components: {
    ModalComponent,
  },
};
</script>
