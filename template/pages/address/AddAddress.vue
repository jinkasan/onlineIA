<template>
  <v-container class="py-6">
      <v-row>
        <v-col cols="12">
            <div class="box-wrapper">
                <div class="box-overlay" :class="{'open': isSidebar}"  @click="isSidebar = !isSidebar"></div>
                <div class="box-sidebar pb-3 shadow-sm" :class="{'open': isSidebar}">
                    <DashbordSidebar />
                </div>
                <div class="box-content">
                    <div class="d-flex justify-end pa-2 d-block d-md-none">
                        <v-btn
                            icon   
                            @click="isSidebar = !isSidebar"
                        >
                            <v-icon dark>
                                mdi-format-list-bulleted-square
                            </v-icon>
                        </v-btn>
                    </div>
                    <div class="box-container">
                       <div class="d-flex justify-space-between flex-wrap mb-5">
                           <div class="d-flex align-center ">
                                <v-avatar tile size="25" class="me-3">
                                    <img src="@/assets/images/icons/pin_filled.svg" alt="">
                                </v-avatar>
                                <h2 class="mb-0">Add New Addresses</h2>
                            </div>
                            <v-btn 
                                outlined 
                                color="primary" 
                                class="text-capitalize font-600"
                            >
                                Back To Addresses
                            </v-btn>
                       </div>
                      <base-card>
                        <div class="pa-4">
                            <v-row>
                                <v-col cols="12" md="6" lg="6" xl="6">
                                    <p class="text-14 mb-1">Name </p>
                                    <v-text-field
                                        
                                        outlined
                                        dense
                                        hide-details=""
                                        
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6" xl="6">
                                    <p class="text-14 mb-1">Address Line </p>
                                    <v-text-field
                                        
                                        outlined
                                        dense
                                        hide-details=""
                                        
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6" xl="6">
                                    <p class="text-14 mb-1">Phone  </p>
                                    <v-text-field
                                        
                                        outlined
                                        dense
                                        hide-details=""
                                        
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn color="primary" class="font-600 text-capitalize">Save Changes</v-btn>
                                </v-col>
                            </v-row>
                        </div>
                      </base-card>
                       
                       
                    </div>
                </div>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

import DashbordSidebar from "@/components/DashboardSidebar.vue" 
export default {
    components: {
        DashbordSidebar
    },
    head: {
        title: 'Add Address'
    },
    data() {
        return{
            isSidebar: false,
            
        }
    },
   
    
}
</script>

