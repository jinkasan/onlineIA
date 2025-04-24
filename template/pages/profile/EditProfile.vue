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
                                <h2 class="mb-0">Edit Profile</h2>
                            </div>
                            <v-btn 
                                outlined 
                                color="primary" 
                                class="text-capitalize font-600"
                            >
                                Back to profile
                            </v-btn>
                       </div>

                      <v-row>
                          <v-col cols="12">
                              <base-card>
                                <div class="pa-5">
                                    <div class="mb-7">
                                        <v-avatar size="64" class="">
                                            <img src="@/assets/images/faces/ralph.png" alt="">
                                        </v-avatar>
                                        
                                    </div>
                                    <v-row>
                                        <v-col cols="12" lg="6" >
                                            <p class="text-14 mb-1">First Name</p>
                                                <v-text-field
                                                    
                                                    outlined
                                                    dense
                                                    hide-details=""
                                                    class=""
                                                ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" lg="6" >
                                            <p class="text-14 mb-1">Last Name</p>
                                                <v-text-field
                                                    
                                                    outlined
                                                    dense
                                                    hide-details=""
                                                    class=""
                                                ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" lg="6" >
                                            <p class="text-14 mb-1">Email</p>
                                                <v-text-field
                                                    
                                                    outlined
                                                    dense
                                                    hide-details=""
                                                    class=""
                                                ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" lg="6" >
                                            <p class="text-14 mb-1">Phone</p>
                                                <v-text-field
                                                    
                                                    outlined
                                                    dense
                                                    hide-details=""
                                                    class=""
                                                ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" lg="6" >
                                            <p class="text-14 mb-1">Birth Date</p>
                                                <v-text-field
                                                    type="date"
                                                    outlined
                                                    dense
                                                    hide-details=""
                                                    class=""
                                                ></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-btn color="primary" class="text-capitalize font-600">
                                                Save Changes
                                            </v-btn>
                                        </v-col>
                                    </v-row>
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
        title: 'Edit Profile'
    },
    data() {
        return{
            isSidebar: false,
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
            ],
            
        }
    }, 
   
    
}


</script>
