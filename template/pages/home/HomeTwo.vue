<template>
  <v-container class="pt-0">
    <div class="box-wrapper box-wrapper-version-2">
        <div class="box-overlay" :class="{'open': isSidebar}"  @click="isSidebar = !isSidebar"></div>
        <div 
          class="box-sidebar d-flex flex-column home-two-sidebar pb-3 shadow-sm" 
          :class="{'open': isSidebar}"
        >
          <nuxt-link to="#" class="px-6 py-2 text-decoration-none home-two-sidebar-link">
           
            <v-avatar size="24" tile class="me-3">
              <img
                v-svg-inline
                class="icon mr-2"
                src="@/assets/images/icons/carrot.svg"
                alt=""
              />
            </v-avatar>
            <span class="font-600">Vegetables</span>
          </nuxt-link>
         
          <v-expansion-panels class="" flat>
              <v-expansion-panel class="">
                  <v-expansion-panel-header class="home-two-sidebar-link ">
                      <div class="d-flex align-center">
                        <v-avatar size="24" tile class="me-3">
                          <img
                            v-svg-inline
                            class="icon mr-2"
                            src="@/assets/images/icons/apple.svg"
                            alt=""
                          />
                        </v-avatar>
                        <span class="font-600">Fruits & Vegetables</span>
                      </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                      <div class="mb-2 ps-4">
                          <nuxt-link to="#" class="text-decoration-none ms-6 home-two-sidebar-link">Fresh Frutes</nuxt-link>
                      </div>
                      <div class="mb-2 ps-8">
                          <nuxt-link to="#" class="text-decoration-none ms-6 home-two-sidebar-link">Peaches, plums, apricots</nuxt-link>
                      </div>
                      <div class="mb-2 ps-8">
                          <nuxt-link to="#" class="text-decoration-none ms-6 home-two-sidebar-link">Peaches, plums, apricots</nuxt-link>
                      </div>
                      <div class="mb-2 ps-8">
                          <nuxt-link to="#" class="text-decoration-none ms-6 home-two-sidebar-link">Grapes</nuxt-link>
                      </div>
                     
                  </v-expansion-panel-content>
                   <v-expansion-panel-content>
                      <div class="mb-2 ps-4">
                          <nuxt-link to="#" class="text-decoration-none ms-6 home-two-sidebar-link">Fresh Vegetables</nuxt-link>
                      </div>
                      <div class="mb-2 ps-8">
                          <nuxt-link to="#" class="text-decoration-none ms-6 home-two-sidebar-link">Onion</nuxt-link>
                      </div>
                      <div class="mb-2 ps-8">
                          <nuxt-link to="#" class="text-decoration-none ms-6 home-two-sidebar-link">Potato</nuxt-link>
                      </div>
                      <div class="mb-2 ps-8">
                          <nuxt-link to="#" class="text-decoration-none ms-6 home-two-sidebar-link">Vegetable Pack</nuxt-link>
                      </div>
                     
                  </v-expansion-panel-content>
              </v-expansion-panel>

              
          </v-expansion-panels>
          <nuxt-link to="#" class="px-6 py-2 text-decoration-none home-two-sidebar-link">
           
            <v-avatar size="24" tile class="me-3">
              <img
                v-svg-inline
                class="icon mr-2"
                src="@/assets/images/icons/milk.svg"
                alt=""
              />
            </v-avatar>
            <span class="font-600">Dairy & Eggs</span>
          </nuxt-link>
          <nuxt-link to="#" class="px-6 py-2 text-decoration-none home-two-sidebar-link">
           
            <v-avatar size="24" tile class="me-3">
              <img
                v-svg-inline
                class="icon mr-2"
                src="@/assets/images/icons/breakfast.svg"
                alt=""
              />
            </v-avatar>
            <span class="font-600">Breakfast</span>
          </nuxt-link>
          <nuxt-link to="#" class="px-6 py-2 text-decoration-none home-two-sidebar-link">
           
            <v-avatar size="24" tile class="me-3">
              <img
                v-svg-inline
                class="icon mr-2"
                src="@/assets/images/icons/yogurt.svg"
                alt=""
              />
            </v-avatar>
            <span class="font-600">Frozen</span>
          </nuxt-link>
          <nuxt-link to="#" class="px-6 py-2 text-decoration-none home-two-sidebar-link">
           
            <v-avatar size="24" tile class="me-3">
              <img
                v-svg-inline
                class="icon mr-2"
                src="@/assets/images/icons/honey.svg"
                alt=""
              />
            </v-avatar>
            <span class="font-600">Organic</span>
          </nuxt-link>
          <nuxt-link to="#" class="px-6 py-2 text-decoration-none home-two-sidebar-link">
           
            <v-avatar size="24" tile class="me-3">
              <img
                v-svg-inline
                class="icon mr-2"
                src="@/assets/images/icons/beer.svg"
                alt=""
              />
            </v-avatar>
            <span class="font-600">Canned Food</span>
          </nuxt-link>
          <nuxt-link to="#" class="px-6 py-2 text-decoration-none home-two-sidebar-link">
            <v-avatar size="24" tile class="me-3">
              <img
                v-svg-inline
                class="icon mr-2"
                src="@/assets/images/icons/snack.svg"
                alt=""
              />
            </v-avatar>
            <span class="font-600">Coffe & Snacks</span>
          </nuxt-link>
          <nuxt-link to="#" class="px-6 py-2 text-decoration-none home-two-sidebar-link">
            <v-avatar size="24" tile class="me-3">
              <img
                v-svg-inline
                class="icon mr-2"
                src="@/assets/images/icons/bottle.svg"
                alt=""
              />
            </v-avatar>
            <span class="font-600">Sauce & Jerms</span>
          </nuxt-link>
          
          
        </div>
        <div class="box-content">
            <div class="d-flex justify-end pa-2 d-block d-md-none">
              <v-btn
                icon   
                @click="isSidebar = !isSidebar"
              >
                  <v-icon dark>
                      mdi-format-list-bulleted-square
                  </v-icon>
              </v-btn>
            </div>
            <div class="box-container mt-6">
              <VueSlickCarousel
                class="slick-secondary mb-6"
                :arrows="false"
                :dots="true"
                v-bind="slickSettingsSingleItem"
              >
                <div 
                  v-for="item in 3"
                  :key="item"
                  class="mb-10 mt-3"
                >
                  <div class="primary white--text br-8 p-relative">
                    
                    <v-row align="center" class="mb-4 px-10 py-8">
                      <v-col cols="12" lg="6">
                        <h1 class="mb-2">Get Your Grocery Within 40 Minutes</h1>
                        <h6 class="text-14 font-weight-light mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed pellentesque nibh tortor.</h6>
                        <h4 class="font-weight-bold mb-5">Try our mobile app!</h4>

                        <div class="d-flex flex-wrap">
                          <nuxt-link to="#" class="text-decoration-none pb-3">
                            <v-img max-width="130" class="mr-3" :src="require('@/assets/images/app-store/google-play.png')"></v-img>
                          </nuxt-link>
                          <nuxt-link to="#" class="text-decoration-none pb-3">
                            <v-img max-width="130"  :src="require('@/assets/images/app-store/app-store.png')"></v-img>
                          </nuxt-link>
                        </div>
                      </v-col>
                      <v-col cols="12" lg="6">
                        <v-img 
                          max-width="300px" 
                          min-width="200px"
                          class="mx-auto" 
                          height="auto" 
                          :src="require('@/assets/images/products/cumin.png')"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              
                  
                    
              </VueSlickCarousel>


              <v-row>
                <v-col cols="12" sm="6" lg="4">
                  <div class="border-grey pa-5 br-8">
                    <div class="d-flex align-center">
                      <v-avatar size="64" tile>
                        <img
                          v-svg-inline
                          class="icon mr-2 grey--text text--darken-2"
                          src="@/assets/images/icons/truck.svg"
                          alt=""
                        />
                      </v-avatar>
                      <div>
                        <h3 class="font-weight-bold mb-0">Fast Delivery</h3>
                        <p class="text-14 mb-0 grey--text text--darken-1">Fast Delivery</p>
                      </div>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6" lg="4">
                  <div class="border-grey pa-5 br-8">
                    <div class="d-flex align-center">
                      <v-avatar size="64" tile>
                        <img
                          v-svg-inline
                          class="icon mr-2 grey--text text--darken-2"
                          src="@/assets/images/icons/feedback-thumbs-up.svg"
                          alt=""
                        />
                      </v-avatar>
                      <div>
                        <h3 class="font-weight-bold mb-0">Great Feedback</h3>
                        <p class="text-14 mb-0 grey--text text--darken-1">97% Positive</p>
                      </div>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6" lg="4">
                  <div class="border-grey pa-5 br-8">
                    <div class="d-flex align-center">
                      <v-avatar size="64" tile>
                        <img
                          
                          class="icon mr-2 grey--text text--darken-2"
                          src="@/assets/images/icons/shield.svg"
                          alt=""
                        />
                      </v-avatar>
                      <div>
                        <h3 class="font-weight-bold mb-0">Secure Payment</h3>
                        <p class="text-14 mb-0 grey--text text--darken-1">100% Positive</p>
                      </div>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" class="pb-0">
                  <h2 class="mb-1 grey--text text--darken-4">Shop By Category</h2>
                </v-col>
                <v-col cols="12" class="mb-8">
                  <v-row>
                     <v-col
                      v-for="(item, index) in categories"
                      :key="index"
                      cols="12" 
                      lg="4"
                      
                      >
                          <nuxt-link to="/" class="text-decoration-none">
                            <base-card class="h-100" cardHoverShadow>
                              <div class="pa-8">
                                <div class="d-flex align-center">
                                  <v-avatar size="45" class="mr-2" tile>
                                    <img
                                      v-svg-inline
                                      class="icon mr-2"
                                      :src="item.img"
                                      alt=""
                                    />
                                  </v-avatar>
                                <div>
                                  <p class="text-10 mb-0 primary--text">{{ item.smallTitle }}</p>
                                  <h5 class="text-16 font-600"> {{ item.title }} </h5>
                                </div>
                                </div>
                              </div>
                            </base-card>
                          </nuxt-link>
                          
                     </v-col>
                  </v-row>
                </v-col>
                <!-- Featured-items  -->
                <v-col cols="12" class="pb-0">
                  <h2 class="mb-0 grey--text text--darken-4">Featured Items</h2>
                </v-col>
                <v-col cols="12" class="px-0 mb-8">
                  <VueSlickCarousel
                    class="slick-secondary slick-button-hover pb-8"
                    :arrows="true"
                    :dots="true"
                    v-bind="slickSettingsFour"
                  >
                    <v-col cols="12" v-for="(item, index) in getProducts.slice(60, 68).map(n => n)" :key="index">
                        
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
                        class="mx-2 slick-arrow  "
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
                        class="mx-2 slick-arrow "
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
                <v-col cols="12" class="pb-0">
                    <h2 class="mb-0 grey--text text--darken-4">Best Seller in Your Area</h2>
                </v-col>
                <v-col cols="12" class="px-0 mb-8">
                  <VueSlickCarousel
                    class="slick-secondary slick-button-hover pb-8"
                    :arrows="true"
                    :dots="true"
                    v-bind="slickSettingsFour"
                  >
                    <v-col cols="12" v-for="(item, index) in getProducts.slice(68, 76).map(n => n)" :key="index">
                        
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
                        class="mx-2 slick-arrow  "
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
                        class="mx-2 slick-arrow "
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
                <v-col cols="12" class="px-0 mb-8">
                  <VueSlickCarousel
                    class="slick-secondary mb-6"
                    :arrows="false"
                    :dots="true"
                    v-bind="slickSettingsSingleItem"
                  >
                    <div 
                      v-for="(item, index) in specialOffer"
                      :key="index"
                      class="mb-10 mt-3"
                    >
                      <div 
                        class=" br-8 p-relative"
                        :class="item.bgColor"
                      >
                        
                        <v-row align="center" class="mb-4 px-10 py-8">
                          <v-col cols="12" lg="6">
                            <h4 class="font-600 mb-2">{{ item.smallTitle }}</h4>
                            <v-col cols="12" lg="11" xl="9" class="px-0">
                              <h1 class="mb-8">{{ item.bigTitle }}</h1>
                            </v-col>
                            <v-btn color="primary" class="font-600 text-capitalize">
                              Shop Now
                            </v-btn>
                          </v-col>
                          <v-col cols="12" lg="6">
                            <v-img 
                              max-width="300px" 
                              class="mx-auto" 
                              height="auto" 
                              :src="item.img"
                            ></v-img>
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  
                      
                        
                  </VueSlickCarousel>
                </v-col>
                <v-col cols="12" class="pb-0">
                  <h2 class="mb-0 grey--text text--darken-4">Best of Home Essentials</h2>
                </v-col>
                <v-col cols="12" class="px-0 mb-8">
                  <VueSlickCarousel
                    class="slick-secondary slick-button-hover pb-8"
                    :arrows="true"
                    :dots="true"
                    v-bind="slickSettingsFour"
                  >
                    <v-col cols="12" v-for="(item, index) in getProducts.slice(76, 83).map(n => n)" :key="index">
                        
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
                        class="mx-2 slick-arrow  "
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
                        class="mx-2 slick-arrow "
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
                <v-col cols="12" class="pb-0">
                  <h2 class="mb-0 grey--text text--darken-4">Snacks, Drinks, Dairy & More</h2>
                </v-col>
                <v-col cols="12" class="px-0 mb-8">
                  <VueSlickCarousel
                    class="slick-secondary slick-button-hover pb-8"
                    :arrows="true"
                    :dots="true"
                    v-bind="slickSettingsFour"
                  >
                    <v-col cols="12" v-for="(item, index) in getProducts.slice(83, 90).map(n => n)" :key="index">
                        
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
                        class="mx-2 slick-arrow  "
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
                        class="mx-2 slick-arrow "
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
                <v-col cols="12" class="px-0 mb-8">
                  <VueSlickCarousel
                    class="slick-secondary slick-button-hover mb-6"
                    :arrows="true"
                    :dots="true"
                    v-bind="slickSettingsSingleItem"
                  >
                    <div 
                      v-for="item in 3"
                      :key="item"
                      class="mb-10 my-3 px-4"
                    >
                      <div class="white br-8 shadow p-relative">
                        
                        <v-row align="center" class="mb-4  py-8">
                         <v-col cols="12" lg="8" xl="6" class="mx-auto">
                           <div class="d-flex p-relative flex-sm-nowrap flex-wrap py-10">

                             <v-avatar size="64" class="quote-open me-5 d-sm-block d-none" tile>
                               <img
                                  
                                  class="icon mr-2 primary--text"
                                  src="@/assets/images/icons/quote-open.svg"
                                  alt=""
                              />
                             </v-avatar>
                             <v-avatar size="64" class="mr-8">
                               <img src="@/assets/images/faces/7.png" alt="">
                             </v-avatar>
                             <div>
                                <p class="text-16 grey--text text--darken-3 mb-2">
                                  Satisfied by their professionalism ! Got my tea bags in time. Didn't have to pay any delivery charge. I can't believe that. Keep it up !
                                </p>
                                <h5 class="font-weight-bold text-16">Jonathon Doe</h5>
                             </div>
                             <v-avatar size="64" tile class="quote-open-bottom ms-5 d-sm-block d-none">
                               <img
                                  
                                  class="icon mr-2 primary--text"
                                  src="@/assets/images/icons/quote-close.svg"
                                  alt=""
                              />
                             </v-avatar>
                           </div>
                         </v-col>
                        </v-row>

                        
                      </div>
                      
                    </div>
                  
                      
                        
                  </VueSlickCarousel>
                </v-col>

                <v-col cols="12">
                  <v-footer
                    dark
                    color="secondary"
                    class="br-8"
                  >
                    <v-container>
                        <v-row>
                            <v-col cols="12" class="pb-0">
                              <v-avatar width="98" height="44" tile class="mb-0">
                                    <img src="@/assets/images/logo.svg" alt="">
                              </v-avatar>
                            </v-col>
                            <v-col cols="12" xl="6" lg="6" >
                                
                                <p class="footer-text mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet</p>
                                <div class="d-flex flex-sm-nowrap flex-wrap">
                                    <a href="#" class="me-3 mb-3">
                                        <v-img max-width="130" src="@/assets/images/app-store/google-play.png"></v-img>
                                    </a>
                                    <a href="#">
                                        <v-img max-width="130" src="@/assets/images/app-store/app-store.png"></v-img>
                                    </a>
                                </div>
                            </v-col>

                            <v-col cols="12" offset-xl="3" xl="3" lg="6" >
                                
                                <div class="mb-1">
                                    <a href="#" class="text-decoration-none footer-link-hover ">Help Center</a>
                                </div>
                                <div class="mb-1">
                                    <a href="#" class="text-decoration-none footer-link-hover ">Track Your Order</a>
                                </div>
                                <div class="mb-1">
                                    <a href="#" class="text-decoration-none footer-link-hover ">Corporate & Bulk Purchasing</a>
                                </div>
                                <div class="mb-1">
                                    <a href="#" class="text-decoration-none footer-link-hover ">Returns & Refunds</a>
                                </div>
                                <v-btn
                                    v-for="icon in icons"
                                    :key="icon"
                                    class="me-2 white--text mt-5"
                                    elevation="0"
                                    x-small
                                    fab
                                    dark
                                    color="secondary darken-1"
                                >
                                  <v-icon small size="24px">
                                      {{ icon }}
                                  </v-icon>
                                </v-btn>
                            </v-col>
                            
                        </v-row>
                    </v-container>
                  </v-footer>
                </v-col>

              </v-row>
            </div>
        </div>
    </div>
  </v-container>
</template>

<script>
import CardCart from "@/components/cartCard/CardCart";
import { mapGetters, mapActions  } from 'vuex';
export default {
    components: {
        CardCart
    },
    computed: {
      ...mapGetters(['getProducts']),
    },
    head:{
      title: 'Grocery'
    },
    data() {
        return{
            isSidebar: false,
            isSidebarHomeTwo: false,
            slickSettingsSingleItem: {
              infinite: false,
              arrows: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
              
            },
            icons: [
              'mdi-facebook',
              'mdi-twitter',
              'mdi-youtube',
              'mdi-google',
              'mdi-instagram',
            ],
            slickSettingsFour: {
                infinite: false,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 0,

                responsive: [
                {
                    breakpoint: 1904,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                    }
                },
                {
                    breakpoint: 1263,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
            categories: [
              {
                  img: require('@/assets/images/icons/healthy-food.svg'),
                  smallTitle: 'Upto 60% Off',
                  title: 'Fruits & Vegatables'
              },
              {
                  img: require('@/assets/images/icons/feeding-bottle.svg'),
                  smallTitle: 'Upto 30% Off',
                  title: 'Baby Food'
              },
              {
                  img: require('@/assets/images/icons/wheat-flour.svg'),
                  smallTitle: 'Upto 40% Off',
                  title: 'Rice & Flour'
              },
              {
                  img: require('@/assets/images/icons/healthy-food.svg'),
                  smallTitle: 'Upto 40% Off',
                  title: 'Fruits & Vegatables'
              },
              {
                  img: require('@/assets/images/icons/feeding-bottle.svg'),
                  smallTitle: 'Upto 30% Off',
                  title: 'Baby Food'
              },
              {
                  img: require('@/assets/images/icons/wheat-flour.svg'),
                  smallTitle: 'Upto 40% Off',
                  title: 'Rice & Flour'
              },

            ],
           
            
           
           
            specialOffer: [
              {
                img: require('@/assets/images/products/vegetable-1.png'),
                smallTitle: 'Till 10 Sept, 2021',
                bigTitle: '25% Special Off Today Only for Vegetables',
                bgColor: 'light-green lighten-5'
              },
              {
                img: require('@/assets/images/products/vegetable-2.png'),
                smallTitle: 'Subscribe Us',
                bigTitle: '15% Off for All Product Only Need to Subscribe',
                bgColor: 'orange lighten-5'
              },
              {
                img: require('@/assets/images/products/vegetable-1.png'),
                smallTitle: 'Till 10 Sept, 2021',
                bigTitle: '25% Special Off Today Only for Vegetables',
                bgColor: 'light-green lighten-5'
              }
            ]
        }
    },
    created () {
       if (process.browser){
          window.addEventListener('scroll', this.handleScroll);
       }
     
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      ...mapActions(["addCart", "removeCart"]),
      handleScroll (event) {
      
        const scrolled = window.scrollY;
        let HomeTwoSidebar = document.querySelector('.home-two-sidebar');
        if(scrolled > 68){
          HomeTwoSidebar.classList.add('scroll-home-two')
          
        }else {
          HomeTwoSidebar.classList.remove('scroll-home-two')
        }
      },
     
    }
   
}
</script>

<style lang="scss" scoped>
  .quote-open {
        margin-top: -39px;
  }
  .quote-open-bottom {
       margin-top: 65px;
  }
  a.footer-link-hover {
      color: #BDBDBD !important;
      &:hover {
          color: #fff !important;
      }
  }


  .box-sidebar{
    &.home-two-sidebar {
          position: absolute;
          padding-top: 20px;
          height: 100vh;
          @media(max-width: 959px){
            position: fixed;
            top: 0;
          }
          &.scroll-home-two {
            position: fixed;
            top: 80px;
            @media(max-width: 959px){
              position: fixed;
              top: 0px;
            }
          }
    }
  }

  .home-two-color {
    color: rgb(75, 86, 107);
  }
  .home-two-sidebar-link {
    color: rgb(75, 86, 107);
    &:hover {
     
      color: #d23f57;
    }
  }
</style>