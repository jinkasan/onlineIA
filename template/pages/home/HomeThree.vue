<template>
  <v-container class="mt-6 mb-14">
    <v-row class="">
      <v-col cols="12" lg="4">
        <base-card class="h-100">
          <VueSlickCarousel
            class="slick-secondary"
            :arrows="true"
            :dots="false"
            v-bind="slickSettingsSingleItem"
          >
            <div v-for="item in 3" :key="item" class="px-4 pt-4">
              <v-row>
                <v-col cols="12" lg="8" class="mx-auto text-center mt-14">
                  <h2 class="mb-2">Introducing New Winter Collection</h2>
                  <p class="text-14 grey--text text--darken-2 mb-6">
                    Starting at $39 & save upto 40%
                  </p>
                  <nuxt-link
                    to="/"
                    class="
                      d-inline-block
                      bb-primary
                      text-decoration-none
                      black--text
                      font-600
                    "
                  >
                    SHOP NOW
                  </nuxt-link>
                </v-col>
              </v-row>

              <v-img contain max-width="100%" :src="require('@/assets/images/products/Rectangle 130.png')">
              </v-img>
            </div>

            <template #prevArrow="arrowOption">
              <v-btn class="mx-2 slick-left-arrow" icon small>
                <v-icon dark>
                  {{ arrowOption }}
                  mdi-arrow-left
                </v-icon>
              </v-btn>
            </template>
            <template #nextArrow="arrowOption">
              <v-btn class="mx-2 slick-right-arrow" icon small>
                <v-icon dark>
                  {{ arrowOption }}
                  mdi-arrow-right
                </v-icon>
              </v-btn>
            </template>
          </VueSlickCarousel>
        </base-card>
      </v-col>
      <v-col cols="12" lg="8">
        <h2 class="mb-0">Top Picks</h2>
        <VueSlickCarousel
          class="slick-secondary mb-6"
          :arrows="true"
          :dots="false"
          v-bind="slickSettingsFour"
        >
          <v-col cols="12" v-for="(item, index) in flashDeals" :key="index">
           <nuxt-link to="/shop/SingleProduct" class="text-decoration-none">
              <v-img
                class="mb-4 br-8 card-overlay-item"
                contain
                :src="item.img"
              ></v-img>
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="16"
              ></v-rating>
              <h5 class="mb-1 grey--text text--darken-4">{{ item.name }}</h5>
              <div class="d-flex align-center flex-wrap">
                <h5 class="primary--text mr-1">$350</h5>
                <h5 class="grey--text text--darken-1">$550</h5>
              </div>
           </nuxt-link>
          </v-col>

          <template #prevArrow="arrowOption">
            <v-btn class="mx-2 slick-arrow" fab dark small color="secondary">
              <v-icon dark>
                {{ arrowOption }}
                mdi-arrow-left
              </v-icon>
            </v-btn>
          </template>
          <template #nextArrow="arrowOption">
            <v-btn class="mx-2 slick-arrow" fab dark small color="secondary">
              <v-icon dark>
                {{ arrowOption }}
                mdi-arrow-right
              </v-icon>
            </v-btn>
          </template>
        </VueSlickCarousel>
        <base-card cardHoverShadow class="mb-6">
          <div
            class="
              px-8
              py-4
              d-flex
              flex-wrap flex-sm-nowrap
              align-center
              justify-sm-space-odd justify-center
            "
          >
            <div>
              <v-img
                max-width="290"
                class="mx-auto"
                :src="require('@/assets/images/products/shoes-1.png')"
              >
              </v-img>
            </div>
            <div class="">
              <h3 class="mb-2">Converse Collecitons</h3>
              <p class="grey--text text--darken-2 mb-4">
                Get the most exciting deals. Starting at $59
              </p>
              <a
                href="#"
                class="
                  text-decoration-none
                  black--text
                  bb-primary
                  font-weight-bold
                "
                >SHOP NOW</a
              >
            </div>
          </div>
        </base-card>

        <VueSlickCarousel
          class="slick-secondary mb-6"
          :arrows="true"
          :dots="false"
          v-bind="slickSettingsFour"
        >
          <v-col cols="12" v-for="(item, index) in gardenGuitar" :key="index">
             <nuxt-link to="/shop/SingleProduct" class="text-decoration-none">
              <v-img
                class="mb-4 br-8 card-overlay-item"
                contain
                :src="item.img"
              ></v-img>
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="16"
              ></v-rating>
              <h5 class="mb-1 grey--text text--darken-4">{{ item.name }}</h5>
              <div class="d-flex align-center flex-wrap">
                <h5 class="primary--text mr-1">$350</h5>
                <h5 class="grey--text text--darken-1">$550</h5>
              </div>
            </nuxt-link>
          </v-col>

          <template #prevArrow="arrowOption">
            <v-btn class="mx-2 slick-arrow" fab dark small color="secondary">
              <v-icon dark>
                {{ arrowOption }}
                mdi-arrow-left
              </v-icon>
            </v-btn>
          </template>
          <template #nextArrow="arrowOption">
            <v-btn class="mx-2 slick-arrow" fab dark small color="secondary">
              <v-icon dark>
                {{ arrowOption }}
                mdi-arrow-right
              </v-icon>
            </v-btn>
          </template>
        </VueSlickCarousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pb-0">
        <h2 class="mb-0">Featured Categories</h2>
      </v-col>
      <v-col cols="12" lg="4" class="mb-4">
        <nuxt-link to="/shop/SingleProduct" class="text-decoration-none">
          <base-card
            cardHoverShadow
            class="p-relative h-100 d-flex align-center"
          >
            <v-img
              contain
              :src="require('@/assets/images/products/dslr-camera.png')"
            ></v-img>
            <h3 class="text-uppercase p-absolute bottom-0 ma-5">camera</h3>
          </base-card>
        </nuxt-link>
      </v-col>
      <v-col cols="12" lg="8" class="mb-4">
        <v-row>
          <v-col cols="6" lg="6">
            <nuxt-link to="/shop/SingleProduct" class="text-decoration-none">
              <base-card cardHoverShadow>
                <div class="pa-5">
                  <v-img
                    max-width="280"
                    class="mx-auto mb-5"
                    :src="require('@/assets/images/products/ps4.png')"
                  ></v-img>
                  <h5 class="font-600">GAMING</h5>
                </div>
              </base-card>
            </nuxt-link>
          </v-col>
          <v-col cols="6" lg="6">
            <nuxt-link to="/shop/SingleProduct" class="text-decoration-none">
              <base-card cardHoverShadow>
                <div class="pa-5">
                  <v-img
                    max-width="280"
                    class="mx-auto mb-5"
                    :src="require('@/assets/images/products/apple-watch-4.png')"
                  ></v-img>
                  <h5 class="font-600">WATCH</h5>
                </div>
              </base-card>
            </nuxt-link>
          </v-col>
          <v-col cols="6" lg="6">
            <nuxt-link to="/shop/SingleProduct" class="text-decoration-none">
              <base-card cardHoverShadow>
                <div class="pa-5">
                  <v-img
                    max-width="280"
                    class="mx-auto mb-5"
                    :src="require('@/assets/images/products/drone.png')"
                  ></v-img>
                  <h5 class="font-600">DRONE</h5>
                </div>
              </base-card>
            </nuxt-link>
          </v-col>
          <v-col cols="6" lg="6">
            <nuxt-link to="/shop/SingleProduct" class="text-decoration-none">
              <base-card cardHoverShadow>
                <div class="pa-5">
                  <v-img
                    max-width="280"
                    class="mx-auto mb-5"
                    :src="require('@/assets/images/products/phone.png')"
                  ></v-img>
                  <h5 class="font-600">PHONE</h5>
                </div>
              </base-card>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6" class="mb-4">
        <base-card cardHoverShadow>
          <div class="px-8">
            <v-row align="center">
              <v-col cols="12" lg="6">
                <h3 class="mb-2">
                  Big Saves on Home Decoration. Save Upto 80%
                </h3>
                <p class="text-14 grey--text text--darken-2 mb-6">
                  Easy payment policy, 12 months 0% in interest.
                </p>
                <nuxt-link
                  to="/"
                  class="text-decoration-none bb-primary black--text font-600"
                >
                  SHOP NOW
                </nuxt-link>
              </v-col>
              <v-col cols="12" lg="6">
                <v-img
                  height="292"
                  contain
                  :src="require('@/assets/images/products/tableChair.png')"
                ></v-img>
              </v-col>
            </v-row>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="6" class="mb-4">
        <base-card cardHoverShadow class="grey darken-1 white--text">
          <div class="px-8">
            <v-row align="center">
              <v-col cols="12" lg="6">
                <h3 class="mb-2">
                  Big Saves on Home Decoration. Save Upto 80%
                </h3>
                <p class="text-14 grey--text text--lighten-1 mb-6">
                  Easy payment policy, 12 months 0% in interest.
                </p>
                <nuxt-link
                  to="/"
                  class="text-decoration-none bb-primary white--text font-600"
                >
                  SHOP NOW
                </nuxt-link>
              </v-col>
              <v-col cols="12" lg="6">
                <v-img
                  height="292"
                  contain
                  :src="require('@/assets/images/products/outfit.png')"
                ></v-img>
              </v-col>
            </v-row>
          </div>
        </base-card>
      </v-col>

      <v-col cols="12" class="pb-0">
        <h2 class="mb-0">Most Viewed</h2>
      </v-col>
      <v-col cols="12" class="px-0">
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

      <v-col cols="12" class="pb-0">
        <h2 class="mb-0">New Arrivals</h2>
      </v-col>
      <v-col cols="12" class="px-0">
        <VueSlickCarousel
          class="slick-secondary"
          :arrows="true"
          :dots="false"
          v-bind="slickSettingsSixItem"
        >
          <v-col cols="12" v-for="(n, index) in newArrivals" :key="index">
             <nuxt-link to="/shop/SingleProduct" class="text-decoration-none">
              <v-img
                class="mb-4 br-8 card-overlay-item"
                contain
                :src="n.img"
              ></v-img>

              <h5 class="mb-1 grey--text text--darken-4">{{ n.title }}</h5>
              <h5 class="primary--text">{{ n.price }}</h5>
            </nuxt-link>
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
        <base-card card cardHoverShadow>
          <v-img
            cover
            height="280"
            :src="require('@/assets/images/products/bg-gradient.png')"
          >
            <div class="fill-height left-right-gradient d-flex align-center">
              <v-row class="ps-5 ps-sm-14 ma-0">
                <v-col cols="12" lg="3" class="pa-0 ma-0">
                  <h2 class="mb-4">
                    Build Your Own Youtube Studio Save Upto 70%
                  </h2>
                  <p class="grey--text text--darken-3 mb-6">
                    Everything you need to create your youtube studio
                  </p>
                  <nuxt-link
                    to="/"
                    class="text-decoration-none font-600 black--text bb-primary"
                  >
                    DISCOVER EQUIPMENTS
                  </nuxt-link>
                </v-col>
              </v-row>
            </div>
          </v-img>
        </base-card>
      </v-col>

      <v-col cols="12" lg="6">
        <v-img
          class="br-8 mb-6"
          contain
          :src="require('@/assets/images/products/photo-1.png')"
        ></v-img>
        <h3 class="font-600 mb-1">Art of Keeping Home Minimal & Organised.</h3>
        <div class="d-flex flex-wrap mb-4">
          <v-icon color="grey darken-1" small class="mr-1"
            >mdi-clock-time-eight-outline</v-icon
          >
          <p class="text-14 mb-0 mr-3 grey--text text--darken-1">
            24 February, 2020
          </p>
          <v-icon color="grey darken-1" small class="mr-1"
            >mdi-clock-time-eight-outline</v-icon
          >
          <p class="text-14 mb-0 mr-3 grey--text text--darken-1">3 Comments</p>
        </div>
        <p class="grey--text text--darken-3 mb-3">
          Maecenas leo ante, gravida vel lectus ac, iaculis lobortis enim. Proin
          nec orci nec nisl consequat molestie quis sit amet elit. Ut venenatis
          dignissim diam in auctor.
        </p>
        <nuxt-link
          to="/"
          class="text-decoration-none font-600 bb-primary black--text"
        >
          CONTINUE READING
        </nuxt-link>
      </v-col>
      <v-col cols="12" lg="6">
        <v-img
          class="br-8 mb-6"
          contain
          :src="require('@/assets/images/products/photo-2.png')"
        ></v-img>
        <h3 class="font-600 mb-1">The Monthly Guide to Cleaning Your Home.</h3>
        <div class="d-flex flex-wrap mb-4">
          <v-icon color="grey darken-1" small class="mr-1"
            >mdi-clock-time-eight-outline</v-icon
          >
          <p class="text-14 mb-0 mr-3 grey--text text--darken-1">
            24 February, 2020
          </p>
          <v-icon color="grey darken-1" small class="mr-1"
            >mdi-clock-time-eight-outline</v-icon
          >
          <p class="text-14 mb-0 mr-3 grey--text text--darken-1">3 Comments</p>
        </div>
        <p class="grey--text text--darken-3 mb-3">
          Maecenas leo ante, gravida vel lectus ac, iaculis lobortis enim. Proin
          nec orci nec nisl consequat molestie quis sit amet elit. Ut venenatis
          dignissim diam in auctor.
        </p>
        <nuxt-link
          to="/"
          class="text-decoration-none font-600 bb-primary black--text"
        >
          CONTINUE READING
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardCart from "@/components/cartCard/CardCart";
import { mapGetters, mapActions  } from 'vuex';
export default {
  components: {
    CardCart,
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
  head:{
    title: 'Home Three'
  },
  data() {
    return {
      slickSettingsSingleItem: {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
      slickSettingsFour: {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,

        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
            },
          },
          {
            breakpoint: 1264,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
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
              infinite: true,
            },
          },
          {
            breakpoint: 1264,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      slickSettings: {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
            },
          },
          {
            breakpoint: 1264,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      flashDeals: [
        {
          img: require("@/assets/images/products/flash-1.png"),
          name: "Sneakers",
        },
        {
          img: require("@/assets/images/products/flash-2.png"),
          name: "Watch",
        },
        {
          img: require("@/assets/images/products/flash-3.png"),
          name: "Mobile",
        },
        {
          img: require("@/assets/images/products/flash-4.png"),
          name: "Zapple Watch",
        },
        {
          img: require("@/assets/images/products/flash-1.png"),
          name: "Hike Sneakers",
        },
        {
          img: require("@/assets/images/products/flash-2.png"),
          name: "Watch",
        },
        {
          img: require("@/assets/images/products/flash-3.png"),
          name: "Mobile",
        },
        {
          img: require("@/assets/images/products/flash-4.png"),
          name: "Zapple Watch",
        },
      ],
      gardenGuitar: [
        {
          img: require("@/assets/images/products/Home&Garden/25.PaintedLeafBegoniaPlant.png"),
          name: "Painted Leaf Begonia",
        },
        {
          img: require("@/assets/images/products/Home&Garden/26.ArecaPalminClayPot.png"),
          name: "Areca PalminClay Pot",
        },
        {
          img: require("@/assets/images/products/Home&Garden/27.BlackCoralSansevieriaPlant.png"),
          name: "Black Coral Sansevieria",
        },
        {
          img: require("@/assets/images/products/Music/1.6StringCheapElectricGuitar.png"),
          name: "String Electric Guitar",
        },
        {
          img: require("@/assets/images/products/Music/28.RolandFullSetVDrums.png"),
          name: "Roland Full SetV Drums",
        },
        {
          img: require("@/assets/images/products/Music/12.CheapUkuleleOffers.png"),
          name: "Ukulele Offers",
        },
      ],
      newArrivals: [
        {
          img: require("@/assets/images/products/imagegoggles.png"),
          title: "Sunglass",
          price: "$150",
        },
        {
          img: require("@/assets/images/products/lipstick(2).png"),
          title: "Lipstick",
          price: "$250",
        },
        {
          img: require("@/assets/images/products/lipstick(2).png"),
          title: "Lipstick",
          price: "$250",
        },
        {
          img: require("@/assets/images/products/bgwatch.png"),
          title: "Lipstick",
          price: "$250",
        },
        {
          img: require("@/assets/images/products/lipstick(4).png"),
          title: "Green Plant",
          price: "$250",
        },
        {
          img: require("@/assets/images/products/lipstick(3).png"),
          title: "Bonsai Tree",
          price: "$450",
        },
        {
          img: require("@/assets/images/products/lipstick(2).png"),
          title: "Lipstick",
          price: "$250",
        },
        {
          img: require("@/assets/images/products/bgwatch.png"),
          title: "Lipstick",
          price: "$250",
        },
        {
          img: require("@/assets/images/products/lipstick(4).png"),
          title: "Green Plant",
          price: "$250",
        },
        {
          img: require("@/assets/images/products/lipstick(3).png"),
          title: "Bonsai Tree",
          price: "$450",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["addCart", "removeCart"]),
  }
};
</script>

<style lang="scss" scoped>
.left-right-gradient {
  background-image: linear-gradient(
    90deg,
    rgb(255, 255, 255, 1),
    rgb(255, 255, 255, 0.9),
    rgb(255, 255, 255, 0)
  );
}
</style>