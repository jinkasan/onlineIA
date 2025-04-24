<template>
  <v-container class="mt-6">
      <v-row>
          <v-col cols="12">
              <base-card>
                <v-card-text class="ps-6 d-flex justify-space-between align-center flex-wrap">
                    <div class="my-2">
                        <h4 class="">Searching for "mobile phone"</h4>
                        <p class="gray--text text--darken-1 mb-0">48 results found</p>
                    </div>
                    <div class="d-flex align-center flex-wrap">
                        <div class="grey--text text--darken-1 me-2 my-2">Sort by :</div>
                        <v-select
                            class="border me-5"
                            :items="itemsTwo"
                            label="Relevance"
                            dense
                            v-model="select"
                            @change="relevance('amount')"
                            outlined
                            hide-details
                            flat
                            
                        ></v-select>
                        <div class="grey--text text--darken-1 me-2 my-2">View :</div>
                        <v-btn
                            icon
                        >
                            <img class="icon" src="@/assets/images/icons/grid.svg" alt="" />
                        </v-btn>
                        <v-btn
                            icon
                            
                        >
                            <img class="icon" src="@/assets/images/icons/menu.svg" alt="" />
                        </v-btn>
                        
                    </div>
                </v-card-text>
              </base-card>
          </v-col>
          <v-col cols="12">
              <div class="box-wrapper">
                  <div class="box-overlay" :class="{'open': isSidebar}"  @click="isSidebar = !isSidebar"></div>
                  <div class="box-sidebar pb-3 shadow-sm" :class="{'open': isSidebar}">
                    <h5 class="ps-6 mt-6">Categories</h5>
                    <v-expansion-panels class="py-0" flat>
                        <v-expansion-panel class="pa-0">
                            <v-expansion-panel-header class="grey--text text--darken-2 py-0">
                                Bath Preparations
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <div class="mb-2">
                                    <a href="#" class="text-decoration-none grey--text text--darken-2 ms-6 ">Bubble Path</a>
                                </div>
                                <div>
                                    <a href="#" class="text-decoration-none grey--text text--darken-2 ms-6">Bubble Path</a>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        
                    </v-expansion-panels>
                    <div class="ps-6 pb-3">
                        <a href="#" class=" text-decoration-none grey--text text--darken-2">Eye Makeup Preparations</a>
                    </div>
                    <div class="ps-6 pb-3">
                        <a href="#" class=" text-decoration-none grey--text text--darken-2">Fragnance</a>
                    </div>
                    <div class="ps-6 pb-3">
                        <a href="#" class=" text-decoration-none grey--text text--darken-2">Hair Preparations</a>
                    </div>
                    <v-divider class="mx-6 my-1"></v-divider>
                    
                    <div class="mx-6 pt-3">
                        <h5 class="">Categories</h5>
                        <v-range-slider
                            class=" mt-10"
                            :value="[1, 2]"
                            min="0"
                            max="3"
                            
                            tick-size="4"
                        >
                            <template v-slot:thumb-label="props">
                               
                                   {{ season(props.value) }}
                                
                            </template>   
                        </v-range-slider>

                        <v-divider class="pa-0 ma-0"></v-divider>
                        <h5 class="pt-3">Brands</h5>
                        <div 
                            v-for="(category, index) in getCategory"
                            :key="index"
                        >
                            <v-checkbox
                                hide-details
                                @change="filterCategory(category)"
                                class="mt-3"
                                v-model="selected"
                                :label="category.title"
                                :value="category.title"
                            ></v-checkbox>
                        </div>
                       
                        

                        <v-divider class="mt-3"></v-divider>
                        <h5 class="py-3">Ratings</h5>
                        <div
                            v-for="(sidebarRating) in getRatings"
                            :key="sidebarRating.id"
                        >
                            <div @click="productRate(sidebarRating)" class="cursor-pointer mb-3">
                                <!-- <v-checkbox
                                    hide-details
                                    class="mt-0"
                                    :value="sidebarRating.rates"
                                    v-model="selected"
                                    @change="filterRatings(sidebarRating)"
                                >  
                                </v-checkbox> -->
                                <v-rating
                                    
                                    :value="sidebarRating.rates"
                                    background-color="amber"
                                    color="amber"
                                    dense
                                    half-increments
                                    readonly
                                    size="19"
                                ></v-rating>
                            </div>
                        </div>
                        
                       
                        <v-divider class="mt-3"></v-divider>
                        <h5 class="py-3">Colors</h5>
                        <div class="d-flex pb-3">
                            <a href="#" class="me-2">
                                <div class="black pa-3  rounded-circle"></div>
                            </a>
                            <a href="#" class="me-2">
                                <div class="primary lighten-2 pa-3  rounded-circle"></div>
                            </a>
                            <a href="#" class="me-2">
                                <div class="orange lighten-3 pa-3  rounded-circle"></div>
                            </a>
                            <a href="#" class="me-2">
                                <div class="green lighten-3 pa-3  rounded-circle"></div>
                            </a>
                            <a href="#" class="me-2">
                                <div class="light-blue lighten-3 pa-3  rounded-circle"></div>
                            </a>
                            <a href="#" class="me-2">
                                <div class="deep-purple lighten-3 pa-3  rounded-circle"></div>
                            </a>

                        </div>
                    </div>
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
                      <div class="box-container">
                          <v-row>
                            <v-col cols="12">
                                <v-data-iterator
                                    :items="items"
                                    :items-per-page.sync="itemsPerPage"
                                    :page.sync="page"
                                    hide-default-footer
                                >
                                    

                                    <template v-slot:default="props">
                                    <v-row>
                                        <v-col
                                            v-for="(item, index) in props.items"
                                            :key="index"
                                            cols="12"
                                            sm="6"
                                            md="6"
                                            lg="4"
                                            xl="3"
                                        
                                        >
                                        
                                            <CardCart 
                                                :content-img="item.img"
                                                :content-text="item.title"
                                                :amount="item.amount"
                                                :contentRating="item.rating"
                                                :counter="item.qty"
                                                @cartRemove="removeCart(item)"
                                                @cartAdd="addCart(item)"
                                            >
                                                
                                            </CardCart>
                                        </v-col>
                                    </v-row>
                                    </template>

                                    <template v-slot:footer>
                                    <v-row
                                        class="my-5 me-1"
                                        align="center"
                                        justify="center"
                                    >
                                        

                                        <v-spacer></v-spacer>

                                        <span
                                        class="mr-4
                                        grey--text"
                                        >
                                        Page {{ page }} of {{ numberOfPages }}
                                        </span>
                                        <v-btn
                                        fab
                                        :disabled="page == 1"
                                        small
                                        color="primary"
                                        class="mr-1"
                                        
                                        @click="formerPage"
                                        >
                                        <v-icon>mdi-chevron-left</v-icon>
                                        </v-btn>
                                        <v-btn
                                        fab
                                        
                                        :disabled="page == numberOfPages"
                                        small
                                        color="primary"
                                        class="ml-1"
                                        @click="nextPage"
                                        >
                                        <v-icon>mdi-chevron-right</v-icon>
                                        </v-btn>
                                    </v-row>
                                    </template>
                                </v-data-iterator>
                            </v-col>
                          </v-row>
                      </div>
                  </div>
              </div>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions  } from 'vuex';
import CardCart from "@/components/cartCard/CardCart";
export default {
    components: {
        CardCart
    },
    head: {
        title: 'Search Product'
    },
    data() {
        return{
            isSidebar: false,
            page: 1,
            itemsPerPage: 8,
           
            range: [0, 100, 500, 1000],
            itemsTwo: ['Low to High', 'High to Low'],
            select: '',
            cartCount: 0,
            filterProductList: [],
            filterProduct: [],
            selected: []
        }
    },
    computed: {
     ...mapGetters(['getProducts', 'getCategory', 'getRatings']),
     
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      }, 
      
    },
    created () {
        
        this.items = this.getProducts
        // this.items = this.getProducts.slice(0, 15).map(n => n);
        
        
        
    },
   
    methods: {
        ...mapActions(["addCart", "removeCart"]),
        relevance(amount) {
            
            if(this.select == 'Low to High'){
               this.items = this.items.sort((a,b) =>  a[amount] < b[amount] ? -1 : 1)
            }else {
                this.items = this.items.sort((a,b) =>  a[amount] > b[amount] ? -1 : 1)
            }
        },
        // fullProducts () {
        //   this.items = this.getProducts
        // },
        nextPage () {
            if (this.page + 1 <= this.numberOfPages) this.page += 1
        },
        formerPage () {
            if (this.page - 1 >= 1) this.page -= 1
        },
        season (val) {
            return this.range[val]
        },
        
        filterCategory (category) {
             this.items = this.getProducts.filter(x => this.selected.includes(x.category) )
            if(this.selected.length <= 0){
                this.items = this.getProducts;
            } 
        },
        filterRatings(rating) {
          

            this.items = this.getProducts.filter(x => this.selected.includes(x.rating) )
            if(this.selected.length <= 0){
                this.items = this.getProducts;
            } 
        },
        productRate(rate) {
             
            this.items = this.getProducts.filter(x =>x.rating == rate.rates )
            // this.items = this.filterProduct.sort((a, b) => a[rate.rates] < b[rate.rates] ? -1 : 1)
        }       
    }
}
</script>

