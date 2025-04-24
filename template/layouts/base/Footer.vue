<template>
  <v-footer
    dark
    color="secondary"
    :class="{'d-none': $route.path == '/home/HomeTwo'}"
  >
    <v-container>
      <v-row>
        <v-col cols="12" xl="4" lg="4" md="4" sm="6">
          <v-avatar size="120" tile class="mb-0">
            <img src="@/assets/images/logo.png" alt="" />
          </v-avatar>
          <p class="footer-text mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet
          </p>
          <div class="d-flex flex-sm-nowrap flex-wrap">
            <a href="#" class="me-3 mb-3">
              <v-img
                max-width="130"
                :src="require('@/assets/images/app-store/google-play.png')"
              ></v-img>
            </a>
            <a href="#">
              <v-img
                max-width="130"
                :src="require('@/assets/images/app-store/app-store.png')"
              ></v-img>
            </a>
          </div>
        </v-col>

        <v-col cols="12" xl="2" lg="2" md="4" sm="6">
          <h2 class="mb-5">About Us</h2>
          <div v-for="(n, index) in aboutUs" :key="index" class="my-1">
            <a href="#" class="text-decoration-none footer-link-hover">{{
              n
            }}</a>
          </div>
        </v-col>
        <v-col cols="12" xl="3" lg="3" md="4" sm="6">
          <h2 class="mb-5">Custom Care</h2>
          <div v-for="(n, index) in customerCare" :key="index" class="my-1">
            <a href="#" class="text-decoration-none footer-link-hover">{{
              n
            }}</a>
          </div>
        </v-col>
        <v-col cols="12" xl="3" lg="3" md="4" sm="6">
          <h2 class="mb-5">Contact Us</h2>
          <p class="footer-text">
            70 Washington Square South, New York, NY 10012, United States
          </p>
          <p class="footer-text">Email: uilib.help@gmail.com</p>
          <p class="footer-text mb-5">Phone: +1 1123 456 780</p>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="me-2 white--text"
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
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-youtube",
      "mdi-google",
      "mdi-instagram",
    ],
    aboutUs: [
      "Careers",
      "Our Stores",
      "Our Cares",
      "Terms & Conditions",
      "Privacy Policy",
    ],
    customerCare: [
      "Help Center",
      "How to Buy",
      "Track Your Order",
      "Corporate & Bulk Purchasing",
      "Returns & Funds",
    ],
  }),
};
</script>
<style lang="scss">
a.footer-link-hover {
  color: #bdbdbd !important;
  &:hover {
    color: #fff !important;
  }
}
.v-footer {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>