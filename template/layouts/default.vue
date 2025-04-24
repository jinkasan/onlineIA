<template>
  <v-app>
    <base-app-bar />
    
    <base-view />

    <footer-view />
    <mobile-navigation />
  </v-app>
</template>

<script>
  export default {
    name: 'BaseLayout',
    components: {
      BaseAppBar: () => import('./base/AppBar'),
      BaseView: () => import('./base/View'),
      FooterView: () => import('./base/Footer'),
      MobileNavigation: () => import('./base/MobileNavigationBar'),
    },
  }
</script>
