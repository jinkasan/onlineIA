<template>
  <v-container class="py-6">
      <v-row>
        <v-col cols="12">
            <div class="box-wrapper">
                <div class="box-overlay" :class="{'open': isSidebar}"  @click="isSidebar = !isSidebar"></div>
                <div class="box-sidebar pb-3 shadow-sm" :class="{'open': isSidebar}">
                    <DashbordSidebarTwo />
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
                       <div class="d-flex align-center mb-5">
                            <img v-svg-inline class="icon mr-3" src="@/assets/images/icons/settings_filled.svg" alt="" />
                            <h2 class="mb-0">Account</h2>
                        </div>
                        <base-card>
                            <div class="pa-5">
                                <v-row>
                                    <v-col cols="12">
                                        
                                        <v-img cover class="br-8" height="173" :src="require('@/assets/images/banners/banner-10.png')">
                                            <div class="d-inline-flex p-absolute right-0 ma-5">
                                                <label for="cover-upload-avatar">
                                                    <span class="primary cursor-pointer lighten-5 pa-1 d-flex rounded-circle">
                                                        <img v-svg-inline class="icon primary--text" src="@/assets/images/icons/camera.svg" alt="" />
                                                    </span>
                                                </label>
                                                <input type="file" id="cover-upload-avatar" class="d-none" />
                                            </div>


                                            <div class="d-inline-flex p-absolute bottom-0 ma-5">
                                                <v-avatar size="80">
                                                    <img src="@/assets/images/faces/propic(9).png" alt="">
                                                </v-avatar>
                                                <div class="d-inline-flex p-absolute right-0 bottom-0">
                                                    <label for="cover-upload-avatar">
                                                        <span class="grey lighten-2 cursor-pointer lighten-5 pa-1 d-flex rounded-circle">
                                                            <img v-svg-inline class="icon secondary--text" src="@/assets/images/icons/camera.svg" alt="" />
                                                        </span>
                                                    </label>
                                                    <input type="file" id="cover-upload-avatar" class="d-none" />
                                                </div>
                                            </div>
                                        </v-img>

                                        
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <p class="text-14 mb-1">First Name</p>
                                        <v-text-field
                                            outlined
                                            dense
                                            hide-details
                                            placeholder="First Name"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <p class="text-14 mb-1">Last Name</p>
                                        <v-text-field
                                            outlined
                                            dense
                                            hide-details
                                            placeholder="Last Name"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <p class="text-14 mb-1">Email</p>
                                        <v-text-field
                                            outlined
                                            dense
                                            hide-details
                                            placeholder="Email"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <p class="text-14 mb-1">Phone</p>
                                        <v-text-field
                                            outlined
                                            dense
                                            hide-details
                                            placeholder="Phone"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <p class="text-14 mb-1">Country</p>
                                        <v-select
                                            dense
                                            :items="items"
                                            placeholder="Select Category"
                                            outlined
                                            hide-details
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <p class="text-14 mb-1">City</p>
                                        <v-text-field
                                            outlined
                                            dense
                                            hide-details
                                            placeholder="City"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-btn color="primary" class="font-600 text-capitalize">
                                            Save Changes
                                        </v-btn>
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

import DashbordSidebarTwo from "@/components/DashboardSidebarTwo.vue";
export default {
    components: {
        
        DashbordSidebarTwo
    },
    head: {
        title: 'Profile'
    },
    data() {
        return{
            isSidebar: false,
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],   
        }
    },
    
}
</script>


