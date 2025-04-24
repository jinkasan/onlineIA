<template>
  <div class="mt-32">
    
    <v-container>
      <div class="d-flex mb-4">
        <h1 class="primary--text me-2">Flash Deals,</h1>
        <h1 class="grey--text text--darken-2"> Enjoy Upto 80% discounts</h1>
      </div>
      <v-row>
        <v-col v-for="(n, index) in flashDeals" :key="index" cols="12" sm="6" md="6" lg="3">
            <a href="#"  class="text-decoration-none">
              <v-card
                outlined
                elevation="0"
                class="sale-card position-relative"
                :class=" active == index ? 'active' : '' "
                @click="saleCard(index)"
                
              >
                <v-chip
                  class="ma-2 p-absolute top-0 right-0"
                  small
                >
                    Upto 40% off
                </v-chip>
                <div class="text-center">

                  <img v-svg-inline class="mr-2" :src="n.img" alt="" />
                  <h4>{{ n.name }}</h4>
                </div>
              </v-card>
            </a>
        </v-col>

       
      </v-row>
      <v-row>
        <v-col cols="12">
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
                        lg="3"
                        xl="2"
                    
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
        </v-col>
      </v-row>
    </v-container>





    <div class="sale-page-top-bar" >
      <v-tabs
        v-model="tab"
        class="sale-page"
        centered
        
        icons-and-text
      >
        

        <v-tab  href="#tab-1">
          <p class="text-sm mb-0 text-capitalize">Women</p>
          <img v-svg-inline class="mr-2 size-28" src="@/assets/images/icons/women-dress.svg" alt="" />
        </v-tab>

        <v-tab href="#tab-2">
          <p class="text-sm mb-0 text-capitalize">Cosmetics</p>
          <img v-svg-inline class="mr-2 size-28" src="@/assets/images/icons/beauty-products.svg" alt="" />
        </v-tab>
        <v-tab href="#tab-3">
          <p class="text-sm mb-0 text-capitalize">Camera</p>
          <img v-svg-inline class="mr-2 size-28" src="@/assets/images/icons/camera.svg" alt="" />
        </v-tab>
        <v-tab href="#tab-4">
          <p class="text-sm mb-0 text-capitalize">Furniture</p>
          <img v-svg-inline class="mr-2 size-28" src="@/assets/images/icons/sofa.svg" alt="" />
        </v-tab>

       
      </v-tabs>
    </div>
   
  </div>
  
  
</template>

<script>
import { mapGetters, mapActions  } from 'vuex';
import CardCart from "@/components/cartCard/CardCart";
export default {
  components: {
    CardCart
  },
  data () {
    return {
      tab: null,
      page: 1,
      itemsPerPage: 8,
      active: 0,
      
      flashDeals: [
        {
          img: require('@/assets/images/icons/women-dress.svg'),
          name: 'Women'
        },
        {
          img: require('@/assets/images/icons/beauty-products.svg'),
          name: 'Cosmetics'
        },
        {
          img: require('@/assets/images/icons/camera.svg'),
          name: 'Camera'
        },
        {
          img: require('@/assets/images/icons/sofa.svg'),
          name: 'Furniture'
        },
      ]
     
    }
  },
  computed: {
    ...mapGetters(['getProducts']),
    numberOfPages () {
      return Math.ceil(this.items.length / this.itemsPerPage)
    }, 
  },
  head:{
    title: 'Sale Page ver 1.0'
  },
  created () {
    this.items = this.getProducts.slice(25, 50).map(n => n);
    // window.addEventListener('scroll', this.handleScroll);
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
      let salePage = document.querySelector('.sale-page');
      if(scrolled > 184){
        salePage.classList.add('block')
        
      }else {
        salePage.classList.remove('block')
      }
    },
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    saleCard(index) {
      this.active = index

    }
  }
}
</script>

<style lang="scss" scoped>
 .sale-card {
   background:transparent !important;
   padding-top: 60px;
   padding-bottom: 60px;

   svg {
     width: 44px !important;
     color: #0F3460;
     
   }
   &.active {
      
      .v-chip {
        background-color: #D23F57;
        color: #fff;
      } 
      svg {
        width: 44px !important;
        color: #D23F57;
      }
      h4 {
        color: #D23F57;
      }
   }
   &:hover {
      .v-chip {
        background-color: #D23F57;
        color: #fff;
      } 
      svg {
        width: 44px !important;
        color: #D23F57;
      }
      h4 {
        color: #D23F57;
      }
   }
 }
 
  .sale-page {
    position: fixed;
    top: 0;
    z-index: 99999;
    display: none;
    &.block {
      display: block;
    }
    .v-tabs-slider-wrapper {
      display: none;
    }
    
  }


</style>