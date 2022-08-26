<template lang="pug">
div.login_register_container
  h3.text-2xl.text-center.mb-3 Login
  input.input.mb-3(type='text', placeholder='Kullanıcı Adı')
  input.input.mb-3(type='password', placeholder='Şifre')
  button.default-button Giri&scedil; yap
  span.text-center.mt-3.text-sm
    | &Uuml;ye de&gbreve;ilim,
    a.text-red-900(href='#', class='hover:text-black') &Uuml;ye olmak istiyorum!
</template>
