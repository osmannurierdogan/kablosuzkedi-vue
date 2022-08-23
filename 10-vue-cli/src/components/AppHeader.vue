<template lang="pug">
nav.navbar.navbar-expand-lg.bg-light
  div.container-fluid
    a.navbar-brand(href='#') Navbar
    button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
      span.navbar-toggler-icon
    div#navbarSupportedContent.collapse.navbar-collapse
      ul.navbar-nav.me-auto.mb-2.mb-lg-0
        li.nav-item
          a.nav-link.active(aria-current='page' href='#') Home
        li.nav-item
          a.nav-link(href='#') Link
        li.nav-item.dropdown
          a.nav-link.dropdown-toggle(href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false')
            | Dropdown
          ul.dropdown-menu
            li
              a.dropdown-item(href='#') Action
            li
              a.dropdown-item(href='#') Another action
            li
              hr.dropdown-divider
            li
              a.dropdown-item(href='#') Something else here

</template>
<script>
export default {
  name: "AppHeader",
};
</script>
