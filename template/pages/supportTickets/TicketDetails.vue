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
                                <img class="icon mr-3 primary--text" src="@/assets/images/icons/support.svg" alt="" />
                                <h2 class="mb-0">Support Ticket</h2>
                            </div>
                            <v-btn 
                                color="primary"
                                outlined
                                class="text-capitalize font-600"
                            >
                                Back to Support Tickets
                            </v-btn>
                       </div>
                      
                       
                       <div v-for="(n, index) in 4" :key="index">
                           <div class="d-flex mb-9">
                                <v-avatar size="48" class="mr-4">
                                    <img src="@/assets/images/faces/face-7.jpg" alt="avatar">
                                </v-avatar>
                                <div>
                                        <h5  class="font-600">Esther Howard</h5>
                                        <p class="mb-0 text-14 grey--text text--darken-1">02:39:PM | 14 Dec 2020</p>
                                        <div class="mt-4 grey lighten-2 pa-4 br-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit amet, aliquam massa tellus. Condimentum sit at pharetra, congue. Sit mattis amet nec pharetra odio. Interdum lorem vestibulum et amet et duis placerat. Ac mattis massa duis mi tellus sed. Mus eget in fames urna, ornare nunc, tincidunt tincidunt interdum. Amet aliquet pharetra rhoncus scelerisque pulvinar dictumst at sit. Neque tempor tellus ac nullam. Etiam massa tempor eu risus fusce aliquam.
                                        </div>
                                </div>
                            </div>
                       </div>

                       <v-sheet
                        color="grey lighten-2"
                        elevation="0"
                        width="100%"
                        height="1"
                      ></v-sheet>

                       <v-textarea
                        outlined
                        name="input-7-4"
                        class="mt-8"
                        background-color="white"
                        ></v-textarea>
                        <div class="d-flex justify-end">
                            <v-btn color="primary" class="font-600 text-capitalize">
                                 Post Message
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DashbordSidebar from "@/components/DashboardSidebar.vue";
export default {
    components: {
        DashbordSidebar
    },
    head: {
        title: 'Ticket Details'
    },
    data() {
        return{
            isSidebar: false,
           
            
            
        }
    }
       
}
</script>
