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
                                    <img src="@/assets/images/icons/user_filled.svg" alt="">
                                </v-avatar>
                                <h2 class="mb-0">My Profile</h2>
                            </div>
                            <v-btn 
                                outlined 
                                color="primary" 
                                class="text-capitalize font-600"
                            >
                                Edit Profile
                            </v-btn>
                       </div>

                       <v-row>
                          <v-col cols="12" md="12" lg="4">
                              <base-card>
                                <div class="pa-5">
                                    <div class="d-flex justify-space-between align-center flex-wrap">
                                        <div class="d-flex align-center">
                                            <v-avatar size="64" class="me-4">
                                                <img src="@/assets/images/faces/ralph.png" alt="">
                                            </v-avatar>
                                            <div>
                                                <h4 class="font-600">Ralph Edwards</h4>
                                                <p class="mb-0 grey--text text--darken-1">Balance: <span class="primary--text">$500</span></p>
                                            </div>
                                        </div>
                                        <p class="mb-0 grey--text text--darken-1">SILVER USER</p>
                                    </div>

                                </div>
                              </base-card>
                          </v-col>
                          <v-col cols="6" sm="6" md="4" lg="2">
                              <base-card class="h-100 pa-4 d-flex flex-column text-center align-center justify-center">
                                <h3 class="font-600 primary--text mb-0">16</h3>
                                <p class="mb-0 text-12 grey--text text--darken-1">All Orders</p>
                              </base-card>
                          </v-col>
                          <v-col cols="6" sm="6" md="4" lg="2">
                              <base-card class="h-100 pa-4 d-flex flex-column text-center align-center justify-center">
                                <h3 class="font-600 primary--text mb-0">02</h3>
                                <p class="mb-0 text-12 grey--text text--darken-1">Awaiting Payments </p>
                              </base-card>
                          </v-col>
                          <v-col cols="6" sm="6" md="4" lg="2">
                              <base-card class="h-100 pa-4 d-flex flex-column text-center align-center justify-center">
                                <h3 class="font-600 primary--text mb-0">02</h3>
                                <p class="mb-0 text-12 grey--text text--darken-1">Awaiting Shipment </p>
                              </base-card>
                          </v-col>
                          <v-col cols="6" sm="6" md="4" lg="2">
                              <base-card class="h-100 pa-4 d-flex flex-column text-center align-center justify-center">
                                <h3 class="font-600 primary--text mb-0">01</h3>
                                <p class="mb-0 text-12 grey--text text--darken-1">Awaiting Delivery </p>
                              </base-card>
                          </v-col>
                        
                          <v-col cols="12">
                              <base-card>
                                <div class="pa-4 d-flex justify-space-between flex-wrap">
                                    <div class="mx-2 my-2">
                                        <p class="text-sm grey--text text--darken-1 mb-1">
                                            First Name
                                        </p>
                                        <span>Ralph</span>
                                    </div>
                                    <div class="mx-2 my-2">
                                        <p class="text-sm grey--text text--darken-1 mb-1">
                                            Last Name
                                        </p>
                                        <span>Edwards</span>
                                    </div>
                                    <div class="mx-2 my-2">
                                        <p class="text-sm grey--text text--darken-1 mb-1">
                                            Email
                                        </p>
                                        <span>ralfedwards@email.com</span>
                                    </div>
                                    <div class="mx-2 my-2">
                                        <p class="text-sm grey--text text--darken-1 mb-1">
                                            Phone
                                        </p>
                                        <span>+1983649392983</span>
                                    </div>
                                    <div class="mx-2 my-2">
                                        <p class="text-sm grey--text text--darken-1 mb-1">
                                            Birth Date
                                        </p>
                                        <span>01 Jan, 1970</span>
                                    </div>
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
import DashbordSidebar from "@/components/DashboardSidebar"
export default {
    components: {
        DashbordSidebar,
       
    },
    head: {
        title: 'View Profile'
    },
    data() {
        return{
            isSidebar: false,
            
        }
    }, 
   
    
}


</script>
