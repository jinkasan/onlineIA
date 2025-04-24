<template>
  <v-container class="my-6">
      <v-row>
          <v-col cols="12" >
              <form-wizard
                class="custom-form-wizard" 
                shape="square"
                title="" 
                subtitle=""
                color="#D23F57"
                next-button-text="Order"
                finish-button-text="Deliver"
              >
                <tab-content title="Cart" icon="mdi mdi-cart-outline">
                    <v-row>
                        <v-col cols="12" md="6" lg="8" xl="8">
                            <div v-for="(n, index) in cart" :key="index">
                                <base-card class="d-flex flex-wrap mb-6">
                                    <v-img max-width="140" :src="n.img" alt=""></v-img>
                                    <div class="d-flex flex-column flex-grow-1 flex-wrap pa-4 mw-0">
                                        <div class="d-flex justify-space-between w-100 mb-3">
                                            <div>
                                                <div class="d-flex">
                                                    <h4 class="font-600 text-truncate mb-4">{{ n.name }}</h4>
                                                </div>
                                                <div>
                                                    <p class="grey--text text--darken-1 mb-0">$250.00 x 1 <span class="primary--text ms-2 font-600">$250.00</span></p>
                                                </div>
                                            </div>
                                            <v-btn
                                                icon
                                                
                                            >
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                            
                                        </div>
                                        <div class="d-flex justify-end flex-grow-1 align-end">
                                            
                                            <div class="d-flex align-center">
                                                <v-btn
                                                    class=" rounded "
                                                    
                                                    fab
                                                    x-small
                                                    tile  
                                                disabled
                                                >
                                                    <v-icon>mdi-minus</v-icon>
                                                </v-btn>
                                                <div class="text-center mx-2">3</div>
                                                <v-btn
                                                    class=" rounded"
                                                    outlined
                                                    fab
                                                    x-small
                                                    tile  
                                                    color="primary"
                                                >
                                                    <v-icon>mdi-plus</v-icon>
                                                </v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </base-card>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="4" xl="4">
                            <base-card>
                                
                                <div class="pa-5">
                                    <div class="d-flex justify-space-between">
                                        <p class="mb-0 grey--text text--darken-1">Total</p>
                                        <h4 class="font-600">$2610.00</h4>
                                    </div>
                                    <v-divider class="my-3"></v-divider>
                                    <div class="d-flex align-center mb-4">
                                        <h6 class="">Additional Comments</h6>
                                        <v-chip
                                            class="ma-2"
                                            label
                                            color="primary lighten-5"
                                            small
                                        >
                                            <span class="primary--text text-sm">Note</span>
                                        </v-chip>
                                    </div>
                                    <v-textarea
                                        
                                        outlined
                                        hide-details=""
                                        name="input-7-4"
                                        label="Comments"
                                        value=""
                                    ></v-textarea>
                                    <v-divider class="my-4"></v-divider>
                                    <v-text-field
                                        label="Voucher"
                                        outlined
                                        dense
                                        hide-details=""
                                        class="mb-4"
                                    ></v-text-field>
                                    <v-btn
                                        color="primary"
                                        outlined
                                        class="text-capitalize font-600"
                                        block
                                    >
                                        Apply Voucher
                                    </v-btn>
                                    <v-divider class="my-3"></v-divider>
                                    <h6 class="mb-4">Shipping Estimates</h6>
                                    <p class="text-14 mb-1">Country</p>
                                    <v-select
                                        dense
                                        class="mb-4"
                                        :items="items"
                                        label="Select Country"
                                        outlined
                                        hide-details
                                    ></v-select>
                                    <p class="text-14 mb-1">State</p>
                                    <v-select
                                        dense
                                        class="mb-4"
                                        :items="items"
                                        label="Select State"
                                        outlined
                                        hide-details
                                    ></v-select>

                                    <p class="text-14 mb-1">Zip Code</p>
                                    <v-text-field
                                        label="3100"
                                        outlined
                                        dense
                                        hide-details=""
                                        class="mb-4"
                                    ></v-text-field>
                                    <v-btn
                                        color="primary"
                                        outlined
                                        class="text-capitalize font-600 mb-4"
                                        block
                                    >
                                        Calculate Shipping
                                    </v-btn>
                                    <v-btn
                                        color="primary"
                                        class="text-capitalize font-600 mb-4"
                                        block
                                    >
                                        Checkout Now
                                    </v-btn>

                                </div>
                                
                            </base-card>
                        </v-col>
                    </v-row>
                    
                </tab-content>
                <tab-content title="Details" icon="mdi mdi-newspaper-variant-outline">
                    <v-row>
                        <v-col cols="12" xl="9" lg="8" md="6">
                            <base-card>
                                <div class="pa-5">
                                    <h6 class="mb-4">Shipping Address</h6>
                                    
                                        
                                    <v-row>
                                        <v-col cols="12" xl="6" lg="6">
                                            <p class="text-14 mb-1">Full Name</p>
                                            <v-text-field
                                                outlined
                                                dense
                                                hide-details=""
                                                
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" xl="6" lg="6">
                                            <p class="text-14 mb-1">Email Address</p>
                                            <v-text-field 
                                                outlined
                                                dense
                                                hide-details=""
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" xl="6" lg="6">
                                            <p class="text-14 mb-1">Phone Number</p>
                                            <v-text-field
                                                
                                                outlined
                                                dense
                                                hide-details=""
                                                
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" xl="6" lg="6">
                                            <p class="text-14 mb-1">Company</p>
                                            <v-text-field
                                                
                                                outlined
                                                dense
                                                hide-details=""
                                                
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" xl="6" lg="6">
                                            <p class="text-14 mb-1">Zip Code</p>
                                            <v-text-field
                                                
                                                outlined
                                                dense
                                                hide-details=""
                                                
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" xl="6" lg="6">
                                            <p class="text-14 mb-1">Country</p>
                                            <v-select
                                                dense
                                                
                                                :items="items"
                                                label="Select..."
                                                outlined
                                                hide-details
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" xl="6" lg="6">
                                            <p class="text-14 mb-1">Address 1</p>
                                            <v-text-field
                                                
                                                outlined
                                                dense
                                                hide-details=""
                                                
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" xl="6" lg="6">
                                            <p class="text-14 mb-1">Address 2</p>
                                            <v-text-field
                                                
                                                outlined
                                                dense
                                                hide-details=""
                                                
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                        
                                        
                                    

                                </div>
                            </base-card>
                        </v-col>
                        <v-col cols="12" xl="3" lg="4" md="6">
                            <base-card>
                                
                                <div class="pa-5">
                                    <div class="d-flex justify-space-between mb-2">
                                        <p class="mb-0 grey--text text--darken-1">Subtotal:</p>
                                        <h4 class="font-600 mb-0">$2610.00</h4>
                                    </div>
                                    <div class="d-flex justify-space-between mb-2">
                                        <p class="mb-0 grey--text text--darken-1">Shipping:</p>
                                        <h4 class="font-600"> - </h4>
                                    </div>
                                    <div class="d-flex justify-space-between mb-2">
                                        <p class="mb-0 grey--text text--darken-1">Tax:</p>
                                        <h4 class="font-600"> $40.00 </h4>
                                    </div>
                                    <div class="d-flex justify-space-between mb-2">
                                        <p class="mb-0 grey--text text--darken-1">Discount:</p>
                                        <h4 class="font-600"> - </h4>
                                    </div>
                                    <v-divider class="my-3"></v-divider>
                                    <div class="d-flex justify-end">
                                        <h2 class="mb-3">$2610.00</h2>
                                    </div>
                                    <v-text-field
                                        label="Voucher"
                                        outlined
                                        dense
                                        hide-details=""
                                        class="mb-4"
                                    ></v-text-field>
                                    <v-btn
                                        color="primary"
                                        outlined
                                        class="text-capitalize font-600"
                                        block
                                    >
                                        Apply Voucher
                                    </v-btn>
                                   

                                </div>
                                
                            </base-card>
                        </v-col>
                    </v-row>
                    
                </tab-content>
                <tab-content title="Payment" icon="mdi mdi-briefcase-variant-outline">
                   <v-row>
                        <v-col cols="12" xl="9" lg="8" md="6">
                            <base-card>
                                <div class="pa-5">
                                    <v-radio-group class="mt-0 pt-0" v-model="radios" hide-details="">
                                        <v-radio
                                        color="secondary"
                                        >
                                            <template v-slot:label>
                                                <h6 class="black--text font-600">Pay With Credit Card</h6>
                                            </template>
                                        </v-radio>
                                    </v-radio-group>
                                </div>
                                
                                <v-divider></v-divider>
                                   
                                    
                                        
                                    <v-row class="pa-5">
                                        <v-col cols="12" xl="6" lg="6">
                                            <p class="text-14 mb-1">Card Number</p>
                                            <v-text-field
                                                outlined
                                                dense
                                                hide-details=""
                                                
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" xl="6" lg="6">
                                            <p class="text-14 mb-1">Exp Date</p>
                                            <v-text-field 
                                                outlined
                                                dense
                                                hide-details=""
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" xl="6" lg="6">
                                            <p class="text-14 mb-1">Name on Card </p>
                                            <v-text-field
                                                
                                                outlined
                                                dense
                                                hide-details=""
                                                
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" xl="6" lg="6">
                                            <p class="text-14 mb-1">Name on Card</p>
                                            <v-text-field
                                                
                                                outlined
                                                dense
                                                hide-details=""
                                                
                                            ></v-text-field>
                                        </v-col>
                                       
                                       <v-col cols="12" xl="6">
                                            <v-btn
                                                outlined
                                                color="primary"
                                                class="text-capitalize font-600"
                                            >
                                                Submit
                                            </v-btn>

                                       </v-col>
                                    </v-row>
                                    <v-divider></v-divider> 
                                    <div class="pa-5">
                                        <v-radio-group class="mt-0 pt-0" v-model="radiosTwo"  hide-details="">
                                            <v-radio
                                                color="secondary"
                                            >
                                                <template v-slot:label>
                                                    <h6 class="black--text font-600">Pay with Paypal</h6>
                                                </template>
                                            </v-radio>
                                        </v-radio-group>
                                    </div>
                                    <v-divider></v-divider>
                                    <div class="pa-5">
                                        <p class="text-14 mb-1">Name on Card </p>
                                        <div class="d-flex">
                                            <v-text-field
                                                class="mr-4"
                                                outlined
                                                dense
                                                hide-details=""
                                            
                                            ></v-text-field>
                                            <v-btn color="primary" outlined>
                                                Submit
                                            </v-btn>
                                        </div>
                                    </div> 
                                    <v-divider></v-divider>
                                    <div class="pa-5">
                                        <v-radio-group class="mt-0 pt-0" v-model="radiosTwo"  hide-details="">
                                            <v-radio
                                                color="secondary"
                                            >
                                                <template v-slot:label>
                                                    <h6 class="black--text font-600">Cash On Delivery</h6>
                                                </template>
                                            </v-radio>
                                        </v-radio-group>
                                    </div>
                                    
                                 
                            </base-card>
                        </v-col>
                        <v-col cols="12" xl="3" lg="4" md="6">
                            <base-card>
                                
                                <div class="pa-5">
                                    <div class="d-flex justify-space-between mb-2">
                                        <p class="mb-0 grey--text text--darken-1">Subtotal:</p>
                                        <h4 class="font-600 mb-0">$2610.00</h4>
                                    </div>
                                    <div class="d-flex justify-space-between mb-2">
                                        <p class="mb-0 grey--text text--darken-1">Shipping:</p>
                                        <h4 class="font-600"> - </h4>
                                    </div>
                                    <div class="d-flex justify-space-between mb-2">
                                        <p class="mb-0 grey--text text--darken-1">Tax:</p>
                                        <h4 class="font-600"> $40.00 </h4>
                                    </div>
                                    <div class="d-flex justify-space-between mb-2">
                                        <p class="mb-0 grey--text text--darken-1">Discount:</p>
                                        <h4 class="font-600"> - </h4>
                                    </div>
                                    <v-divider class="my-3"></v-divider>
                                    <div class="d-flex justify-end">
                                        <h2 class="mb-3">$2610.00</h2>
                                    </div>
                                    
                                   

                                </div>
                                
                            </base-card>
                        </v-col>
                    </v-row>
                </tab-content>
                
              </form-wizard>
          </v-col>
          
      </v-row>
  </v-container>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard';                              
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
export default {
  components: {
    FormWizard,
    TabContent
  },
  head: {
      title: 'Cart'
  },
  data() {
      return {
          items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
          radios: null,
          radiosTwo: null,
          cart: [
              {
                img: require('@/assets/images/products/Automotive/1.Ford2019.png'),
                name: 'Lord 2019'
              },
              {
                img: require('@/assets/images/products/Automotive/28.Porsche2020.png'),
                name: 'Xorsche 2020'
              },
              {
                img: require('@/assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png'),
                name: 'Gold Necklace 2020'
              },
             
          ]
          
      }
  }
}
</script>

