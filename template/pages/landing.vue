<template>
  <div>
    <!-- features  -->
    <section id="features" class="mb-15">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-15">
            <h1 class="secondary--text text-40 font-weight-bold">
              Powerful Features
            </h1>
          </v-col>
        </v-row>
        <v-row class="landing-features p-relative">
          <v-col
            cols="12"
            md="4"
            lg="3"
            class="text-center"
            v-for="(n, index) in powerfulFeatures"
            :key="index"
          >
            <base-card class="shadow">
              <div class="py-14">
                <v-avatar class="mb-6" size="64" tile>
                  <img class="icon" :src="n.img" alt="" />
                </v-avatar>
                <h4>{{ n.name }}</h4>
              </div>
            </base-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- demos-pages  -->
    <section id="demos" class="section-demos">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12 mt-5">
            <h4
              class="
                font-weight-bolder
                display-3
                font-weight-black
                primary--text
                mb-3
              "
            >
              25+
            </h4>
            <p class="h4 primary--text mb-2">Prebuilt & Useable</p>
            <h2 class="text-40 secondary--text font-weight-black">
              Demos & Pages
            </h2>
          </v-col>
          <v-col cols="12">
            <v-tabs
              v-model="tab"
              color="primary"
              centered
              class="mb-14"
              background-color="transparent"
            >
              <v-tab v-for="item in items" :key="item" class="text-capitalize">
                {{ item }}
              </v-tab>
            </v-tabs>

            <v-tabs-items class="transparent" v-model="tab">
              <v-tab-item>
                <v-row>
                  <v-col cols="12" lg="6">
                    <div class="landing-card">
                      <div class="landing-card-body p-relative">
                        <v-img :src="require('@/assets/images/landing/page-1.png')">
                        </v-img>
                        <nuxt-link class="nav-link" to="/" target="">
                          <div class="landing-card-overlay">
                            <v-btn class="mx-2" fab small>
                              <v-icon dark> mdi-eye </v-icon>
                            </v-btn>
                          </div>
                        </nuxt-link>
                      </div>
                      <h3>Super Store</h3>
                    </div>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <div class="landing-card">
                      <div class="landing-card-body p-relative">
                        <v-img :src="require('@/assets/images/landing/page-2.png')">
                        </v-img>
                        <nuxt-link class="nav-link" to="/home/HomeTwo" target="">
                          <div class="landing-card-overlay">
                            <v-btn class="mx-2" fab small>
                              <v-icon dark> mdi-eye </v-icon>
                            </v-btn>
                          </div>
                        </nuxt-link>
                      </div>
                      <h3>
                        Grocery 
                      </h3>
                    </div>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <div class="landing-card">
                      <div class="landing-card-body p-relative">
                        <v-img :src="require('@/assets/images/landing/page-3.png')">
                        </v-img>
                        <nuxt-link class="nav-link" to="/home/HomeFour" target="">
                          <div class="landing-card-overlay">
                            <v-btn class="mx-2" fab small>
                              <v-icon dark> mdi-eye </v-icon>
                            </v-btn>
                          </div>
                        </nuxt-link>
                      </div>
                      <h3>
                        Niche Market 1
                        
                      </h3>
                    </div>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <div class="landing-card">
                      <div class="landing-card-body p-relative">
                        <v-img :src="require('@/assets/images/landing/page-4.png')">
                        </v-img>
                        <nuxt-link class="nav-link" to="/home/HomeThree" target="">
                          <div class="landing-card-overlay">
                            <v-btn class="mx-2" fab small>
                              <v-icon dark> mdi-eye </v-icon>
                            </v-btn>
                          </div>
                        </nuxt-link>
                      </div>
                      <h3>
                        Niche Market 2
                        
                      </h3>
                    </div>
                  </v-col>
                </v-row>
              </v-tab-item>

              <v-tab-item>
                <v-row>
                  <v-col
                    cols="12"
                    lg="6"
                    v-for="(n, index) in shop"
                    :key="index"
                  >
                    <div class="landing-card">
                      <div class="landing-card-body p-relative">
                        <v-img :src="n.img"> </v-img>
                        <nuxt-link class="nav-link" :to="n.link" target="">
                          <div class="landing-card-overlay">
                            <v-btn class="mx-2" fab small>
                              <v-icon dark> mdi-eye </v-icon>
                            </v-btn>
                          </div>
                        </nuxt-link>
                      </div>
                      <h3>{{ n.name }}</h3>
                    </div>
                  </v-col>
                </v-row>
              </v-tab-item>
              <v-tab-item>
                <v-row>
                  <v-col
                    cols="12"
                    lg="6"
                    v-for="(n, index) in userAccount"
                    :key="index"
                  >
                    <div class="landing-card">
                      <div class="landing-card-body p-relative">
                        <v-img :src="n.img"> </v-img>
                        <nuxt-link class="nav-link" :to="n.link" >
                          <div class="landing-card-overlay">
                            <v-btn class="mx-2" fab small>
                              <v-icon dark> mdi-eye </v-icon>
                            </v-btn>
                          </div>
                        </nuxt-link>
                      </div>
                      <h3>{{ n.name }}</h3>
                    </div>
                  </v-col>
                </v-row>
              </v-tab-item>
              <v-tab-item>
                <v-row>
                  <v-col
                    cols="12"
                    lg="6"
                    v-for="(n, index) in vendorAccount"
                    :key="index"
                  >
                    <div class="landing-card">
                      <div class="landing-card-body p-relative">
                        <v-img :src="n.img"> </v-img>
                        <nuxt-link class="nav-link" :to="n.link" target="">
                          <div class="landing-card-overlay">
                            <v-btn class="mx-2" fab small>
                              <v-icon dark> mdi-eye </v-icon>
                            </v-btn>
                          </div>
                        </nuxt-link>
                      </div>
                      <h3>{{ n.name }}</h3>
                    </div>
                  </v-col>
                </v-row>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn
              color="primary"
              class="font-600 text-capitalize"
              href="https://store.vuetifyjs.com/products/bonik-multipurpose-ecommerce-template"
            >
              Purchase Now
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- technology  -->
    <section id="technology" class="py-15">
      <v-container>
        <v-row class="mb-5">
          <v-col cols="12" class="text-center">
            <h2 class="text-40 secondary--text font-weight-black">
              Technologies Used
            </h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="(n, index) in technology"
            :key="index"
          >
            <base-card class="shadow">
              <div class="py-15 d-flex flex-column align-center">
                <v-avatar class="mb-5" size="60" tile>
                  <img class="" :src="n.img" alt="" />
                </v-avatar>
                <h4 class="font-weight-bold">{{ n.name }}</h4>
              </div>
            </base-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- pricing  -->
    <section id="pricing" class="py-15 section-pricing">
      <v-container>
        <v-row>
          <v-col cols="12" class="mb-5">
            <h2 class="text-40 text-center secondary--text">
              Ready to Boost <br />
              Your Ecommerce Business?
            </h2>
          </v-col>
          <v-col cols="12">
            <div class="d-flex justify-center flex-wrap">
              <div class="pricing-card text-center me-4">
                <h3 class="mb-5">Personal Use</h3>
                <div class="d-flex justify-center mb-14">
                  <div class="font-600 text-16 mr-2">$</div>
                  <h3 class="display-3 font-weight-black secondary--text">
                    79
                  </h3>
                </div>
                <p class="mb-16">
                  Can be used in a single end product which end users<b
                    >are not charged</b
                  >
                  for.
                </p>
                <v-btn
                  outlined
                  color="secondary"
                  class="font-600 text-capitalize"
                  href="https://store.vuetifyjs.com/products/bonik-multipurpose-ecommerce-template"
                >
                  Purchase Now
                </v-btn>
              </div>
              <div class="pricing-card text-center primary white--text">
                <h3 class="mb-5">Commercial Use</h3>
                <div class="d-flex justify-center mb-14">
                  <div class="font-600 text-16 mr-2">$</div>
                  <h3 class="display-3 font-weight-black">299</h3>
                </div>
                <p class="mb-16">
                  Can be used in a single end product which end users
                  <b>are charged</b> for.
                </p>
                <v-btn
                  outlined
                  color="secondary"
                  class="font-600 text-capitalize"
                  href="https://store.vuetifyjs.com/products/bonik-multipurpose-ecommerce-template"
                >
                  Purchase Now
                </v-btn>
              </div>
              <div class="pricing-card text-center me-4">
                <h3 class="mb-5">Unlimited Use</h3>
                <div class="d-flex justify-center mb-14">
                  <div class="font-600 text-16 mr-2">$</div>
                  <h3 class="display-3 font-weight-black secondary--text">
                    599
                  </h3>
                </div>
                <p class="mb-16">
                  Can be used in a Unlimited end product which end users
                  <b>are charged</b> for.
                </p>
                <v-btn
                  outlined
                  color="secondary"
                  class="font-600 text-capitalize"
                  href="https://store.vuetifyjs.com/products/bonik-multipurpose-ecommerce-template"
                >
                  Purchase Now
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <footer class="py-8">
      <v-container>
        <div class="d-flex justify-space-between flex-wrap">
          <p class="py-1">
            Developed with
            <v-icon small color="primary" class="mx-1">mdi-cards-heart</v-icon>
            & Care by Ui Lib
          </p>
          <div class="d-flex py-1 flex-wrap">
            <a
              href="https://www.facebook.com/UILibOfficial"
              target=""
              class="text-decoration-none me-2"
            >
              <v-icon color="secondary">mdi-facebook</v-icon>
            </a>
            <a
              href="https://twitter.com/uilibofficial"
              target=""
              class="text-decoration-none me-2"
            >
              <v-icon color="secondary">mdi-twitter</v-icon>
            </a>
            <a
              href="https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg"
              target=""
              class="text-decoration-none me-2"
            >
              <v-icon color="secondary">mdi-youtube</v-icon>
            </a>
            <a
              href="https://www.linkedin.com/company/ui-lib/"
              target=""
              class="text-decoration-none me-2"
            >
              <v-icon color="secondary">mdi-linkedin</v-icon>
            </a>
          </div>
        </div>
      </v-container>
    </footer>
  </div>
</template>

<script>
export default {
  layouyt: 'landing',
  layout() {
    return 'landing'
  },
  data() {
    return {
      tab: null,
      items: ["Demos", "Shop Pages", "User Account", "Vendor Account"],

      powerfulFeatures: [
        {
          img: require("@/assets/images/icons/multivendor.svg"),
          name: "Multi-Vendor Support",
        },
        {
          img: require("@/assets/images/icons/code.svg"),
          name: "Clean Code",
        },
        {
          img: require("@/assets/images/icons/optimization.svg"),
          name: "Optimized for Mobile",
        },
        {
          img: require("@/assets/images/icons/lighting.svg"),
          name: "Blazing Fast",
        },
        {
          img: require("@/assets/images/icons/admin-dashboard.svg"),
          name: "Vendor Dashboard",
        },
        {
          img: require("@/assets/images/icons/figma.svg"),
          name: "Figma Ready",
        },
      ],
      shop: [
        {
          img: require("@/assets/images/landing/shop/page-7.png"),
          name: "Sale Page 1",
          link: "/salePage/SalePageOne",
        },
        {
          img: require("@/assets/images/landing/shop/page-8.png"),
          name: "Sale Page 2",
          link: "/salePage/SalePageTwo",
        },
        {
          img: require("@/assets/images/landing/shop/page-2.png"),
          name: "Shop",
          link: "/vendor/VendorStore",
        },
        {
          img: require("@/assets/images/landing/shop/page-6.png"),
          name: "Product Details",
          link: "/shop/SingleProduct",
        },
        {
          img: require("@/assets/images/landing/shop/page-3.png"),
          name: "Cart",
          link: "/shop/Cart",
        },
        {
          img: require("@/assets/images/landing/shop/page-4.png"),
          name: "Checkout",
          link: "/shop/Cart",
        },
        {
          img: require("@/assets/images/landing/shop/page-5.png"),
          name: "Checkout Alternative",
          link: "/shop/CheckoutAlternative",
        },
        {
          img: require("@/assets/images/landing/shop/page-1.png"),
          name: "shop List",
          link: "/vendor/AllVendors",
        },
      ],
      userAccount: [
        {
          img: require("@/assets/images/landing/customer/page-5.png"),
          name: "Profile",
          link: "/profile/ViewProfile",
        },
        {
          img: require("@/assets/images/landing/customer/page-6.png"),
          name: "Edit Profile",
          link: "/profile/EditProfile",
        },
        {
          img: require("@/assets/images/landing/customer/page-2.png"),
          name: "Orders",
          link: "/orders/OrderList",
        },
        {
          img: require("@/assets/images/landing/customer/page-1.png"),
          name: "Addresses",
          link: "/address/ListAddress",
        },
        {
          img: require("@/assets/images/landing/customer/page-3.png"),
          name: "Order Details",
          link: "/orders/OrderDetails",
        },
        
        {
          img: require("@/assets/images/landing/customer/page-7.png"),
          name: "Support Tickets",
          link: "/supportTickets/AllTickets",
        },
        {
          img: require("@/assets/images/landing/customer/page-8.png"),
          name: "Ticket Details",
          link: "/supportTickets/TicketDetails",
        },
        {
          img: require("@/assets/images/landing/customer/page-9.png"),
          name: "Wishlist",
          link: "/wishlist",
        },
      ],
      vendorAccount: [
        {
          img: require("@/assets/images/landing/vendor/page-1.png"),
          name: "Dashboard",
          link: "/dashboard",
        },
        {
          img: require("@/assets/images/landing/vendor/page-2.png"),
          name: "Account Settings",
          link: "/dashboard/Profile",
        },
        {
          img: require("@/assets/images/landing/vendor/page-3.png"),
          name: "Products",
          link: "/dashboard/productList",
        },
        {
          img: require("@/assets/images/landing/vendor/page-4.png"),
          name: "Add Product/ Edit Product",
          link: "/dashboard/editProduct",
        },
        {
          img: require("@/assets/images/landing/vendor/page-5.png"),
          name: "Orders",
          link: "/orders/OrderList",
        },
      ],
      technology: [
        {
          img: require("@/assets/images/logos/vue.svg"),
          name: "Vue.js",
        },
        {
          img: require("@/assets/images/logos/vuetify.svg"),
          name: "Vuetify",
        },
        {
          img: require("@/assets/images/logos/sass.png"),
          name: "Sass",
        },
        {
          img: require("@/assets/images/logos/apexchart.png"),
          name: "Apexchart",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#hero {
  margin-top: 64px;
}
.landing-features {
  z-index: 1;
  &::after {
    content: " ";
    position: absolute;
    height: 100px;
    width: 200px;
    background: rgb(227, 233, 239);
    z-index: -1;
    bottom: 0;

    left: 60px;
    border-bottom-right-radius: 300px;
    border-bottom-left-radius: 300px;
    margin-left: -100px;
    margin-bottom: -50px;
  }
  &::before {
    content: " ";
    position: absolute;
    height: 100px;
    width: 200px;
    background: rgb(227, 233, 239);
    z-index: -1;
    top: -65px;
    transform: rotate(180deg);
    right: 0;
    border-bottom-right-radius: 300px;
    border-bottom-left-radius: 300px;
    margin-right: 0px;
  }
}

.section-pricing {
  background-image: url("assets/images/landing/bonik.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgb(246, 249, 252);
}
.landing-card {
  &:hover {
  }
  .landing-card-body {
    box-shadow: none;
    cursor: unset;
    padding: 10% 10% 0px;
    background-color: rgb(243, 245, 249);
    border: 1px solid rgb(227, 233, 239);
    border-radius: 8px;
    position: relative;
    margin-bottom: 1.5rem;
    &:hover {
      .landing-card-overlay {
        opacity: 1;
      }
    }
    .landing-card-overlay {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.54);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      opacity: 0;
      transition: opacity 250ms ease-in-out 0s;
    }
  }
}

// section-demos
.section-demos {
  background-image: url("assets/images/landing/landing-bg-2.svg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
}

.pricing-card {
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  border-radius: 8px;
  padding: 3rem 1rem 2rem;
  margin: 1.325rem;
  min-width: 270px;
  p {
    max-width: 216px;
    margin: 0 auto;
  }
}
</style>