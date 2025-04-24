<template>
  <v-container class="py-6">
      <v-row>
        <v-col cols="12">
            <div class="box-wrapper">
                <div class="box-overlay" :class="{'open': isSidebar}"  @click="isSidebar = !isSidebar"></div>
                <div class="box-sidebar pb-3 shadow-sm" :class="{'open': isSidebar}">
                   <DashbordSidebar />
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
                       <div class="d-flex justify-space-between flex-wrap mb-5">
                           <div class="d-flex align-center ">
                                <img class="icon mr-3 primary--text" src="@/assets/images/icons/heart_filled.svg" alt="" />
                                <h2 class="mb-0">My Wish List</h2>
                            </div>
                            <v-btn 
                                color="primary"
                                outlined
                                class="text-capitalize font-600"
                            >
                                Add All to Cart
                            </v-btn>
                       </div>
                      
                       
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
                                            xl="4"
                                        
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
import DashbordSidebar from "@/components/DashboardSidebar.vue";
import CardCart from "@/components/cartCard/CardCart";
export default {
    components: {
        DashbordSidebar,
        CardCart
    },
    head: {
        title: 'Wishlist'
    },
    data() {
        return{
            isSidebar: false,
            page: 1,
            itemsPerPage: 8,
            items: [
                {
                img: require("@/assets/images/products/flash-1.png"),
                title: 'Sneakers'
                },
                {
                img: require("@/assets/images/products/flash-2.png"),
                title: 'Watch'
                },
                {
                img: require("@/assets/images/products/flash-3.png"),
                title: 'Mobile'
                },
                {
                img: require("@/assets/images/products/flash-4.png"),
                title: 'Zapple Watch'
                },
                {
                img: require("@/assets/images/products/flash-1.png"),
                title: 'Hike Sneakers'
                },
                {
                img: require("@/assets/images/products/flash-2.png"),
                title: 'Watch'
                },
                {
                img: require("@/assets/images/products/flash-3.png"),
                title: 'Mobile'
                },
                {
                img: require("@/assets/images/products/flash-4.png"),
                title: 'Zapple Watch'
                },
                {
                img: require("@/assets/images/products/Electronics/29.AppleEarphones.png"),
                title: 'Kony Earbuds'
                },
                {
                img: require("@/assets/images/products/Electronics/30.Nokiaandroidone.png"),
                title: 'Mobile'
                },
                {
                img: require("@/assets/images/products/Electronics/4.LumixDSLR.png"),
                title: 'Camera'
                },
                {
                img: require("@/assets/images/products/Electronics/2.COSOR1.png"),
                title: 'Coffee Maker'
                },
                {
                img: require("@/assets/images/products/Electronics/20.TascuigoAriadryLight.png"),
                title: 'Mini Fridge'
                },
                {
                img: require("@/assets/images/products/Electronics/31.Symphonlights.png"),
                title: 'Mobile'
                },
                {
                img: require("@/assets/images/products/flash-3.png"),
                title: 'Smart Phone'
                },
                {
                img: require("@/assets/images/products/bgmobile1.png"),
                title: 'Kamsung Phone'
                }
                
            ],
            range: [0, 100, 500, 1000],
            itemsTwo: ['Low to High', 'High to Low', 'Date'],
            
            
        }
    },
    computed: {
      ...mapGetters(['getProducts']),
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      }, 
    },
    created () {
        this.items = this.getProducts.slice(25, 50).map(n => n);
        
    },
    
    methods: {
        ...mapActions(["addCart", "removeCart"]),
        nextPage () {
            if (this.page + 1 <= this.numberOfPages) this.page += 1
        },
        formerPage () {
            if (this.page - 1 >= 1) this.page -= 1
        },
        season (val) {
            return this.range[val]
        },
    }
       
}
</script>
