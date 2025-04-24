<template>
  <div
    :class="[
      { 'sale-page-one': $route.path == '/salePage/SalePageOne' },
      { 'sale-page-two': $route.path == '/salePage/SalePageTwo' },
    ]"
  >
    <div
      class="secondary white--text top-bar"
      :class="{ 'd-none': $route.path == '/home/HomeTwo' }"
    >
      <v-container>
        <div class="d-flex justify-space-between align-center">
          <v-toolbar-title>
            <v-img
              class="me-2 logo d-md-none d-block"
              width="98"
              src="@/assets/images/logo.svg"
              alt=""
            ></v-img>
            <div class="mr-2 d-md-block d-none">
              <v-icon class="mr-2 white--text" small>mdi-phone-outline</v-icon>
              <span class="text-sm mr-5">+9012 3456 789</span>
              <v-icon class="mr-2 white--text" small>mdi-phone-outline</v-icon>
              <span class="text-sm">+9012 3456 7</span>
            </div>
          </v-toolbar-title>
          <v-toolbar-title>
            <span class="white--text text-sm mr-5 d-md-inline-block d-none"
              >Theme FAQ's</span
            >
            <span class="white--text text-sm mr-5 d-md-inline-block d-none"
              >Need Help ?</span
            >

            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="transparent" dark v-bind="attrs" v-on="on" small>
                  <v-avatar tile size="14" class="mr-2">
                    <img src="@/assets/images/flags/usa.png" alt="" />
                  </v-avatar>
                  <span>EN</span>
                  <v-icon right small>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title class="pa-0 ma-0">{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="transparent" dark v-bind="attrs" v-on="on" small>
                  <v-avatar tile size="14" class="mr-2">
                    <img src="@/assets/images/flags/usa.png" alt="" />
                  </v-avatar>
                  <span>USD</span>
                  <v-icon right small>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar-title>
        </div>
      </v-container>
    </div>
    <v-app-bar height="72" app scroll-off-screen class="sub-topbar" color="white py-1">
      <v-container>
        <div class="d-flex justify-space-between align-center">
          <v-toolbar-title class="d-flex align-center">
            <nuxt-link to="/">
              <v-img
                class="me-2 logo d-md-block d-none"
                width="120"
                :src="require('~/assets/images/logo.png')"
                alt=""
              ></v-img>
            </nuxt-link>
            <div 
              class="dropdown-ecommerce"
              :class="{ 'd-none': $route.path == '/home/HomeTwo' }"
            >
              <HeaderNavbar />
            </div>
          </v-toolbar-title>
          <v-col cols="12" md="7">
            <div
              v-if="$route.path == '/home/HomeTwo'"
              class="search-bar d-flex p-relative"
            >
              <v-text-field
                class=""
                placeholder="Searching For"
                filled
                rounded
                hide-details
                dense
                prepend-inner-icon="mdi-magnify"
              ></v-text-field>
              <v-btn
                color="primary"
                class="text-capitalize search-bar-dropdown px-10 font-600"
              
              >
                Search
              </v-btn>
            </div>

            <div v-else class="search-bar d-flex p-relative">
              <v-text-field
                class=""
                placeholder="Searching For"
                filled
                rounded
                dense
                prepend-inner-icon="mdi-magnify"
              ></v-text-field>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="white"
                    class="text-capitalize search-bar-dropdown"
                    v-bind="attrs"
                    v-on="on"
                  >
                    All Categories
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
          <div class="">
            <div class="d-md-block d-none">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      elevation="0"
                      fab
                      small
                      class="mr-3"
                      color="grey lighten-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon>mdi-account</v-icon>
                    </v-btn>
                  </template>

       
             
                    <base-card>
                      <div class="px-3 px-md-10 py-8 ">
                        <h3 class="mb-2 text-center">Welcome To Ecommerce</h3>
                        <h5 class="font-600 grey--text text--darken-3 text-sm mb-9 text-center">Log in with email & password</h5>
                        <p class="text-14 mb-1">Email or Phone Number</p>
                        <v-text-field
                            outlined
                            dense
                            hide-details
                            placeholder="example@mail"
                            class="mb-4"
                        ></v-text-field>
                        <p class="text-14 mb-1">Password</p>
                        <v-text-field
                            outlined
                            dense
                            type="password"
                            hide-details
                            placeholder="example@mail"
                            class="mb-4"
                        ></v-text-field>
                        <v-btn 
                          block 
                          
                          color="primary"
                          class="text-capitalize font-600"
                        >Login</v-btn>
                        <v-col cols="10" lg="8" class="mx-auto">
                          <div class="d-flex align-center my-1">
                            <v-divider></v-divider>
                            <span class="mx-4">on</span>
                            <v-divider></v-divider>
                          </div>
                        </v-col>
                        <v-btn 
                          block  
                          dark
                          color="indigo"
                          class="text-capitalize font-600 mb-4"
                        >
                          
                             <v-icon left class="me-3">mdi-facebook</v-icon>
                            Continue with facebook
                          
                        </v-btn>
                        <v-btn 
                          block 
                          dark
                          color="blue darken-2"
                          class="text-capitalize font-600 mb-4"
                        >
                          
                             <v-icon left class="me-3">mdi-google</v-icon>
                            Continue with Google
                          
                        </v-btn>
                        <div class="text-14 text-center my-3">Don't have account? <router-link to="/sign-up" class=" grey--text text--darken-4 font-600">Sign Up</router-link></div>
                      </div>
                      <div class="py-4 grey lighten-2">
                          <div class="text-center">
                            <span class="grey--text text--darken-1">Forgot Your Password <router-link to="/" class="ms-2 grey--text text--darken-4 font-600">Reset It</router-link> </span>
                          </div>
                      </div>
                    </base-card>
                  </v-dialog>
                  <!-- cartCount  -->
                  <v-badge bordered  color="error" :content="getCartProducts.length == 0 ? '0' : getCartProducts.length"  overlap>
                    <v-btn
                      @click="drawer = true"
                      elevation="0"
                      fab
                      color="grey lighten-2"
                      small
                    >
                      
                      <v-icon color="">mdi-cart</v-icon>
                    </v-btn>
                  </v-badge>
              
            </div>
          </div>
        </div>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      right
      width="320"
      class="z-999"
    >
      <div class="secondary-siebar-content">
        <v-list-item>
          <v-list-item-avatar class="mr-0">
            <v-icon color="">mdi-shopping-outline</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="">{{getCartProducts.length}} Items</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon color="" @click="drawer = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <div  v-if="getCartProducts.length >=1">
          <div 
          v-for="(n, index) in getCartProducts"
          :key="index"
        >
          <div
            class="cart-item d-flex justify-space-between align-center px-2 py-3"
          >
            <div class="d-flex flex-column align-center">
              <v-btn  
               @click="addCartx(n)"
                class="mx-2" 
                fab 
                outlined 
                dark 
                x-small 
                color="primary"
              >
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
              <span>{{n.qty}}</span>
              <v-btn
              @click="removeCartx(n)"
               class="mx-2" 
               fab 
               outlined 
               dark 
               x-small 
               color="primary"
              >
                <v-icon dark> mdi-minus </v-icon>
              </v-btn>
            </div>
            <v-avatar tile size="76">
              <img
                :src="n.img"
                alt=""
              />
            </v-avatar>
            <div class="col-5">
              <h5 class="text-truncate">{{ n.title }}</h5>
              <p class="text-tiny">${{n.amount}} x {{n.qty}}</p>
              <h5 class="primary--text">{{n.amount * n.qty}}</h5>
            </div>
            
          </div>
          <v-divider></v-divider>
          </div>
        </div>
        <div v-else>
          <div class="empty-cart-sidebar d-flex flex-column justify-center align-center mt-10">
            <v-avatar size="90" tile class="mb-8">
              <img src="@/assets/images/empty-cart.png" alt="">
            </v-avatar>
            <p class="grey--text text--darken-2 px-5 mx-10 text-center ">Your shopping bag is empty. Start shopping</p>
          </div>
        </div>
      </div>
      <template v-slot:append v-if="getCartProducts.length >=1">
        <div class="pa-2">
          <v-btn to="/shop/CheckoutAlternative" class="text-capitalize mb-3" block color="primary">
            Checkout Now (${{cartTotal}})
          </v-btn>
          <v-btn to="/Shop/Cart" class="text-cappitalise" outlined block color="primary">
            View Cart
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      class="navbar white"
      :class="{ 'd-none': $route.path == '/salePage/SalePageTwo' }"
    >
      <div class="container">
        <div class="d-flex justify-space-between align-center">
          <v-btn
            elevation=""
            color="grey lighten-2"
            class="text-capitalize"
            :class="{ 'v-hidden': $route.path == '/home/HomeTwo' }"
            @click="toggleNavbar"
            v-on-clickaway="away"
          >
            <v-icon left> mdi-view-dashboard </v-icon>
            Categories
            <v-icon right> mdi-chevron-down </v-icon>
          </v-btn>
          <div
            id="navbar-toggle-dropdown"
            class="navbar-toggle-dropdown p-absolute"
            :class="{ open: isToggleNavbar }"
          >
            <Navbar />
          </div>
          <div>
            <ul class="navbar-nav navigation-navbar d-flex flex-row">
              <li class="nav-item me-3">
                <a class="nav-link active" href="#">Home</a>

                <ul>
                  <li>
                    <nuxt-link to="/">
                      <p class="mb-0">Homepage One</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/home/HomeTwo">
                      <p class="mb-0">Grocery</p>
                    </nuxt-link>
                    
                  </li>
                  <li>
                    <nuxt-link to="/home/HomeThree">
                      <p class="mb-0">Niche Market 1</p>
                    </nuxt-link>
                    
                  </li>
                  <li>
                    <nuxt-link to="/home/HomeFour">
                      <p class="mb-0">Niche Market 2</p>
                    </nuxt-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" href="#">Pages</a>
                <ul>
                  <li>
                    <a
                      href="#"
                      class="d-flex justify-space-between align-center"
                    >
                      <p class="mb-0">Sale Page</p>
                      <v-icon>mdi-menu-right</v-icon>
                    </a>
                    <div class="navbar-submenu">
                      <ul>
                        <li>
                          <nuxt-link to="/salePage/SalePageOne">
                            <p class="mb-0">Version 1</p>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/salePage/SalePageTwo">
                            <p class="mb-0">Version 2</p>
                          </nuxt-link>
                          
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="d-flex justify-space-between align-center"
                    >
                      <p class="mb-0">Vendor</p>
                      <v-icon>mdi-menu-right</v-icon>
                    </a>
                    <div class="navbar-submenu">
                      <ul>
                        <li>
                          <nuxt-link to="/vendor/AllVendors">
                            <p class="mb-0">All Vendors</p>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/vendor/VendorStore">
                            <p class="mb-0">Vendor Store</p>
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="d-flex justify-space-between align-center"
                    >
                      <p class="mb-0">Product</p>
                      <v-icon>mdi-menu-right</v-icon>
                    </a>
                    <div class="navbar-submenu">
                      <ul>
                        <li>
                          <nuxt-link to="/shop/SearchProduct">
                            <p class="mb-0">Product Grid/Search</p>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/shop/SingleProduct">
                            <p class="mb-0">Product List/Search</p>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/shop/Cart">
                            <p class="mb-0">Cart</p>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/shop/CheckoutAlternative">
                            <p class="mb-0">Checkout Alternative</p>
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" href="#">User Account</a>
                <ul>
                  <li>
                    <a
                      href="#"
                      class="d-flex justify-space-between align-center"
                    >
                      <p class="mb-0">Address</p>
                      <v-icon>mdi-menu-right</v-icon>
                    </a>
                    <div class="navbar-submenu">
                      <ul>
                        <li>
                          <nuxt-link to="/address/AddAddress">
                            <p class="mb-0">Add Address</p>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/address/ListAddress">
                            <p class="mb-0">List Address</p>
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="d-flex justify-space-between align-center"
                    >
                      <p class="mb-0">Orders</p>
                      <v-icon>mdi-menu-right</v-icon>
                    </a>
                    <div class="navbar-submenu">
                      <ul>
                        <li>
                          <nuxt-link to="/orders/OrderList">
                            <p class="mb-0">Order List</p>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/orders/OrderDetails">
                            <p class="mb-0">Order Details</p>
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="d-flex justify-space-between align-center"
                    >
                      <p class="mb-0">Profile</p>
                      <v-icon>mdi-menu-right</v-icon>
                    </a>
                    <div class="navbar-submenu">
                      <ul>
                        <li>
                          <nuxt-link to="/profile/ViewProfile">
                            <p class="mb-0">View Profile</p>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/profile/EditProfile">
                            <p class="mb-0">Edit Profile</p>
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="d-flex justify-space-between align-center"
                    >
                      <p class="mb-0">Support Tickets</p>
                      <v-icon>mdi-menu-right</v-icon>
                    </a>
                    <div class="navbar-submenu">
                      <ul>
                        <li>
                          <nuxt-link to="/supportTickets/AllTickets">
                            <p class="mb-0">All Tickets</p>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/supportTickets/TicketDetails">
                            <p class="mb-0">Ticket Details</p>
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <nuxt-link to="/Wishlist">
                      <p class="mb-0">Wishlist</p>
                    </nuxt-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" href="#">Vendor Account</a>
                <ul>
                  <li>
                    <nuxt-link to="/dashboard/">
                      <p class="mb-0">Dashboard</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/dashboard/productList">
                      <p class="mb-0">Product List</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/dashboard/editProduct">
                      <p class="mb-0">Edit Product</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/dashboard/Profile">
                      <p class="mb-0">Profile</p>
                    </nuxt-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item me-3">
                <nuxt-link class="nav-link" to="/orders/OrderList">
                  <p class="mb-0">Track My Orders</p>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/landing">
                  <p class="mb-0">Back To Demos</p>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions  } from 'vuex';
import HeaderNavbar from "@/pages/home/header-navbar";
import Navbar from "@/pages/home/navbar";
import { directive as onClickaway } from "vue-clickaway";

export default {
  name: "BaseAppBar",
  directives: {
    onClickaway: onClickaway,
  },
  components: {
    HeaderNavbar,
    Navbar,
  },
 
  computed: {
    ...mapGetters(['getCartProducts']),
    cartTotal() {
      let total = 0;
      this.getCartProducts.forEach(product => {
        total += product.amount * product.qty 
      })
      return total; 
    }
  },
  data: () => ({
    
    cartCount: 0,
    colorNav: false,
    dialog: false,
    isToggleNavbar: false,
    items: [
      { title: "Car" },
      { title: "Clothes" },
      { title: "Electronics" },
      { title: "Laptop" },
    ],
    itemTwo: ["Foo", "Bar", "Fizz", "Buzz"],
    drawer: false,
    group: null,
  }),

  methods: {
    ...mapActions(["addCart", "removeCart"]),
    
    toggleNavbar() {
      if (this.$route.path == "/") {
        this.isToggleNavbar = false;
      } else {
        this.isToggleNavbar = !this.isToggleNavbar;
      }
    },
    away() {
      this.isToggleNavbar = false;
    },
    removeCartx (item) {
      this.removeCart(item)
          
    },
    addCartx (item) {
      this.addCart(item);
    },
  },
};
</script>
<style lang="scss" scoped>
$z-index-sub-topbar: 2;
$md: 959px;
$z-99: 99;
.z-999 {
  z-index: 999;
}

.v-list-item {
  min-height: 34px;
}
.top-bar {
  height: 40px;
  display: flex;
  align-items: center;
}
.sale-page-one {
  .sub-topbar {
    &.v-app-bar--is-scrolled {
      position: relative;
      .dropdown-ecommerce {
        display: none;
      }
    }
  }

  .navbar {
    &.v-app-bar--is-scrolled {
      top: 0;
      margin-bottom: 0px;
    }
  }
}
.sale-page-two {
  .sub-topbar {
    &.v-app-bar--is-scrolled {
      position: relative;
      .dropdown-ecommerce {
        display: none;
      }
    }
  }

  .navbar {
    &.v-app-bar--is-scrolled {
      top: 0;
      margin-bottom: 0px;
    }
  }
}
.sub-topbar {
  position: relative;
  box-shadow: none !important;
  width: 100%;
  height: 80px !important;
  z-index: $z-99;
  .dropdown-ecommerce {
    display: none;
  }
  &.v-app-bar--fixed {
    position: unset;
  }
  // z-index: $z-index-sub-topbar;

  &.v-app-bar--is-scrolled {
    position: fixed;
    top: 0;
    box-shadow: none !important;
    .dropdown-ecommerce {
      display: block;
    }
  }
  @media (max-width: $md) {
  }
}

.navbar {
  height: 60px;
  width: 100%;
  z-index: 2;
  box-shadow: rgb(43 52 69 / 10%) 0px 16px 16px -16px !important;
  &.v-app-bar--is-scrolled {
    position: relative;
    top: 64px;
    margin-bottom: 64px;
    box-shadow: rgb(43 52 69 / 10%) 0px 16px 16px -16px !important;
    // box-shadow: none !important;
  }
  @media (max-width: 992px) {
    display: none;
  }
}
.search-bar {
  ::v-deep .v-input__slot {
      border: 1px solid rgb(218, 225, 231);
      background-color: #fff !important;
    
  }
  .search-bar-dropdown {
   
     height: 39px;
    position: absolute;
    top: 20px;
    transform: translateY(-50%);
    right: 2px;
    border-radius: 22px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left: 1px solid rgb(218, 225, 231) !important;
    box-shadow: none !important;
    @media (max-width: $md) {
      display: none;
    }
  }
  ::v-deep .v-text-field__details {
    display: none;
  }
}

// toggleNavbarButton
.navbar-toggle-dropdown {
  z-index: 98;
  display: none;
  &.open {
    display: block;
    top: 64px;
  }
}
.v-hidden {
  visibility: hidden;
}
.empty-cart-sidebar {
  height: 80vh
}
</style>