<template>
  <v-footer
    id="core-footer"
    absolute
    height="82"
  >
    <v-spacer/>
    <span class="font-weight-light copyright">
      &copy;
      {{ (new Date()).getFullYear() }}
      Lorem Ipsum
      <a
        href="https://girirajdigital.com"
        target="_blank">GIRIRAJ DIGITAL</a>
    </span>
  </v-footer>
</template>

<style>
#core-footer {
  z-index: 0;
}
</style>
