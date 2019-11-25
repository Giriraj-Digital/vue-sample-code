<template>
  <v-app>
    <core-toolbar
      v-if="$route.name !== 'Login'
        && $route.name !== 'Register'
      && $route.name !== 'FormGui'" />

    <core-drawer
      v-if="$route.name !== 'Login'
        && $route.name !== 'Register'
      && $route.name !== 'FormGui'" />

    <core-view />
  </v-app>
</template>

<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
