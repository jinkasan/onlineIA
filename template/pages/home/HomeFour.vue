<template>
  <v-container class="mt-6">
    <v-row>
      <v-col cols="12" lg="4" > 
        <base-card cardHoverShadow class="h-100">
          <div class="px-8 py-4">
            <v-img max-width="300" class="mx-auto mb-8" :src="require('@/assets/images/products/shoes-1.png')"></v-img>
            <p class="text-14 grey--text text--darken-2 mb-2">SPECIAL OFFER</p>
            <h1 class="mb-2">
              <span class="text-30 primary--text d-block">Comfortable</span> Original Cotton Sneaker
            </h1>
            <p class="grey--text text--darken-2 mb-4">Handcrafted from genuine Italian leather. One inner compartment with black satin lining</p>
            <a href="#" class="text-decoration-none black--text bb-primary font-weight-bold">SHOP NOW</a>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="8">
        <base-card cardHoverShadow class="mb-6">
          <div class="px-8 py-4 d-flex flex-wrap-reverse flex-sm-nowrap align-center justify-sm-space-between justify-center">
            <div class="">
              
                <p class="text-14 grey--text text--darken-2 mb-2">WOMEN'S HANDBAG</p>
                <h1 class="mb-2">
                  <span class="text-30 primary--text"> Minimalist </span> Genuine Cotton Jacket
                </h1>
                <p class="grey--text text--darken-2 mb-4">Handcrafted from genuine Italian leather. One inner compartment with black satin lining</p>
                <a href="#" class="text-decoration-none black--text bb-primary font-weight-bold">SHOP NOW</a>
            </div>
            <div>
              <v-img 
                 
                 max-width="290"
                
                 class="mx-auto"
                 :src="require('@/assets/images/products/jacket.png')">
              </v-img>
            </div>

          </div>
        </base-card>
        <base-card cardHoverShadow class="mb-6">
          <div class="px-8 py-4 d-flex flex-wrap flex-sm-nowrap align-center justify-sm-space-between justify-center">
            
            <div>
              <v-img 
                 max-width="290"
                 class="mx-auto"
                 :src="require('@/assets/images/products/t-shirt-1.png')">
              </v-img>
            </div>
            <div class="">
              
                <p class="text-14 grey--text text--darken-2 mb-2">MEN'S SHOE</p>
                <h1 class="mb-2">
                  <span class="text-30 primary--text"> Stylish </span> Genuine Comfy T-shirts
                </h1>
                <p class="grey--text text--darken-2 mb-4">Handcrafted from genuine Italian leather. One inner compartment with black satin lining</p>
                <a href="#" class="text-decoration-none black--text bb-primary font-weight-bold">SHOP NOW</a>
            </div>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="3">
        <base-card cardHoverShadow class="h-100">
          <div class="pa-8 text-center">
            <v-avatar class="mb-6" size="64" tile>
              <img
                v-svg-inline
                class="icon primary--text"
                src="@/assets/images/icons/credit.svg"
                alt=""
              />
              
            </v-avatar>
            <h3 class="mb-2">Secure Payment</h3>
            <p class="grey--text text--darken-1">100% secured payment & privacy</p>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="3">
        <base-card cardHoverShadow class="h-100">
          <div class="pa-8 text-center">
            <v-avatar class="mb-6" size="64" tile>
              <img
                v-svg-inline
                class="icon primary--text"
                src="@/assets/images/icons/feedback-thumbs-up.svg"
                alt=""
              />
              
            </v-avatar>
            <h3 class="mb-2">Great Feedback</h3>
            <p class="grey--text text--darken-1">More than 97% positive & happy customers</p>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="6" >
        <base-card cardHoverShadow class="h-100">
          <div class="px-8 py-4 d-flex flex-wrap-reverse flex-sm-nowrap align-center justify-sm-space-between justify-center">
            <div class="">
              
                <p class="text-14 grey--text text--darken-2 mb-2">SPECIAL OFFER</p>
                <h1 class="mb-2">
                  <span class="text-30 primary--text"> $100 Off </span> Over $1200
                </h1>
                <p class="grey--text text--darken-2 mb-0">Handcrafted from genuine Italian</p>
              
            </div>
            <div class="mb-5 mb-sm-0">
              <v-img 
                 
                 max-width="200"
                
                 class="mx-auto"
                 :src="require('@/assets/images/products/paper-bag.png')">
              </v-img>
            </div>

          </div>
        </base-card>
      </v-col>
      <v-col cols="12" >
        <div class="d-flex justify-space-between align-center flex-wrap mb-6">
            <div class="d-flex align-center">
              <img
                
                class="icon mr-2"
                src="@/assets/images/icons/light.svg"
                alt=""
              />
              <h2 class="font-weight-bold mb-0">Flash Deals</h2>
            </div>
            
            <div>
              <nuxt-link to="" class="d-flex text-decoration-none grey--text text--darken-2">
                <p class="mb-0">View All</p>
                <v-icon>mdi-chevron-right</v-icon>
              </nuxt-link>
            </div>
          
        </div>
        <VueSlickCarousel
          class="slick-secondary"
          :arrows="true"
          :dots="false"
          v-bind="slickSettings"
        >
            <v-col cols="12" v-for="(item, index) in getProducts.slice(16, 24).map(n => n)" :key="index">
              <CardCart
                :content-img="item.img"
                :content-text="item.title"
                :counter="item.qty"
                class="m-5"
                @cartRemove="removeCart(item)"
                @cartAdd="addCart(item)"
              />
            </v-col>

          <template #prevArrow="arrowOption">
            <v-btn
              class="mx-2 slick-arrow prev slick-prev"
              fab
              dark
              small
              color="secondary"
            >
              <v-icon dark>
                {{ arrowOption }}
                mdi-arrow-left
              </v-icon>
            </v-btn>
          </template>
          <template #nextArrow="arrowOption">
            <v-btn
              class="mx-2 slick-arrow next slick-next"
              fab
              dark
              small
              color="secondary"
            >
              <v-icon dark>
                {{ arrowOption }}
                mdi-arrow-right
              </v-icon>
            </v-btn>
          </template>
        </VueSlickCarousel>
      </v-col>

      <v-col cols="12" >
        <div class="d-flex justify-space-between align-center flex-wrap mb-6">
            <div class="d-flex align-center">
              <img
                v-svg-inline
                class="icon mr-2"
                src="@/assets/images/icons/new-product-1.svg"
                alt=""
              />
              <h2 class="font-weight-bold mb-0">New Arrivals</h2>
            </div>
            
            <div>
              <nuxt-link to="" class="d-flex text-decoration-none grey--text text--darken-2">
                <p class="mb-0">View All</p>
                <v-icon>mdi-chevron-right</v-icon>
              </nuxt-link>
            </div>
          
        </div>
        <VueSlickCarousel
          class="slick-secondary"
          :arrows="true"
          :dots="false"
          v-bind="slickSettingsSixItem"
        >
          <v-col cols="12" v-for="(n, index) in newArrivals" :key="index">
             <v-img
                class="mb-4 br-8 card-overlay-item"
                contain
                :src="n.img"
              ></v-img>

              <h5 class=" mb-1">{{ n.title }}</h5>
              <h5 class="primary--text ">{{ n.price }}</h5>
            
          </v-col>

          <template #prevArrow="arrowOption">
            <v-btn
              class="mx-2 slick-arrow prev slick-prev"
              fab
              dark
              small
              color="secondary"
            >
              <v-icon dark>
                {{ arrowOption }}
                mdi-arrow-left
              </v-icon>
            </v-btn>
          </template>
          <template #nextArrow="arrowOption">
            <v-btn
              class="mx-2 slick-arrow next slick-next"
              fab
              dark
              small
              color="secondary"
            >
              <v-icon dark>
                {{ arrowOption }}
                mdi-arrow-right
              </v-icon>
            </v-btn>
          </template>
        </VueSlickCarousel>
      </v-col>

      <v-col cols="12">
        <h2 class="font-weight-bold mb-6 mr-10 slick-header-top-title">Deal Of The Week</h2>

        <!-- dealOfTheWeek slider  -->
        <VueSlickCarousel
          class="slick-secondary"
          :arrows="true"
          :dots="true"
          v-bind="slickSettingsSingleItem"
        >
          <div 
            v-for="item in 3"
            :key="item"
            class="mb-10"
          >
            <v-row>
              <v-col cols="12" sm="6" lg="6">
                <nuxt-link to="/" class="text-decoration-none">
                  <v-sheet elevation="1" class="br-12">
                    <v-img :src="require('@/assets/images/products/rayban.png')">
                        <v-chip
                          class="ma-5"
                          label
                          color="grey lighten-2"
                        >
                          <span class="font-600">Say Ban Sunglass</span>
                        </v-chip>
                        <v-chip
                          class="ma-5 p-absolute right-0"
                          label
                          color="primary"
                        >
                          <span class="font-600">50% OFF</span>
                        </v-chip>
                    </v-img>
                  </v-sheet>
                </nuxt-link>
              </v-col>
              <v-col cols="12" sm="6" lg="6">
                <nuxt-link to="/" class="text-decoration-none">
                  <v-sheet elevation="1" class="br-12">
                    <v-img :src="require('@/assets/images/products/nike.png')">
                        <v-chip
                          class="ma-5"
                          label
                          color="grey lighten-2"
                        >
                          <span class="font-600">Yike Shoe Air Max</span>
                        </v-chip>
                        <v-chip
                          class="ma-5 p-absolute right-0"
                          label
                          color="primary"
                        >
                          <span class="font-600">30% OFF</span>
                        </v-chip>
                    </v-img>
                  </v-sheet>
                </nuxt-link>
              </v-col>
              <v-col cols="12" sm="6" lg="6">
                <nuxt-link to="/" class="text-decoration-none">
                  <v-sheet elevation="1" class="br-12">
                    <v-img :src="require('@/assets/images/products/apple-watch.png')">
                        <v-chip
                          class="ma-5"
                          label
                          color="grey lighten-2"
                        >
                          <span class="font-600">Smart Watch</span>
                        </v-chip>
                        <v-chip
                          class="ma-5 p-absolute right-0"
                          label
                          color="primary"
                        >
                          <span class="font-600">20% OFF</span>
                        </v-chip>
                    </v-img>
                  </v-sheet>
                </nuxt-link>
              </v-col>
              <v-col cols="12" sm="6" lg="6">
                <nuxt-link to="/" class="text-decoration-none">
                  <v-sheet elevation="1" class="br-12">
                    <v-img :src="require('@/assets/images/products/perfume.png')">
                        <v-chip
                          class="ma-5"
                          label
                          color="grey lighten-2"
                        >
                          <span class="font-600">Perfume</span>
                        </v-chip>
                        <v-chip
                          class="ma-5 p-absolute right-0"
                          label
                          color="primary"
                        >
                          <span class="font-600">20% OFF</span>
                        </v-chip>
                    </v-img>
                  </v-sheet>
                </nuxt-link>
              </v-col>

            </v-row>
          </div>
          <!-- <template #customPaging="page">
            <div class="custom-dot">
              {{ page }} 
              <h1>asdjbasidhg</h1>
            </div>
          </template> -->
          <template #prevArrow="arrowOption">
                <v-btn
                  class="mx-2 slick-arrow prev slick-prev slick-top-prev-btn"
                  fab
                  dark
                  small
                  color="primary"
                >
                  <v-icon dark>
                    {{ arrowOption }}
                    mdi-arrow-left
                  </v-icon>
                </v-btn>
              </template>
              <template #nextArrow="arrowOption">
                <v-btn
                  class="mx-2 slick-arrow next slick-next slick-top-next-btn"
                  fab
                  dark
                  small
                  color="primary"
                >
                  <v-icon dark>
                    {{ arrowOption }}
                    mdi-arrow-right
                  </v-icon>
                </v-btn>
              </template>
        </VueSlickCarousel>
      </v-col>


      <v-col cols="12" class="mt-10">
       

        <!-- dealOfTheWeek slider  -->
        <VueSlickCarousel
          class="slick-secondary"
          :arrows="true"
          :dots="true"
          v-bind="slickSettingsSingleItem"
        >
          <div 
            v-for="item in 3"
            :key="item"
            class="mb-10 mt-3"
          >
            <div class="grey lighten-2 br-8 p-relative">
              <v-avatar size="100" tile class="p-absolute d-none d-lg-block right-0 mr-10">
                <img src="@/assets/images/badges/hot.svg" alt="">
              </v-avatar>
              <v-row align="center" class="mb-4">
                <v-col cols="12" lg="6">
                  <v-img class="mx-auto" max-width="300" height="auto" :src="require('@/assets/images/products/xiaomi-watch.png')"></v-img>
                </v-col>
                <v-col cols="12" lg="6">
                  <div class="pa-5">
                    <h3 class="primary--text mb-3">Deal Of The Day</h3>
                  <h2 class="mb-2">Rapple Watch Series 4 (Black)</h2>
                  <v-col cols="12" lg="6" class="pa-0">
                    <p class="grey--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                  </v-col>
                  <h4 class="font-600 mb-2">Fresh Deal Everyday, Get It Now!</h4>
                  <div class="d-flex flex-wrap mb-10">
                    <div class="d-flex align-baseline mr-7">
                      <h3 class="mb-0 me-2">365</h3>
                      <span class="font-600 text-14 grey--text text--darken-2">DAYS</span>
                    </div>
                    <div class="d-flex align-baseline mr-7">
                      <h3 class="mb-0 me-2">22</h3>
                      <span class="font-600 text-14 grey--text text--darken-2">HOURS</span>
                    </div>
                    <div class="d-flex align-baseline mr-7">
                      <h3 class="mb-0 me-2">39</h3>
                      <span class="font-600 text-14 grey--text text--darken-2">MINS</span>
                    </div>
                    <div class="d-flex align-baseline">
                      <h3 class="mb-0 me-2">42</h3>
                      <span class="font-600 text-14 grey--text text--darken-2">SECS</span>
                    </div>
                  </div>
                  <v-btn color="primary" class="font-600 mr-3" elevation="0">
                    buy now
                  </v-btn>
                  <v-btn color="grey" fab tile small class="br-8" elevation="0">
                    <v-icon color="white">mdi-heart</v-icon>
                  </v-btn>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
         
          <template #prevArrow="arrowOption">
                <v-btn
                  class="mx-2 slick-arrow prev slick-prev slick-top-prev-btn"
                  fab
                  dark
                  small
                  color="primary"
                >
                  <v-icon dark>
                    {{ arrowOption }}
                    mdi-arrow-left
                  </v-icon>
                </v-btn>
              </template>
              <template #nextArrow="arrowOption">
                <v-btn
                  class="mx-2 slick-arrow next slick-next slick-top-next-btn"
                  fab
                  dark
                  small
                  color="primary"
                >
                  <v-icon dark>
                    {{ arrowOption }}
                    mdi-arrow-right
                  </v-icon>
                </v-btn>
              </template>
        </VueSlickCarousel>
      </v-col>

      <!-- trending-items  -->
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
             <h2>Trending Items</h2>
          </v-col>
          <v-col cols="12" lg="4">
            <!-- <CardCart class="h-100" :content-img="trendingImg" content-text="Watch" /> -->
            <base-card class="card-hover  h-100" >
         
                <div class="card-hover-icon  single-card">
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
                                              :src="require('@/assets/images/products/Fashion/Accessories/12.Xiaomimiband2.png')"
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
                    
                    height="550"
                    :src="require('@/assets/images/products/Fashion/Accessories/12.Xiaomimiband2.png')"
                  ></v-img>

                </nuxt-link>
                

                <div class="card-footer d-flex justify-content-between align-end">
                  <div class="flex-grow-1 my-3">
                    <nuxt-link to="/shop/SingleProduct" class="text-decoration-none">
                      <h6 class="mb-0 grey--text text--darken-4">Yike Shoe </h6>
                    </nuxt-link>
                    <div class="d-flex mb-1">
                      <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>

                      <div class="grey--text ml-1">
                        4.5 
                      </div>
                    </div>
                    <div class="d-flex">
                    
                      <h6 class="primary--text mr-2 mb-0">$110.00</h6>
                      <h6 class="gray--text lighten-4 text-decoration-line-through mb-0">$110.00</h6>
                    </div>
                  </div>
                  
                  <div class="d-flex flex-column">
                      <!-- <v-btn
                          class=" rounded "
                          outlined
                          fab
                          x-small
                          tile  
                          color="primary"
                      >
                          <v-icon>mdi-minus</v-icon>
                      </v-btn>
                      <div class="text-center">3</div> -->
                      <v-btn
                          class=" rounded"
                          outlined
                          fab
                          x-small
                          tile  
                          color="primary"
                      >
                          <v-icon>mdi-plus</v-icon>
                      </v-btn>
                  </div>
                </div>

              
          </base-card>
          </v-col>
          <v-col cols="12" lg="8">
            <v-row>
              <v-col 
                cols="12"
                v-for="(item, index) in trendingItems"
                :key="index"
                sm="6"
                md="6"
                lg="4"
                xl="3"
              >
                <CardCart :content-img="item.img" :content-text="item.name" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </v-col>

      <v-col cols="12" class=" mb-8">
        <div class="border-grey br-8">
          <div class="d-flex justify-space-between flex-wrap px-10 py-7">
            <div class="d-flex align-center">
              <v-avatar size="50" tile class="mr-3">
                <img
                  v-svg-inline
                  class="icon mr-2 primary--text"
                  src="@/assets/images/icons/delivery-truck.svg"
                  alt=""
                />
              </v-avatar>
              <div>
                <h3>Free Delivery</h3>
                <span class="text-14 grey--text text--darken-2">Orders Over</span>
              </div>
            </div>
            <div class="d-flex align-center">
              <v-avatar size="50" tile class="mr-3">
                <img
                  v-svg-inline
                  class="icon mr-2 primary--text"
                  src="@/assets/images/icons/piggy-bank.svg"
                  alt=""
                />
              </v-avatar>
              <div>
                <h3>Money Gurantee</h3>
                <span class="text-14 grey--text text--darken-2">7 Days Back</span>
              </div>
            </div>
            <div class="d-flex align-center">
              <v-avatar size="50" tile class="mr-3">
                <img
                  v-svg-inline
                  class="icon mr-2 primary--text"
                  src="@/assets/images/icons/alarm-clock.svg"
                  alt=""
                />
              </v-avatar>
              <div>
                <h3>365 Days</h3>
                <span class="text-14 grey--text text--darken-2">For Free Return</span>
              </div>
            </div>
            <div class="d-flex align-center">
              <v-avatar size="50" tile class="mr-3">
                <img
                  v-svg-inline
                  class="icon mr-2 primary--text"
                  src="@/assets/images/icons/credit-card-2.svg"
                  alt=""
                />
              </v-avatar>
              <div>
                <h3>Payment</h3>
                <span class="text-14 grey--text text--darken-2">Secure System</span>
              </div>
            </div>
            <div class="d-flex align-center">
              <v-avatar size="50" tile class="mr-3">
                <img
                  v-svg-inline
                  class="icon mr-2 primary--text"
                  src="@/assets/images/icons/smartphone.svg"
                  alt=""
                />
              </v-avatar>
              <div>
                <h3>Online Support</h3>
                <span class="text-14 grey--text text--darken-2">24/7 daily</span>
              </div>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="12" class="text-center">
        <v-avatar size="50" class="mb-3">
          <img
            v-svg-inline
            class="icon mr-2 primary--text"
            src="@/assets/images/icons/telegram.svg"
            alt=""
          />
        </v-avatar>
        <h2 class="mb-4">Subscribe To Our Newsletter</h2>
        <p class="grey--text text--darken-2 mb-6">and receive $20 coupon for the first Shopping</p>
        <div class="mb-8">
          <v-row>
            <v-col cols="12" md="6" lg="4" class="mx-auto">
              <div class=" input-group-btn">
                <v-text-field
                  class="rounded-r-0"
                  solo
                  placeholder="Enter Your Email Here"
                  flat
                  dense
                  outlined
                  hide-details=""
                ></v-text-field>
                <v-btn elevation="0" color="primary" class="font-600">
                  subscribe
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Navbar from "@/pages/home/navbar";
import CardCart from "@/components/cartCard/CardCart";
import { mapGetters, mapActions  } from 'vuex';

export default {
  // name: 'Home',
  components: {
    Navbar,
    CardCart
   
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
  head:{
    title: 'Home Four'
  },
  data() {
    return {
      tab: null,
      dialog: false,
      items: ["Brands", "Shops"],
      trendingImg: require('@/assets/images/products/Fashion/Accessories/12.Xiaomimiband2.png'),
      flashDeals: [
        {
          img: require("@/assets/images/products/flash-1.png"),
          name: 'Sneakers'
        },
        {
          img: require("@/assets/images/products/flash-2.png"),
          name: 'Watch'
        },
        {
          img: require("@/assets/images/products/flash-3.png"),
          name: 'Mobile'
        },
        {
          img: require("@/assets/images/products/flash-4.png"),
          name: 'Zapple Watch'
        },
        {
          img: require("@/assets/images/products/flash-1.png"),
          name: 'Hike Sneakers'
        },
        {
          img: require("@/assets/images/products/flash-2.png"),
          name: 'Watch'
        },
        {
          img: require("@/assets/images/products/flash-3.png"),
          name: 'Mobile'
        },
        {
          img: require("@/assets/images/products/flash-4.png"),
          name: 'Zapple Watch'
        }
      ],
      newArrivals: [
        {
          img: require("@/assets/images/products/imagegoggles.png"),
          title: "Sunglass",
          price: "$150"
        },
        {
          img: require("@/assets/images/products/lipstick(2).png"),
          title: "Lipstick",
          price: "$250"
        },
        {
          img: require("@/assets/images/products/lipstick(2).png"),
          title: "Lipstick",
          price: "$250"
        },
        {
          img: require("@/assets/images/products/bgwatch.png"),
          title: "Lipstick",
          price: "$250"
        },
        {
          img: require("@/assets/images/products/lipstick(4).png"),
          title: "Green Plant",
          price: "$250"
        },
        {
          img: require("@/assets/images/products/lipstick(3).png"),
          title: "Bonsai Tree",
          price: "$450"
        },
        {
          img: require("@/assets/images/products/lipstick(2).png"),
          title: "Lipstick",
          price: "$250"
        },
        {
          img: require("@/assets/images/products/bgwatch.png"),
          title: "Lipstick",
          price: "$250"
        },
        {
          img: require("@/assets/images/products/lipstick(4).png"),
          title: "Green Plant",
          price: "$250"
        },
        {
          img: require("@/assets/images/products/lipstick(3).png"),
          title: "Bonsai Tree",
          price: "$450"
        }
      ],
      slickSettings: {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,

        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true
            }
          },
          {
            breakpoint: 1264,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      slickSettingsSingleItem: {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
       
        
        
      },
      slickSettingsSixItem: {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,

        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true
            }
          },
          {
            breakpoint: 1264,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true
            }
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      trendingItems: [
        {
          img: require('@/assets/images/products/Fashion/Shoes/15.NikeMint.png'),
          name: 'Yike Mint'
        },
        {
          img: require('@/assets/images/products/Fashion/Shoes/16.NikeSilver.png'),
          name: 'Yike Silver'
        },
        {
          img: require('@/assets/images/products/Fashion/Shoes/17.NorthStarOlive.png'),
          name: 'Zorth Star Olive'
        },
        {
          img: require('@/assets/images/products/Fashion/Shoes/18.AdidasRainbow.png'),
          name: 'Oddidas Rainbow'
        },
        {
          img: require('@/assets/images/products/Fashion/Shoes/8.NikeSkill.png'),
          name: 'Yike Skill'
        },
        {
          img: require('@/assets/images/products/Fashion/Shoes/22.NikeBlackRed.png'),
          name: 'Yike Black Red'
        },
      ]
     
    };
  },
  methods: {
    ...mapActions(["addCart", "removeCart"]),
  }
};
</script>

<style lang="scss" scoped>
  .card-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
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
