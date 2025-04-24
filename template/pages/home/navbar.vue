<template>
    <div class="ecom-dropdownmenu pt-0 d-none d-lg-block">
                <ul  class="py-3 mb-0">
                    <li v-for="(nav, index) in navigations" :key="index">
                        <a href="#">
                            <v-avatar tile size="20" class="mr-2">
                                <img v-svg-inline class="icon" :src="nav.icon" alt="">
                            </v-avatar>
                            <p class="m-0 mb-0 flex-grow-1"> {{nav.title}}</p>
                            <v-icon v-if="nav.menuData">mdi-chevron-right</v-icon>
                        </a>
                        
                        <div v-if="nav.menuComponent == 'MegaMenu2' && nav.menuData"  class="sub-menu">
                            <ul class="py-3">
                                <li v-for="(navTwo, index) in nav.menuData" :key="index">
                                    <a href="#" class="">
                                        <v-avatar tile size="20" class="mr-2">
                                            <img v-svg-inline class="icon" :src="navTwo.icon" alt="">
                                        </v-avatar>
                                        <p class="mb-0  flex-grow-1"> {{navTwo.title}}</p>
                                        <v-icon v-if="navTwo.menuData">mdi-chevron-right</v-icon>
                                    </a>
                                    <div  class="sub-menu">
                                        <div v-if="navTwo.menuData && navTwo.menuData.categories" class="mega-menu">
                                            <div class="d-flex justify-space-between flex-wrap mb-4">
                                                <div v-for="(navThree, index) in navTwo.menuData.categories" :key="index">
                                                    <h6 class="fw-semibold mb-3">{{navThree.title}}</h6>
                                                    <ul  v-for="(navFour, index) in navThree.subCategories" :key="index"> 
                                                        <li class="">
                                                            <a href="#">{{navFour.title}}</a>
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            
                                            </div>
                                            
                                            <div class="d-flex justify-content-between">
                                                <v-img :src="require('~/assets/images/promotion/offer-5.png')" cover></v-img>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" class="">
                                        <v-avatar tile size="20" class="mr-2">
                                            <img v-svg-inline class="icon" src="@/assets/images/icons/man.svg" alt="">
                                        </v-avatar>
                                        <p class="mb-0  flex-grow-1"> Man</p>
                                        <v-icon>mdi-chevron-right</v-icon>
                                    </a>
                                    <div class="sub-menu">
                                        <div class="mega-menu">
                                            <div class="d-flex justify-space-between flex-wrap mb-4">
                                            <div>
                                                <h6 class="fw-semibold mb-3">Cloths</h6>
                                                <ul>
                                                    <li class="">
                                                        <a href="#">Shirt</a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#">T-Shirt</a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#">Pant</a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#">Jeans</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h6 class="fw-semibold mb-3">Accessories</h6>
                                                <ul>
                                                <li class="">
                                                    <a href="#">Belt</a>
                                                </li>
                                                <li class="">
                                                    <a href="#">Hat</a>
                                                </li>
                                                <li class="">
                                                    <a href="#">Watches</a>
                                                </li>
                                                <li class="">
                                                    <a href="#">Sunglasses</a>
                                                </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h6 class="fw-semibold mb-3">Shoes</h6>
                                                <ul>
                                                <li class="">
                                                    <a href="#">Sneakers</a>
                                                </li>
                                                <li class="">
                                                    <a href="#">Sandals</a>
                                                </li>
                                                <li class="">
                                                    <a href="#">Formal</a>
                                                </li>
                                                <li class="">
                                                    <a href="#">Casual</a>
                                                </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h6 class="fw-semibold mb-3">Bags</h6>
                                                <ul>
                                                <li class="">
                                                    <a href="#">Backpack</a>
                                                </li>
                                                <li class="">
                                                    <a href="#">Crossbody Bags</a>
                                                </li>
                                                <li class="">
                                                    <a href="#">Slide Bags</a>
                                                </li>
                                                <li class="">
                                                    <a href="#">Slides</a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                            
                                            <div class="d-flex justify-content-between">
                                                <v-img :src="require('~/assets/images/promotion/offer-5.png')" cover></v-img>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            
                            
                            
                            </ul>
                        </div>
                        
                        <!-- another-conditions  -->
                        <div v-else-if="nav.menuComponent == 'MegaMenu1' && nav.menuData && nav.menuData.categories" class="sub-menu">
                            <div class="mega-menu">
                                <div class="row flex-wrap mb-4">
                                    <div class="col-md-3" v-for="(navTwo, index) in nav.menuData.categories" :key="index">
                                        <h6 class="fw-semibold mb-3">{{navTwo.title}}</h6>
                                        <ul>
                                            <li v-for="(navThree, index) in navTwo.subCategories" :key="index" class="">
                                                <a href="#">{{navThree.title}}</a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                
                                </div>
                                
                                <div class="d-flex justify-content-between">
                                    <v-img :src="require('~/assets/images/promotion/offer-5.png')" cover></v-img>
                                </div>
                            </div>
                        </div>
                        
                    </li>
                   
                    
                </ul>
            </div>
    
</template>
<script>
import navigations from "@/assets/data/navigations";
export default {
    data () {
        return {
            navigations,
            menu: [
                {
                    id: 1,
                    name: 'Fashion',
                    icon: require('@/assets/images/icons/dress.svg'),
                    dropdownIcon: true,

                    subMenu: [
                       {
                         id: 1,
                         name: 'Man',
                         icon: require('@/assets/images/icons/man.svg'),
                         dropdownIcon: true,
                         megaMenu: [
                            {
                                title: 'Clothes',
                                subCategories: [
                                    {
                                        title: "Shirt",
                                        href: "/product/search/shirt",
                                        imgUrl: "/assets/images/products/categories/shirt.png",
                                    },
                                    {
                                        title: "T- shirt",
                                        href: "/product/search/t-shirt",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    },
                                    {
                                        title: "Pant",
                                        href: "/product/search/pant",
                                        imgUrl: "/assets/images/products/categories/pant.png",
                                    },
                                    {
                                        title: "Underwear",
                                        href: "/product/search/underwear",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    }
                                ]
                            },
                            {
                                title: 'Accessories',
                                subCategories: [
                                    {
                                        title: "Shirt",
                                        href: "/product/search/shirt",
                                        imgUrl: "/assets/images/products/categories/shirt.png",
                                    },
                                    {
                                        title: "T-shirt Two",
                                        href: "/product/search/t-shirt",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    },
                                    {
                                        title: "Pant",
                                        href: "/product/search/pant",
                                        imgUrl: "/assets/images/products/categories/pant.png",
                                    },
                                    {
                                        title: "Underwear",
                                        href: "/product/search/underwear",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    }
                                ]
                            },
                            {
                                title: 'Accessories',
                                subCategories: [
                                    {
                                        title: "Shirt",
                                        href: "/product/search/shirt",
                                        imgUrl: "/assets/images/products/categories/shirt.png",
                                    },
                                    {
                                        title: "T-shirt Two",
                                        href: "/product/search/t-shirt",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    },
                                    {
                                        title: "Pant",
                                        href: "/product/search/pant",
                                        imgUrl: "/assets/images/products/categories/pant.png",
                                    },
                                    {
                                        title: "Underwear",
                                        href: "/product/search/underwear",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    }
                                ]
                            },
                            {
                                title: 'Accessories',
                                subCategories: [
                                    {
                                        title: "Shirt",
                                        href: "/product/search/shirt",
                                        imgUrl: "/assets/images/products/categories/shirt.png",
                                    },
                                    {
                                        title: "T-shirt Two",
                                        href: "/product/search/t-shirt",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    },
                                    {
                                        title: "Pant",
                                        href: "/product/search/pant",
                                        imgUrl: "/assets/images/products/categories/pant.png",
                                    },
                                    {
                                        title: "Underwear",
                                        href: "/product/search/underwear",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    }
                                ]
                            }
                         ]
                       },
                       {
                         id: 2,
                         name: 'Woman',
                         icon: require('@/assets/images/icons/woman.svg'),
                         dropdownIcon: false,
                       }
                    ]
                },
                {
                    id: 1,
                    name: 'Groccery',
                    icon: require('@/assets/images/icons/dress.svg'),
                    dropdownIcon: true,
                    megaMenu: [
                            {
                                title: 'Clothes',
                                subCategories: [
                                    {
                                        title: "Shirt",
                                        href: "/product/search/shirt",
                                        imgUrl: "/assets/images/products/categories/shirt.png",
                                    },
                                    {
                                        title: "T- shirt",
                                        href: "/product/search/t-shirt",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    },
                                    {
                                        title: "Pant",
                                        href: "/product/search/pant",
                                        imgUrl: "/assets/images/products/categories/pant.png",
                                    },
                                    {
                                        title: "Underwear",
                                        href: "/product/search/underwear",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    }
                                ]
                            },
                            {
                                title: 'Accessories',
                                subCategories: [
                                    {
                                        title: "Shirt",
                                        href: "/product/search/shirt",
                                        imgUrl: "/assets/images/products/categories/shirt.png",
                                    },
                                    {
                                        title: "T-shirt Two",
                                        href: "/product/search/t-shirt",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    },
                                    {
                                        title: "Pant",
                                        href: "/product/search/pant",
                                        imgUrl: "/assets/images/products/categories/pant.png",
                                    },
                                    {
                                        title: "Underwear",
                                        href: "/product/search/underwear",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    }
                                ]
                            },
                            {
                                title: 'Accessories',
                                subCategories: [
                                    {
                                        title: "Shirt",
                                        href: "/product/search/shirt",
                                        imgUrl: "/assets/images/products/categories/shirt.png",
                                    },
                                    {
                                        title: "T-shirt Two",
                                        href: "/product/search/t-shirt",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    },
                                    {
                                        title: "Pant",
                                        href: "/product/search/pant",
                                        imgUrl: "/assets/images/products/categories/pant.png",
                                    },
                                    {
                                        title: "Underwear",
                                        href: "/product/search/underwear",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    }
                                ]
                            },
                            {
                                title: 'Accessories',
                                subCategories: [
                                    {
                                        title: "Shirt",
                                        href: "/product/search/shirt",
                                        imgUrl: "/assets/images/products/categories/shirt.png",
                                    },
                                    {
                                        title: "T-shirt Two",
                                        href: "/product/search/t-shirt",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    },
                                    {
                                        title: "Pant",
                                        href: "/product/search/pant",
                                        imgUrl: "/assets/images/products/categories/pant.png",
                                    },
                                    {
                                        title: "Underwear",
                                        href: "/product/search/underwear",
                                        imgUrl: "/assets/images/products/categories/t-shirt.png",
                                    }
                                ]
                            }
                         ]
                }
            ]
        }
    }
    
}
</script>
<style lang="scss" scoped>
$primary-500: #D23F57;
$primary-100: #FCE9EC;
$box-shadow: 0px 4px 16px rgb(43 52 69 / 10%);
$secondary: #2B3445;
$gray-900: #2B3445;


// ecomdropdown 
.ecom-dropdownmenu {
  padding-top: 10px;
  
  &.ecom-dropdownmenu-fixed{
      
    display: none;
    &.open {
      display: block;
    }
  }
  ul {
    background-color: rgb(255, 255, 255);
    
    padding: 0;
    width: 250px;
    max-width: 250px;
    box-shadow: $box-shadow;
    border: none;
    border-radius: 0.5rem;
    &.disable {
      li {
        // background-color: $gray-100;
        a{
          font-weight: bold;
          
         
        }
      }
    }
    li {
      position: relative;
      list-style-type: none;
      a {
        display: flex;
        align-items: center;
        justify-content: space-between; 
        padding: 0.594rem 1.25rem;
        text-decoration: none;
        color: $gray-900;
      }
      &:hover > {
        a {
          background-color: $primary-100;
          color: $primary-500;
          i{
              color: $primary-500;
          }
        }
        .sub-menu {
          display: block;
          
        }
      }
      // child ul 
      .sub-menu {
        position: absolute;
        left: 100%;
        top: 0;
        width: 100%;
        padding-left: 1rem;
        display: none;
        z-index: 10;
        ul{
          background-color: white;
          padding: 0;
          border-radius: 0.5rem;
          box-shadow: $box-shadow;
          width: 100%;
          li {
            list-style-type: none;
          }
        }

        .mega-menu {
          min-width: 600px;
          box-shadow: $box-shadow;
          padding: 1.5625rem 1.25rem;
          border-radius: 0.5rem;
          background-color: white;
          ul {
            border: none;
            box-shadow: none;
            li {
              margin-bottom: 0.625rem;
              a {
                padding: 0;
                margin: 0;
              }
              &:hover {
                a {
                  background-color: white;
                  color: $primary-500;
                 
                }
              }
            }
          }
        }
        
      }
    }

  }
}
</style>