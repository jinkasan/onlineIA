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
                       <div class="d-flex justify-space-between">
                           <div class="d-flex align-center mb-5">
                                <img class="icon mr-3" src="@/assets/images/icons/delivery-box.svg" alt="" />
                                <h2 class="mb-0">Edit Products</h2>
                            </div>
                            <v-btn 
                                outlined
                                color="primary" 
                                class="font-600 text-capitalize"
                            >Back to Product List</v-btn>
                       </div>
                       <base-card>
                            <div class="pa-5">
                                <v-row>
                                    <v-col cols="12" sm="6" lg="6">
                                        <p class="text-14 mb-1">Name</p>
                                        <v-text-field
                                            outlined
                                            dense
                                            hide-details
                                            placeholder="name"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" lg="6">
                                        <p class="text-14 mb-1">Category</p>
                                        <v-select
                                            dense
                                            :items="items"
                                            placeholder="Select Category"
                                            outlined
                                            hide-details
                                        ></v-select>
                                    </v-col>

                                    <v-col cols="12">
                                        <div class="edit-product-upload py-10">
                                            
                                            <v-row>
                                                <v-col cols="12" sm="6" lg="4" class="mx-auto">
                                                    <h5 class="font-600 grey--text text--darken-2 text-center">Drag & drop product image here</h5>
                                                    <div class="d-flex align-center">
                                                        <v-divider></v-divider>
                                                        <span class="mx-3">on</span>
                                                        <v-divider></v-divider>
                                                    </div>
                                                    <v-col cols="12" sm="6" lg="4" class="mx-auto">
                                                        <div class="d-flex justify-center">
                                                            <v-btn color="primary" class="font-600 text-capitalize ">Select Files</v-btn>
                                                        </div>
                                                    </v-col>
                                                        <div class="text-14 grey--text text--darken-2 text-center">Upload 280*280 image</div>
                                                    </v-col>
                                            </v-row>
                                        </div>
                                    </v-col>
                                    <v-col cols="12">
                                        <p class="text-14 mb-1">Description</p>
                                        <v-textarea  
                                            outlined
                                            hide-details
                                        >

                                        </v-textarea>

                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <p class="text-14 mb-1">Stock</p>
                                        <v-text-field
                                            outlined
                                            dense
                                            hide-details
                                            placeholder="Stock"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <p class="text-14 mb-1">Tags</p>
                                        <v-text-field
                                            outlined
                                            dense
                                            hide-details
                                            placeholder="Tags"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <p class="text-14 mb-1">Regular Price</p>
                                        <v-text-field
                                            outlined
                                            dense
                                            hide-details
                                            placeholder="Regular Price"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <p class="text-14 mb-1">Sale Price</p>
                                        <v-text-field
                                            outlined
                                            dense
                                            hide-details
                                            placeholder="Sale Price"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-btn 
                                            color="primary" 
                                            class="font-600 text-capitalize"
                                        >
                                            Save Products
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
        title: 'Edit Product'
    },
    data() {
        return{
            isSidebar: false,
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            
            
        }
    },
    
}
</script>
<style lang="scss" scoped>
    .edit-product-upload {
        border: 1px dashed rgb(218, 225, 231);
        border-radius: 8px;
    }
</style>

