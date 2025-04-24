<template>
  <v-bottom-navigation
    v-model="value"
    class="d-md-none d-flex mobile-navigation-bottom"
    color="primary"
    fixed
    
  >
    <v-btn to="/">

      <span class="">Home</span>
      <img class="icon mr-0" src="@/assets/images/icons/home.svg" alt="" />
    </v-btn>

    <v-btn to="/mobile-categories">
      <span>Category</span>

      <img class="icon mr-0" src="@/assets/images/icons/category.svg" alt="" />
    </v-btn>

    <v-btn to="/cart">
      <span>Cart</span>
      <img v-svg-inline class="icon mr-0" src="@/assets/images/icons/bag.svg" alt="" />
    </v-btn>

    <v-btn to="/view-profile">
      <span>Account</span>

      <img class="icon mr-0" src="@/assets/images/icons/user-2.svg" alt="" />
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data: () => ({ value: 1 }),

    computed: {
    //   color () {
    //     switch (this.value) {
    //       case 0: return 'blue-grey'
    //       case 1: return 'teal'
    //       case 2: return 'brown'
    //       case 3: return 'indigo'
    //       default: return 'blue-grey'
    //     }
    //   },
    },
  }
</script>
<style lang="scss">
    .mobile-navigation-bottom {
        bottom: 0;
        z-index: 100 !important;
    }
</style>
