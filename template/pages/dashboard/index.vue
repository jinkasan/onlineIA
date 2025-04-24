<template>
  <v-container class="py-6">
      <v-row>
        <v-col cols="12">
            <div class="box-wrapper">
                <div class="box-overlay" :class="{'open': isSidebar}"  @click="isSidebar = !isSidebar"></div>
                <div class="box-sidebar pb-3 shadow-sm" :class="{'open': isSidebar}">
                    <DashboardSidebarTwo />
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
                            <img v-svg-inline class="icon mr-3" src="@/assets/images/icons/bag_filled.svg" alt="" />
                            <h2 class="mb-0">Dashboard</h2>
                        </div>
                       <div class="row">
                            <v-col 
                                cols="12" 
                                sm="6"
                                lg="4"
                                v-for="(dashBoardItem, index) in dashboardCard"
                                :key="index"
                            >
                                <base-card>
                                    <div class="px-5 py-9 text-center">
                                        <h4 class="font-600 grey--text text--darken-2 mb-2">{{dashBoardItem.titleOne}}</h4>
                                        <h1 class="grey--text text--darken-4 mb-1">{{dashBoardItem.titleTwo}}</h1>
                                        <p class="grey--text text--darken-2 mb-0">{{dashBoardItem.titleThree}}</p>
                                    </div>
                                </base-card>
                            </v-col>
                            <v-col cols="12" lg="8" sm="12">
                                 <base-card>
                                    <v-card-text class="text-16 font-600 grey--text text--darken-4">Sales</v-card-text>
                                    <div class="pa-5">
                                     
                                        <div id="chart">
                                            <client-only>
                                             <apexchart type="area" height="250" :options="chartOptions" :series="series"></apexchart>
                                            </client-only>
                                        </div>
                                        
                                    </div>
                                </base-card>
                            </v-col>
                            <v-col cols="12" lg="4" sm="12">
                                <base-card>
                                    <div class="pa-5">
                                        <h4>Top Countries</h4>

                                        <div class="d-flex justify-space-between align-center my-4">
                                            <div class="d-flex align-center">
                                                <v-avatar size="30" class="me-3">
                                                    <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" alt="avatar">
                                                </v-avatar>
                                                <span>United States</span>
                                            </div>
                                            <h5 class="text-16 font-600">$130</h5>
                                        </div>

                                        <div class="d-flex justify-space-between align-center my-4">
                                            <div class="d-flex align-center">
                                                <v-avatar size="30" class="me-3">
                                                    <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" alt="avatar">
                                                </v-avatar>
                                                <span>United Kingdom</span>
                                            </div>
                                            <h5 class="text-16 font-600">$110</h5>
                                        </div>

                                        
                                        <div class="d-flex justify-space-between align-center my-4">
                                            <div class="d-flex align-center">
                                                <v-avatar size="30" class="me-3">
                                                    <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg" alt="avatar">
                                                </v-avatar>
                                                <span>Canada</span>
                                            </div>
                                            <h5 class="text-16 font-600">$100</h5>
                                        </div>

                                        <div class="d-flex justify-space-between align-center my-4">
                                            <div class="d-flex align-center">
                                                <v-avatar size="30" class="me-3">
                                                    <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg" alt="avatar">
                                                </v-avatar>
                                                <span>India</span>
                                            </div>
                                            <h5 class="text-16 font-600">$80</h5>
                                        </div>
                                       
                                        <div class="d-flex justify-space-between align-center my-4">
                                            <div class="d-flex align-center">
                                                <v-avatar size="30" class="me-3">
                                                    <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/JO.svg" alt="avatar">
                                                </v-avatar>
                                                <span>Jordan</span>
                                            </div>
                                            <h5 class="text-16 font-600">$80</h5>
                                        </div>
                                        
                                        <div class="d-flex justify-space-between align-center my-4">
                                            <div class="d-flex align-center">
                                                <v-avatar size="30" class="me-3">
                                                    <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg" alt="avatar">
                                                </v-avatar>
                                                <span>Brazil</span>
                                            </div>
                                            <h5 class="text-16 font-600">$70</h5>
                                        </div>


                                    </div>
                                </base-card>
                            </v-col>
                       </div>
                       
                       
                    </div>
                </div>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

import DashboardSidebarTwo from "@/components/DashboardSidebarTwo.vue";
export default {
    components: {
        DashboardSidebarTwo,
        
           
    },
    head: {
        title: 'Dashboard'
    },
    data() {
        return{
            isSidebar: false,
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            options: {
                
                chart: {
                    height: 265,
                    type: 'area',
                    toolbar: {
                        show: false
                    }
                },
            },
            series: [{
                name: 'series1',
                data: [70, 60, 80, 51, 42, 109, 100, 50, 80]
            }],
            chartOptions: {
                 colors: ["#D23F57"],
                chart: {
                    height: 265,
                    type: 'area',
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                    },
                    stroke: {
                    curve: 'smooth'
                    },
                    grid: {
                    show: false,
                    },
                    xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z"],
                    labels: {
                        show: false
                    }
                    },
                    yaxis: {
                    show: false
                    },
                    markers: {
                    size: 4
                    },
                    stroke: {
                    width: 1
                    },
                    tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                    },
            
            },
            
            dashboardCard: [
                {
                    titleOne: 'Earnings (before taxes)',
                    titleTwo: '$30450.00',
                    titleThree: 'after associated vendor fees'
                },
                {
                    titleOne: 'Your balance',
                    titleTwo: '$4000.00',
                    titleThree: 'Will be processed on Feb 15, 2021'
                },
                {
                    titleOne: 'Pending Orders',
                    titleTwo: '08',
                    titleThree: '7/3/2020 - 8/1/2020'
                }
            ]
            
            
        }
    },
   
    
}
</script>


