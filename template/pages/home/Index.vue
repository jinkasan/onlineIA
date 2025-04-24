<template>
  <v-container class="container">
    <v-row>
      
      <v-col cols="12">
        <h1>Mobile Navbar</h1>
        <HeaderNavbar />
      </v-col>
      <v-col cols="12">
        <h1 class="mb-3">Navbar Component</h1>
        <Navbar />
      </v-col>
      <v-col cols="12">
        <h1 class="mb-3">Flash Deals Single Item</h1>
      </v-col>
      <v-col
        class="mb-4"
        cols="12" md="3" sm="6"
      > 
          <CardCart />
       
      </v-col>
      <v-col cols="12" class="mb-3">
        <h1>Top Categories</h1>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <base-card class="">
          <v-card-text class="d-flex justify-content-center p-4 mx-auto">
              
              <div class="card-overlay-item br-8 overflow-hidden">
                
                <v-chip
                  class="ma-2"
                  color="primary"
                >
                  Primary
                </v-chip>
                
                <a href="">
                  <img  class="w-33 h-100" src="@/assets/images/products/bghead-phone.png" alt="">
                </a>
                <a href="">
                  <img  class="w-33 h-100" src="@/assets/images/products/bghead-phone.png" alt="">
                </a>
                <a href="">
                  <img  class="w-33 h-100" src="@/assets/images/products/bghead-phone.png" alt="">
                </a>
                
               
              </div>
          </v-card-text>
        </base-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <base-card class="">
          <v-card-text class="d-flex justify-content-center p-4 mx-auto">
              <div class="card-overlay-item br-8 overflow-hidden">
                <a href="">
                  <img  class="w-33 h-100" src="@/assets/images/products/bghead-phone.png" alt="">
                </a>
                <a href="">
                  <img  class="w-33 h-100" src="@/assets/images/products/bghead-phone.png" alt="">
                </a>
                <a href="">
                  <img  class="w-33 h-100" src="@/assets/images/products/bghead-phone.png" alt="">
                </a>
                
               
              </div>
          </v-card-text>
        </base-card>
      </v-col>

      <v-col cols="12" class="mb-3">
        Top Ratings
      </v-col>
      <!-- <v-col cols="12" sm="6" md="4">
        <base-card class="">
          <v-card-text class="d-flex justify-content-center p-4 mx-auto">
           
            
              <v-avatar tile size="100">
                <img src="@/assets/images/products/bghead-phone.png" alt="">
              </v-avatar>
              <v-avatar tile size="100">
                <img src="@/assets/images/products/bghead-phone.png" alt="">
              </v-avatar>
              <v-avatar tile size="100">
                <img src="@/assets/images/products/bghead-phone.png" alt="">
              </v-avatar>
              
          
          </v-card-text>
        </base-card>
      </v-col> -->

      <v-col cols="12" lg="6" class="mb-5">
        <base-card>
          <div class="px-3">
             <v-row>
              <v-col v-for="index in 4" :key="index" cols="6" md="3" sm="6" lg="3">
                <v-img contain class="mb-3 card-overlay-item " src="@/assets/images/products/camera-1.png"></v-img>
                <div class="text-center">
                  <div class="d-flex justify-center mb-1">
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="18"
                    ></v-rating>
                    (49)
                  </div>
                  <h6 class="mb-1">Camera</h6>
                  <h6 class="primary--text">$150</h6>
                </div>
              </v-col>
              
            </v-row>
          </div>
        </base-card>
      </v-col>
      
      <v-col cols="12" lg="12">
        
        <base-card>
          <div class="px-3">
            <v-row>
              <v-col v-for="index in 6" :key="index" cols="6" sm="4" md="3"  lg="2">
                <v-img class="mb-3 card-overlay-item" contain src="@/assets/images/products/imagegoggles.png"></v-img>
                <h6 class="mb-1">Sunglass</h6>
                <h6 class="primary--text">$150</h6>
              </v-col>
            </v-row>
          </div>
        </base-card>
      </v-col>


      <v-col v-for="index in 12" :key="index" cols="6" sm="4" md="3" lg="2">
        <base-card class="card-hover-shadow">
          <v-card-text>
            <div class="d-flex align-center">
              <v-avatar tile>
                <img class="mr-3" src="@/assets/images/products/Electronics/35.beatsbluetoothearpohones.png" alt="">
              </v-avatar>
              <p class="font-weight-bold mb-0  text-truncate">Automobile</p>
            </div>
          </v-card-text>
        </base-card>
      </v-col>


      <v-col>
         <v-card>
            <v-tabs-items v-model="tab">
              <v-tab-item
                v-for="i in 4"
                :key="i"
                :value="'tab-' + i"
              >
             
                <v-card flat>
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
            <v-tabs
              v-model="tab"
              background-color=""
              centered
              
              icons-and-text
            >
              <v-tabs-slider></v-tabs-slider>

              <v-tab href="#tab-1" class="text-capitalize">
                Home
                <img class="icon mr-0" src="@/assets/images/icons/home.svg" alt="" />
              </v-tab>

              <v-tab href="#tab-2" class="text-capitalize">
                Category
                <img  class="icon mr-0" src="@/assets/images/icons/category.svg" alt="" />
              </v-tab>

              <v-tab href="#tab-3" class="text-capitalize">
                Cart
                <img v-svg-inline class="icon mr-0" src="@/assets/images/icons/bag.svg" alt="" />
              </v-tab>
              <v-tab href="#tab-3" class="text-capitalize">
                Account
                <img class="icon mr-0" src="@/assets/images/icons/user-2.svg" alt="" />
              </v-tab>
            </v-tabs>

            
          </v-card>
      </v-col>

      <v-col cols="12">
        <h1 class="mb-5">Avatar Input Component</h1>
        <div class="cover-upload-wrapper">
          <label for="cover-image">
            <span class="primary cover-upload">
              <img v-svg-inline class="icon  mr-0" src="@/assets/images/icons/camera.svg" alt="" />
            </span>
          </label>
          <input type="file" id="cover-image" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Navbar from "@/pages/home/navbar";
  import HeaderNavbar from "@/pages/home/header-navbar";
  import CardCart from "@/components/cartCard/CardCart";
  export default {
    name: 'Home',
    components: {
      Navbar,
      HeaderNavbar,
      CardCart
    },
    data: () => ({
      rating: 4,
      tab: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }),
    methods: {
      
    }

  }
</script>

<style lang="scss">
  .cover-upload-wrapper {
    display: flex;
    align-items: flex-end;
    
    .cover-upload {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: auto;
        padding: 0;
    }
    input {
      display: none;
    }
  }
</style>