<template>
  <div class="header-landing">
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img
              v-svg-inline
              class="mr-2"
              src="@/assets/images/logo.svg"
              alt=""
            />
          </v-list-item-avatar>
          <!-- <v-list-item-content>
            <v-list-item-title class="title">Calango</v-list-item-title>
            <v-list-item-subtitle>WEB</v-list-item-subtitle>
          </v-list-item-content> -->
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-container>
      <v-app-bar
        app
        :flat="flat"
        elevation="0"
        class="px-15 header-landing-appbar"
        :class="{ expand: flat }"
      >
        <v-toolbar-title>
          <v-img
            class="cursor-pointer"
            @click="$vuetify.goTo('#home')"
            :src="require('@/assets/images/logo.svg')"
            max-width="90px"
          />
        </v-toolbar-title>
        <v-spacer />
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="mr-4"
          v-if="isXs"
        />
        <div v-else>
          <v-btn text @click="$vuetify.goTo('#features')">
            <span class="mr-2 text-capitalize grey--text text--darken-3"
              >Features</span
            >
          </v-btn>
          <v-btn text @click="$vuetify.goTo('#demos')">
            <span class="mr-2 text-capitalize grey--text text--darken-3"
              >Demos</span
            >
          </v-btn>
          <v-btn text @click="$vuetify.goTo('#technology')">
            <span class="mr-2 text-capitalize grey--text text--darken-3"
              >Technologies</span
            >
          </v-btn>
          <v-btn text @click="$vuetify.goTo('#pricing')">
            <span class="mr-2 text-capitalize grey--text text--darken-3"
              >Pricing</span
            >
          </v-btn>
          <v-btn
            class="mx-2"
            outlined
            color="primary"
            href="https://store.vuetifyjs.com/products/bonik-multipurpose-ecommerce-template"
          >
            <span class="font-600 text-capitalize">Purchase Now</span>
          </v-btn>
        </div>
      </v-app-bar>

      <section id="home" class="p-relative pt-100">
        <v-row class="text-center">
          <v-col cols="12">
            <v-img
              max-width="360"
              class="mx-auto"
              contain
              :src="require('@/assets/images/landing/this-bonik.svg')"
              alt=""
            ></v-img>
            <h4 class="font-600 primary--text mb-2">Vue.js, vuetify, SASS</h4>
            <h2 class="font-weight-bold secondary--text text--darken-1 mb-3">
              The Best Vue eCommerce Template
            </h2>
            <!-- <v-row class="mb-5">
              <v-col cols="12" lg="3" xl="2" class="mx-auto">
                <p class="text-sm">SEO friendly server side rendered React Next.js multipurpose eCommerce template.</p>
              </v-col>
            </v-row> -->
            <div class="d-flex justify-center landing-button-wrapper mt-5">
              <v-btn
                color="primary"
                class="font-600 text-capitalize mr-4"
                href="https://store.vuetifyjs.com/products/bonik-multipurpose-ecommerce-template"
              >
                Purchase Now
              </v-btn>
              <v-btn
                @click="$vuetify.goTo('#demos')"
                outlined
                color="primary"
                class="font-600 text-capitalize mr-4"
              >
                View Demos
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" class="pb-0">
            <v-img
              max-width="1200"
              class="mx-auto"
              contain
              :src="require('@/assets/images/landing/page-group.png')"
            ></v-img>
          </v-col>
          <div class="p-absolute landing-figma-button">
            <v-btn color="white" class="font-600 text-capitalize" x-large>
              Ready For
              <v-avatar size="24" class="ml-3">
                <img
                  
                  class="icon mr-2"
                  src="@/assets/images/icons/figma.svg"
                  alt=""
                />
              </v-avatar>
            </v-btn>
          </div>
        </v-row>
      </section>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["Features", "#features"],
      ["Demos", "#demos"],
      ["Technology", "#technology"],
      ["Pricing", "#pricing"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
<style lang="scss" scoped>
.v-toolbar {
  transition: 0.6s;
}
.pt-100 {
  padding-top: 100px;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
.header-landing {
  background-image: url("../../assets/images/landing/landing-bg-1.svg");
  background-size: cover;
  margin-bottom: 100px;
}
.landing-button-wrapper {
  margin-bottom: 100px;
}
.landing-figma-button {
  left: 50%;
  transform: translateX(-50%);
  bottom: -25px;
}
.header-landing-appbar {
  background-color: transparent !important;
  &.v-app-bar--is-scrolled {
    background-color: #fff !important;
    box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px !important;
  }
}
</style>
