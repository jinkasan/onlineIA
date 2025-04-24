<template>
  <v-container class="py-6">
    <v-row>
      <v-col cols="12">
        <div class="box-wrapper">
          <div
            class="box-overlay"
            :class="{ open: isSidebar }"
            @click="isSidebar = !isSidebar"
          ></div>
          <div class="box-sidebar pb-3 shadow-sm" :class="{ open: isSidebar }">
            <DashbordSidebar />
          </div>
          <div class="box-content">
            <div class="d-flex justify-end pa-2 d-block d-md-none">
              <v-btn icon @click="isSidebar = !isSidebar">
                <v-icon dark>
                  mdi-format-list-bulleted-square
                </v-icon>
              </v-btn>
            </div>
            <div class="box-container">
              <div class="d-flex justify-space-between flex-wrap mb-5">
                <div class="d-flex align-center ">
                  <v-avatar tile size="25" class="me-3">
                    <img src="@/assets/images/icons/bag_filled.svg" alt="" />
                  </v-avatar>
                  <h2 class="mb-0">Order Details</h2>
                </div>
                <v-btn
                  outlined
                  color="primary"
                  class="text-capitalize font-600"
                >
                  Order Again
                </v-btn>
              </div>

              <v-row>
                <v-col cols="12">
                  <base-card>
                    <div class="px-6 py-14">
                      <div class="d-flex align-center">
                        <div class="p-relative">
                          <v-avatar
                            class="order-details-custom-done"
                            size="22"
                            color="grey lighten-2"
                          >
                            <img
                              
                              class="w-12 icon secondary--text text--darken-1 mr-0"
                              src="@/assets/images/icons/done.svg"
                              alt=""
                            />
                          </v-avatar>
                          <v-avatar size="64" color="primary">
                            <img
                              
                              class="w-32 icon secondary--text text--darken-1 mr-0"
                              src="@/assets/images/icons/package-box.svg"
                              alt=""
                            />
                          </v-avatar>
                        </div>
                        <v-sheet
                          color="primary"
                          elevation="0"
                          height="4"
                          class="flex-grow-1"
                        ></v-sheet>
                        <div>
                          <v-avatar size="64" color="primary">
                            <img
                              v-svg-inline
                              class="w-32 icon white--text mr-0"
                              src="@/assets/images/icons/truck-1.svg"
                              alt=""
                            />
                          </v-avatar>
                        </div>
                        <v-sheet
                          color="grey lighten-2"
                          elevation="0"
                          height="4"
                          class="flex-grow-1"
                        ></v-sheet>
                        <div>
                          <v-avatar size="64" color="grey lighten-2">
                            <img
                              v-svg-inline
                              class="w-32 icon white--text mr-0"
                              src="@/assets/images/icons/delivery.svg"
                              alt=""
                            />
                          </v-avatar>
                        </div>
                      </div>
                      <div class="d-flex justify-end mt-10">
                        <div
                          class="py-2 px-5 primary--text primary lighten-5 text-center text-wrap rounded-pill"
                        >
                          <p class="mb-0">
                            Estimated Delivery Date
                            <span class="font-weight-bold">4th October</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </base-card>
                </v-col>
                <v-col cols="12">
                  <base-card>
                    <div
                      class="grey lighten-2 d-flex justify-space-around flex-wrap"
                    >
                      <div class="d-flex my-3 mx-3">
                        <p class="text-14 grey--text text--darken-2 mb-0 mr-2">
                          Order ID:
                        </p>
                        <p class="mb-0 grey--text text--darken-4">
                          9001997718074513
                        </p>
                      </div>
                      <div class="d-flex my-3 mx-3">
                        <p class="text-14 grey--text text--darken-2 mb-0 mr-2">
                          Placed on:
                        </p>
                        <p class="mb-0 grey--text text--darken-4">
                          10 Jun, 2021
                        </p>
                      </div>
                      <div class="d-flex my-3 mx-3">
                        <p class="text-14 grey--text text--darken-2 mb-0 mr-2">
                          Delivered on:
                        </p>
                        <p class="mb-0 grey--text text--darken-4">
                          10 Jun, 2021
                        </p>
                      </div>
                    </div>

                    <div v-for="(item, index) in 4" :key="index">
                      <div
                        class="d-flex align-center justify-space-around flex-wrap  pa-4"
                      >
                        <div class="d-flex align-center flex-wrap me-4">
                          <v-avatar tile size="64" class="me-4">
                            <img
                              src="@/assets/images/products/Groceries/2.PremiumGroceryCollection.png"
                              alt=""
                            />
                          </v-avatar>
                          <div class="">
                            <div class="text-14 font-600">
                              Premium Grocery Collection
                            </div>
                            <div class="text-14 grey--text text--darken-2">
                              $250 x 1
                            </div>
                          </div>
                        </div>
                        <p class="mb-0 grey--text text--darken-2">
                          Product properties: Black, L
                        </p>
                        <v-btn
                          text
                          color="primary"
                          class="text-capitalize font-weight-bold"
                          >Write a Review</v-btn
                        >
                      </div>
                    </div>
                  </base-card>
                </v-col>
                <v-col cols="12" lg="6">
                  <base-card>
                    <div class="pa-5">
                      <h4 class="mb-3 grey--text text--darken-4">
                        Shipping Address
                      </h4>
                      <p class="text-14 mb-0">
                        Kelly Williams 777 Brockton Avenue, Abington MA 2351
                      </p>
                    </div>
                  </base-card>
                </v-col>
                <v-col cols="12" lg="6">
                  <base-card>
                    <div class="pa-5">
                      <h4 class="mb-3 grey--text text--darken-4">
                        Total Summary
                      </h4>
                      <div class="d-flex justify-space-between mb-2">
                        <p class="tex-14 mb-0 grey--text text--darken-2">
                          Subtotal:
                        </p>
                        <p class="tex-14 mb-0 font-weight-bold">
                          $335
                        </p>
                      </div>
                      <div class="d-flex justify-space-between mb-2">
                        <p class="tex-14 mb-0 grey--text text--darken-2">
                          Shipping fee:
                        </p>
                        <p class="tex-14 mb-0 font-weight-bold">
                          $10
                        </p>
                      </div>
                      <div class="d-flex justify-space-between mb-2">
                        <p class="tex-14 mb-0 grey--text text--darken-2">
                          Discount:
                        </p>
                        <p class="tex-14 mb-0 font-weight-bold">
                          -$30
                        </p>
                      </div>
                      <v-divider class="my-3"></v-divider>
                      <div class="d-flex justify-space-between mb-2">
                        <p class="tex-14 mb-0 font-weight-bold">
                          Total:
                        </p>
                        <p class="tex-14 mb-0 font-weight-bold">
                          $315
                        </p>
                      </div>
                      <p>Paid by Credit/Debit Card</p>
                    </div>
                  </base-card>
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
import DashbordSidebar from "@/components/DashboardSidebar";
export default {
  components: {
    DashbordSidebar
  },
  head: {
    title: 'Order Details'
  },
  data() {
    return {
      isSidebar: false
    };
  }
};
</script>
<style lang="postcss" scoped>
.w-32 {
  width: 32px;
}
.w-12 {
  width: 12px;
}
.order-details-custom-done {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
</style>
