<template>
  <div>
      <v-container>
        <h2 class="mb-6">All Shops</h2>
        
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
                    v-for="item in props.items"
                    :key="item.name"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="4"
                    xl="3"
                  >
                    <base-card class="vendor-card p-relative">
                      <v-img
                        height="250"
                        
                        :src="item.img"
                        gradient="rgba(43, 52, 69,.8), rgba(43, 52, 69,.8)"
                      ></v-img>
                      <div class="p-absolute top-0 ma-5">
                        <h3 class="white--text mb-0">{{ item.title }}</h3>
                        <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          class="mb-3"
                          size="16"
                        ></v-rating>
                        <div class="d-flex align-start mb-2">
                          <v-icon small class="mr-2" color="white">mdi-map-marker</v-icon>
                          <span class="white--text">845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark</span>
                        </div>
                        <div class="d-flex align-start mb-2">
                          <v-icon small class="mr-2" color="white">mdi-phone</v-icon>
                          <span class="white--text">(613) 343-9004</span>
                        </div>
                      </div>
                      <v-card-text class="p-relative">
                        <div class="vendor-avatar">
                          <v-avatar size="56">
                            <img :src="item.avatar" alt="">
                          </v-avatar>
                        </div>
                      </v-card-text>
                      <v-card-actions class="d-flex justify-end align-center p-relative">
                        <div class="vendor-btn mr-3">
                          <v-btn
                          icon
                          color="grey darken-1"
                        >
                        
                          <img class="icon" src="@/assets/images/icons/arrow-long-right.svg" alt="" />
                        </v-btn>
                        </div>
                      </v-card-actions>
                    </base-card>
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
      </v-container>
  </div>
</template>

<script>
import CardCart from "@/components/cartCard/CardCart";
export default {
  components: {
    CardCart
  },
  head:{
    title: 'All Vendor'
  },
  data () {
    return {
      tab: null,
      page: 1,
      itemsPerPage: 8,
      items: [
        {
          img: require('@/assets/images/banners/cycle.png'),
          title: 'Scarlett Beauty',
          avatar: require('@/assets/images/faces/2.jpg')
        },
        {
          img: require('@/assets/images/banners/banner.png'),
          title: 'Scroll Through',
          avatar: require('@/assets/images/faces/3.jpg')
        },
        {
          img: require('@/assets/images/banners/banner-3.png'),
          title: 'Coveted Clicks',
          avatar: require('@/assets/images/faces/4.jpg')
        },
        {
          img: require('@/assets/images/banners/banner-4.png'),
          title: 'Constant Shoppers',
          avatar: require('@/assets/images/faces/5.jpg')
        },
        {
          img: require('@/assets/images/banners/banner-5.png'),
          title: 'Keyboard Kiosk',
          avatar: require('@/assets/images/faces/6.png')
        },
        {
          img: require('@/assets/images/banners/banner-6.png'),
          title: 'Anytime Buys',
          avatar: require('@/assets/images/faces/9.jpg')
        },
        {
          img: require('@/assets/images/banners/banner-7.png'),
          title: 'Word Wide Wishes',
          avatar: require('@/assets/images/faces/4.jpg')
        },
        {
          img: require('@/assets/images/banners/banner-8.png'),
          title: 'Cybershop',
          avatar: require('@/assets/images/faces/3.jpg')
        },
        {
          img: require('@/assets/images/banners/banner-9.png'),
          title: 'Cybershop',
          avatar: require('@/assets/images/faces/6.png')
        },
        {
          img: require('@/assets/images/banners/banner.png'),
          title: 'Scroll Through',
          avatar: require('@/assets/images/faces/3.jpg')
        },
        {
          img: require('@/assets/images/banners/banner-3.png'),
          title: 'Coveted Clicks',
          avatar: require('@/assets/images/faces/4.jpg')
        },
        {
          img: require('@/assets/images/banners/banner-4.png'),
          title: 'Constant Shoppers',
          avatar: require('@/assets/images/faces/5.jpg')
        },
        {
          img: require('@/assets/images/banners/banner-5.png'),
          title: 'Keyboard Kiosk',
          avatar: require('@/assets/images/faces/6.png')
        },
        {
          img: require('@/assets/images/banners/banner-6.png'),
          title: 'Anytime Buys',
          avatar: require('@/assets/images/faces/9.jpg')
        },
        {
          img: require('@/assets/images/banners/banner-7.png'),
          title: 'Word Wide Wishes',
          avatar: require('@/assets/images/faces/4.jpg')
        },
        {
          img: require('@/assets/images/banners/banner-8.png'),
          title: 'Cybershop',
          avatar: require('@/assets/images/faces/3.jpg')
        },
        {
          img: require('@/assets/images/banners/banner-9.png'),
          title: 'Cybershop',
          avatar: require('@/assets/images/faces/6.png')
        },
      ],
      
     
    }
  },
  computed: {
    numberOfPages () {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    
    
  },
  
  methods: {
  
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    
  }
}
</script>

<style lang="scss" scoped>
  .vendor-card {
    .vendor-avatar {
      position: absolute;
      top: -28px;
      left: 20px;
      img {
        border: 4px solid #fff;
      }
    }
    .vendor-btn {
      position: absolute;
      bottom: 6px;
    }
  }
  
</style>