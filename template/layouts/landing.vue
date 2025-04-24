<template>
  <v-app>
    <Navigation />
    <nuxt />
   

  </v-app>
</template>

<script>
  export default {
    name: 'LandingLayout',
    components: {
      Navigation: () => import('./landingPage/Navigation'),
      
    },
  }
</script>