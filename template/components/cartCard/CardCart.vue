<template>
      <!-- card-hover-shadow  -->
     <base-card class="card-hover"  :class="cardHoverShadow ? 'card-hover-shadow' : '' ">
         
          <v-chip
            class="ma-2 p-absolute"
            color="primary"
            small
            
          >
            56% off
          </v-chip>
          <div class="card-hover-icon">
            <div class="d-flex flex-column p-absolute right-0 z-1 mr-2 mt-1 card-hover-icon">
                <!-- dialog -- modal  -->
                <v-dialog  v-model="dialog" max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            icon
                            color="secondary"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon>mdi-eye</v-icon>
                        </v-btn>
                    </template>
                    <base-card>
                        <v-card-title>
                            <v-btn
                                class="mt-4"
                                absolute
                                right
                                icon
                                color="secondary"
                                text
                                @click="dialog = false"
                            >
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-img
                                        height="250"
                                 
                                        :src="require('@/assets/images/products/Fashion/Shoes/23.NikeSilverRace.png')"
                                    ></v-img>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <h1 class="mt-4 mb-4 leading-tight">Smart Watch Black</h1>
                                    <h5 class="grey--text text--darken-5 mb-3">Brand: <span class="grey--text text--darken-1 font-weight-medium ml-2">Xiaomi</span></h5>
                                    <div class="d-flex mb-3">
                                        <h5 class="grey--text text--darken-5 mr-2">Rated: </h5>
                                        <div class="d-flex mb-1">
                                            <v-rating
                                                :value="4.5"
                                                color="amber"
                                                dense
                                                half-increments
                                                readonly
                                                size="16"
                                            ></v-rating>

                                            <div class="grey--text text--darken-1 font-weight-bold ml-1">
                                                (50)
                                            </div>
                                        </div>
                                    </div>
                                    <h2 class="font-weight-bold primary--text mb-2">$250.00</h2>
                                    <h5 class=" font-weight-light mb-3">Stock Available</h5>
                                    <h5 class="grey--text text--darken-5 mb-3">Sold By: <span class="grey--text text--darken-1 font-weight-medium ml-2">Mobile Store</span></h5>
                                </v-col>
                            </v-row>
                        </v-card-text>
                       
                        
                        
                    </base-card>
                </v-dialog>

                <!-- end dialog end modal  -->
                <v-btn
                    icon
                    color="secondary"
                >
                    <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
            </div>
          </div>
          <nuxt-link to="/shop/SingleProduct">
            <v-img
              height="250"
              class="br-t-8"
              :src="contentImg"
            ></v-img>

          </nuxt-link>
          

          <v-card-text class=" d-flex justify-content-between align-end">
            <div class="flex-grow-1 my-3">
              <router-link to="/single-product" class="text-decoration-none">
                <h6 class="mb-0 grey--text text--darken-4">{{contentText}} </h6>
              </router-link>
              <div class="d-flex mb-1">
                <v-rating
                  :value="contentRating"
                  color="amber"
                  background-color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-1">
                  {{contentRating}} 
                </div>
              </div>
              <div class="d-flex">
              
                <h6 class="primary--text mr-2 mb-0">${{amount}}</h6>
                <h6 class="gray--text lighten-4 text-decoration-line-through mb-0">$110.00</h6>
              </div>
            </div>
            <!-- btn cart  -->
            <!-- <slot name="cardCart"></slot> -->
            <div class="d-flex flex-column">
                <v-btn
                    :class="counter <= 0 ? 'd-none': 'd-block'"
                    class=" rounded "
                    outlined
                    fab
                    x-small
                    tile  
                    color="primary"
                    @click="$emit('cartRemove')"
                >
                    <v-icon>mdi-minus</v-icon>
                </v-btn>
                <div 
                  :class="counter <= 0 ? 'd-none': 'd-block'"
                  class="text-center font-weight-bold"
                >{{ counter }}</div>
                <v-btn
                    class="rounded"
                    outlined
                    fab
                    x-small
                    tile  
                    color="primary"
                    @click="$emit('cartAdd')"
                    
                >
                    <v-icon>mdi-plus</v-icon>
                   
                </v-btn>
            </div>
          </v-card-text>

         
     </base-card>
</template>
<script>
  import { mapGetters, mapActions  } from 'vuex';
  export default {
    props: {
      btnText: {
        type: String,
        default: ''
      },
      cardHoverShadow: {
        type: Boolean,
        default: false
      },
      counter: {
        type: Number,
        default: 0
      },
      contentImg: String,
      contentText: String,
      amount: {
        type: Number,
        default: 200
      },
      contentRating: {
        type: Number,
        default: 4.5
      }
    },
    computed: {
      ...mapGetters(['getProducts']),
      
    },
    data () {
      return {
        dialog: false,
        
      }
    },
    methods: {
      ...mapActions(["addCart"]),
     
    }
  }
</script>
<style lang="scss" scoped>
   
    .br-t-8 {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }
  .card-hover {
    &:hover {
      .card-hover-icon {
        display: block;
      }
    }
    .card-hover-icon {
      display: none;
    }
  }

  
        
        
        
</style>