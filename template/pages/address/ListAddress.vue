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
                                <v-avatar tile size="25" class="me-3">
                                    <img src="@/assets/images/icons/pin_filled.svg" alt="">
                                </v-avatar>
                                <h2 class="mb-0">My Addresses</h2>
                            </div>
                            <v-btn 
                                outlined 
                                color="primary" 
                                class="text-capitalize font-600"
                            >
                                Add New Addresses
                            </v-btn>
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
                                                <p class=" mb-0 ">Ralf Edward</p>
                                            </div>
                                            <div class="flex-1 mr-3">
                                                <p class="mb-0">777 Brockton Avenue, Abington MA 2351</p>
                                            </div>
                                            <div class="flex-1 mr-3">
                                                <p class="mb-0">+1927987987498</p>
                                            </div>
                                            
                                            <div class=" mr-3">
                                                <v-btn
                                                    icon
                                                    color="grey"
                                                    
                                                    class=""
                                                >
                                                    <v-icon>mdi-lead-pencil</v-icon>
                                                </v-btn>
                                                <v-btn
                                                    icon
                                                    color="grey"
                                                    
                                                    class=""
                                                >
                                                    <v-icon>mdi-trash-can-outline</v-icon>
                                                </v-btn>
                                            </div>
                                            
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
import DashbordSidebar from "@/components/DashboardSidebar.vue" 
export default {
    components: {
        DashbordSidebar
    },
    head: {
        title: 'List Address'
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

<style lang="scss" scoped>
    .dashboard-nav-link {
        color: #2B3445 !important;
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: space-between;
        border-left: 4px solid #fff;
        margin-bottom: 20px;
        svg {
            width: 20px;
        }
        &:hover, &.active {
            color: #D23F57 !important;
            border-left: 4px solid #D23F57;
        }
    }
</style>