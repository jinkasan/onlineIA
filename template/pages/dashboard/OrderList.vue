<template>
  <v-container class="py-6">
      <v-row>
        <v-col cols="12">
            <div class="box-wrapper">
                <div class="box-overlay" :class="{'open': isSidebar}"  @click="isSidebar = !isSidebar"></div>
                <div class="box-sidebar pb-3 shadow-sm" :class="{'open': isSidebar}">
                     <DashboardSidebarTwo />
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
                       <div class="d-flex align-center mb-5">
                           <v-avatar tile size="25" class="me-3">
                               <img src="@/assets/images/icons/bag_filled.svg" alt="">
                           </v-avatar>
                            <h2 class="mb-0">My Orders</h2>
                       </div>
                       <div class="d-none px-4 d-md-flex mb-5">
                           <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Order #</h4>
                           <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Status </h4>
                           <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Date Purchased </h4>
                           <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Total </h4>
                           <div class="px-5">
                            
                           </div>
                       </div>
                       
                       <v-data-iterator
                            :items="items"
                            :items-per-page.sync="itemsPerPage"
                            :page.sync="page"
                            hide-default-footer
                        >
                            

                            <template v-slot:default="props">
                            <v-row>
                                <v-col
                                v-for="item in props.items"
                                :key="item.name"
                                cols="12"
                               
                                
                                >
                                 <a href="#" class="text-decoration-none">
                                    <base-card class="">
                                        <div class="pa-4 d-flex align-center flex-wrap">
                                            <div class="flex-1 mr-3">
                                                <h4 class="font-600 mb-0 ">1050017AS</h4>
                                            </div>
                                            <div class="flex-1 mr-3">
                                                <v-chip
                                                    class="ma-2"
                                                    color="grey lighten-2"
                                                    small
                                                >
                                                    Primary
                                                </v-chip>
                                            </div>
                                            <div class="flex-1 mr-3">
                                                <p class="mb-0">jun 09, 2021</p>
                                            </div>
                                            
                                            <div class="flex-1 mr-3">
                                                <p class="mb-0">$350.00</p>
                                            </div>
                                            <v-btn
                                                icon
                                                color="grey"
                                                class=""
                                                to="/orders/OrderDetails"
                                            >
                                                <v-icon>mdi-arrow-right</v-icon>
                                            </v-btn>
                                        </div>
                                    </base-card>
                                 </a>
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
                    </div>
                </div>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardCart from "@/components/cartCard/CardCart";
import DashbordSidebarTwo from "@/components/DashboardSidebarTwo.vue";
export default {
    components: {
        CardCart,
        DashbordSidebarTwo
    },
    head: {
        title: 'Order List'
    },
    data() {
        return{
            isSidebar: false,
            page: 1,
            itemsPerPage: 5,
            items: [0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20],
            
            range: [0, 100, 500, 1000],
            itemsTwo: ['Low to High', 'High to Low', 'Date'],
            
            
        }
    },
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      }, 
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
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

