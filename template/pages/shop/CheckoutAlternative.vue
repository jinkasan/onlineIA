<template>
  <v-container class="my-6">
      <v-row>
          <v-col cols="12" md="6" lg="8" xl="8" >
              <base-card class="mb-4">
                <div class="pa-4">

                    <v-row>
                        <v-col cols="12">
                            <div class="d-flex">
                                <v-avatar size="30" color="primary" class="me-3">
                                    <p class="white--text mb-0">1</p>
                                </v-avatar>
                                <h3 class="font-weight-light">Delivery Details</h3>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6">
                            <p class="text-14 mb-1">Delivery Date</p>
                                <v-select
                                    :items="items"
                                    label="select..."
                                    dense
                                    outlined
                                ></v-select>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6">
                            <p class="text-14 mb-1">Delivery Time</p>
                                <v-select
                                    :items="items"
                                    label="select..."
                                    dense
                                    outlined
                                ></v-select>
                        </v-col>
                        <v-col cols="12" class="py-0">
                            <p class="text-14 mb-0">Delivery Address</p>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4">
                            
                            <div class="pa-4 grey lighten-2 br-8">
                                <h5 class="font-600 mb-2">Home</h5>
                                <p>435 Bristol Avenue, Abington MA 2351</p>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4">
                           
                            <div class="pa-4 grey lighten-2 br-8">
                                <h5 class="font-600 mb-2">Office</h5>
                                <p>777 Brockton Avenue, Abington MA 2351</p>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4">
                           
                            <div class="pa-4 grey lighten-2 br-8">
                                <h5 class="font-600 mb-2">Office 2</h5>
                                <p>777 Kazi Avenue, Abington MA 2351</p>
                            </div>
                        </v-col>
                    </v-row>
                </div>
                    
              </base-card>
              <base-card class="mb-4">
                <div class="pa-4">

                    <v-row>
                        <v-col cols="12">
                            <div class="d-flex">
                                <v-avatar size="30" color="primary" class="me-3">
                                    <p class="white--text mb-0">2</p>
                                </v-avatar>
                                <h3 class="font-weight-light">Personal Details</h3>
                            </div>
                        </v-col>
                       
                        <v-col cols="12" class="pb-0">
                            <p class="text-14 mb-0">Contact Information</p>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4">
                            
                            <div class="pa-4 grey lighten-2 br-8">
                                <h5 class="font-600 mb-2">Primary</h5>
                                <p class="mb-0">+1-202-555-0119</p>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4">
                           
                            <div class="pa-4 grey lighten-2 br-8">
                                <h5 class="font-600 mb-2">Secondary</h5>
                                <p class="mb-0">+1-202-555-0119</p>
                            </div>
                        </v-col>
                        
                    </v-row>
                </div>
                    
              </base-card>
              <base-card class="mb-4">
                <div class="pa-4">

                    <v-row>
                        <v-col cols="12">
                            <div class="d-flex">
                                <v-avatar size="30" color="primary" class="me-3">
                                    <p class="white--text mb-0">3</p>
                                </v-avatar>
                                <h3 class="font-weight-light">Payment Details</h3>
                            </div>
                        </v-col>
                       
                        <v-col cols="12" class="pb-0">
                            <p class="text-14 mb-0">Saved Payment Methods</p>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4">
                            
                            <div class="pa-4 grey lighten-2 br-8">
                                <v-avatar tile size="36">
                                    <img src="@/assets/images/payment-methods/Amex.svg" alt="">
                                </v-avatar>
                                <p class="mb-0">**** **** **** 4765</p>
                                <p class="mb-0">Jaslynn Land</p>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4">
                            
                            <div class="pa-4 grey lighten-2 br-8">
                                <v-avatar tile size="36">
                                    <img src="@/assets/images/payment-methods/Mastercard.svg" alt="">
                                </v-avatar>
                                <p class="mb-0">**** **** **** 4765</p>
                                <p class="mb-0">Jaslynn Land</p>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4">
                            
                            <div class="pa-4 grey lighten-2 br-8">
                                <v-avatar tile size="36">
                                    <img src="@/assets/images/payment-methods/Visa.svg" alt="">
                                </v-avatar>
                                <p class="mb-0">**** **** **** 4765</p>
                                <p class="mb-0">Jaslynn Land</p>
                            </div>
                        </v-col>
                        <v-col cols="12" class="py-0">
                            <div class="mb-5">
                                <a href="#" class="text-decoration-none ">I have a voucher</a>
                            </div>
                            <v-btn 
                                color="primary" 
                                class="text-capitalize font-600 mb-4"
                                block
                            >
                                Place Order
                            </v-btn>
                        </v-col>

                        
                    </v-row>
                </div>
                    
              </base-card>
          </v-col>
          <v-col cols="12" md="6" lg="4" xl="4">
              <p class="font-weight-bold mb-6">You Order</p>
              <div class="d-flex justify-space-between mb-6">
                  <p class="mb-0"><span class="font-weight-bold">1</span> x iPhone 12</p>
                  <p class="mb-0">$999.00</p>
              </div>
              <div class="d-flex justify-space-between mb-6">
                  <p class="mb-0"><span class="font-weight-bold">1</span> x iPhone 12 pro</p>
                  <p class="mb-0">$999.00</p>
              </div>
              <div class="d-flex justify-space-between mb-6">
                  <p class="mb-0"><span class="font-weight-bold">1</span> x iPhone 12 pro max</p>
                  <p class="mb-0">$999.00</p>
              </div>
              <v-divider class="my-4"></v-divider>
              <div class="d-flex justify-space-between mb-2">
                  <p class="mb-0 grey--text text--darken-2">Subtotal:</p>
                  <p class="mb-0 font-weight-bold">$2610.00</p>
              </div>
              <div class="d-flex justify-space-between mb-2">
                  <p class="mb-0 grey--text text--darken-2">Shipping:</p>
                  <p class="mb-0 font-weight-bold"> - </p>
              </div>
              <div class="d-flex justify-space-between mb-2">
                  <p class="mb-0 grey--text text--darken-2">Tax:</p>
                  <p class="mb-0 font-weight-bold"> $40.00 </p>
              </div>
              <div class="d-flex justify-space-between mb-2">
                  <p class="mb-0 grey--text text--darken-2">Discount:</p>
                  <p class="mb-0 font-weight-bold"> - </p>
              </div>
              <v-divider class="my-4"></v-divider>
              <div class="d-flex justify-space-between mb-2">
                  <p class="mb-0 font-weight-bold">Total:</p>
                  <p class="mb-0 font-weight-bold"> $2610.00 </p>
              </div>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    head: {
        title: 'Checkout Alternative'
    },
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>
