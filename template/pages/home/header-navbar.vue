<template>
  <div class="text-center">
    <v-menu offset-y class="" content-class="category_menu" >
      <template v-slot:activator="{ on, attrs }">
        <v-btn  
          icon 
          tile  
          v-bind="attrs" 
          v-on="on" 
          :class="{'d-none': $route.path == '/home-two'}"
        >
          <v-icon>mdi-view-dashboard</v-icon>
        </v-btn>
      </template>
      <Navbar />
    </v-menu>
  </div>
</template>
<script>
import Navbar from "@/pages/home/navbar";
export default {
  components: {
    Navbar
  }
};
</script>
<style lang="scss" scoped>
.category_menu {
  overflow-y: inherit;
  overflow-x: inherit;
  contain: inherit;
  background-color: #fff;
  box-shadow: none;
  border-radius: 0px;
}
</style>
