// state
export const state = () => ({
    products: [
        {
          id: 1,
          img: require("@/assets/images/products/flash-1.png"),
          title: 'Sneakers',
          category: 'Sneakers',
          amount: 300,
          rating: 3,
          qty: 0
        },
        {
          id: 2,
          img: require("@/assets/images/products/flash-2.png"),
          title: 'Watch',
          category: 'Watch',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 3,
          img: require("@/assets/images/products/flash-3.png"),
          title: 'Mobile',
          category: 'Mobile',
          amount: 100,
          rating: 4,
          qty: 0
        },
        {
          id: 4,
          img: require("@/assets/images/products/flash-4.png"),
          title: 'Zapple Watch',
          category: 'Watch',
          amount: 20,
          rating: 2,
          qty: 0
        },
        {
          id: 5,
          img: require("@/assets/images/products/flash-1.png"),
          title: 'Hike Sneakers',
          category: 'Sneakers',
          amount: 700,
          rating: 5,
          qty: 0
        },
        {
          id: 6,
          img: require("@/assets/images/products/flash-2.png"),
          title: 'Watch',
          category: 'Watch',
          amount: 250,
          rating: 4.5,
          qty: 0
        },
        {
          id: 7,
          img: require("@/assets/images/products/flash-3.png"),
          title: 'Mobile',
          category: 'Mobile',
          amount: 150,
          rating: 5,
          qty: 0
        },
        {
          id: 8,
          img: require("@/assets/images/products/flash-4.png"),
          title: 'Zapple Watch',
          category: 'watch',
          amount: 950,
          rating: 4,
          qty: 0
        },
        {
          id: 9,
          img: require("@/assets/images/products/Electronics/29.AppleEarphones.png"),
          title: 'Kony Earbuds',
          category: 'Accessories',
          amount: 150,
          rating: 3,
          qty: 0
        },
        {
          id: 10,
          img: require("@/assets/images/products/Electronics/30.Nokiaandroidone.png"),
          title: 'Mobile',
          category: 'Mobile',
          amount: 66,
          rating: 5,
          qty: 0
        },
        {
          id: 11,
          img: require("@/assets/images/products/Electronics/4.LumixDSLR.png"),
          title: 'Camera',
          category: 'Electronics',
          amount: 175,
          rating: 4,
          qty: 0
        },
        {
          id: 12,
          img: require("@/assets/images/products/Electronics/2.COSOR1.png"),
          title: 'Coffee Maker',
          category: 'Electronics',
          amount: 275,
          rating: 5,
          qty: 0
        },
        {
          id: 13,
          img: require("@/assets/images/products/Electronics/20.TascuigoAriadryLight.png"),
          title: 'Mini Fridge',
          category: 'Electronics',
          amount: 375,
          rating: 4.5,
          qty: 0
        },
        {
          id: 14,
          img: require("@/assets/images/products/Electronics/31.Symphonlights.png"),
          title: 'Mobile',
          category: 'mobile',
          amount: 655,
          rating: 5,
          qty: 0
        },
        {
          id: 15,
          img: require("@/assets/images/products/flash-3.png"),
          title: 'Smart Phone',
          category: 'Mobile',
          amount: 655,
          rating: 5,
          qty: 0
        },
        {
          id: 16,
          img: require("@/assets/images/products/bgmobile1.png"),
          title: 'Kamsung Phone',
          category: 'Mobile',
          amount: 865,
          rating: 1,
          qty: 0
        },
        {
          id: 17,
          img: require("@/assets/images/products/flash-1.png"),
          title: "Sneakers",
          category: 'Sneakers',
          amount: 250,
          rating: 5,
          qty: 0
        },
        {
          id: 18,
          img: require("@/assets/images/products/flash-2.png"),
          title: "Watch",
          category: 'Watch',
          amount: 250,
          rating: 5,
          qty: 0
        },
        {
          id: 19,
          img: require("@/assets/images/products/flash-3.png"),
          title: "Mobile",
          category: 'Mobile',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 20,
          img: require("@/assets/images/products/flash-4.png"),
          title: "Zapple Watch",
          category: 'Watch',
          amount: 550,
          rating: 5,
          qty: 0
        },
        {
          id: 21,
          img: require("@/assets/images/products/flash-1.png"),
          title: "Hike Sneakers",
          category: 'Sneakers',
          amount: 650,
          rating: 5,
          qty: 0
        },
        {
          id: 22,
          img: require("@/assets/images/products/flash-2.png"),
          title: "Watch",
          category: 'Watch',
          amount: 150,
          rating: 5,
          qty: 0
        },
        {
          id: 23,
          img: require("@/assets/images/products/flash-3.png"),
          title: "Mobile",
          category: 'Mobile',
          amount: 850,
          rating: 5,
          qty: 0
        },
        {
          id: 24,
          img: require("@/assets/images/products/flash-4.png"),
          title: "Zapple Watch",
          category: 'Watch',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 25,
          img: require("@/assets/images/products/Automotive/1.Ford2019.png"),
          title: "Lord 2019",
          category: 'Car',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 26,
          img: require("@/assets/images/products/Automotive/2.Audi2017.png"),
          title: "Budi 2017",
          category: 'Car',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 27,
          img: require("@/assets/images/products/Automotive/3.Tesla2015.png"),
          title: "Fesla 2015",
          category: 'Car',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 28,
          img: require("@/assets/images/products/Automotive/4.Porsche2018.png"),
          title: "Porsche 2018",
          category: 'Car',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 29,
          img: require("@/assets/images/products/Automotive/5.Ford2018.png"),
          title: "Ford 2018",
          category: 'Car',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 30,
          img: require("@/assets/images/products/Automotive/6.Ford2020.png"),
          title: "Ford 2020",
          category: 'Car',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 31,
          img: require("@/assets/images/products/Automotive/7.Mitsubishi2018.png"),
          title: "Mitsubishi 2018",
          category: 'Car',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 32,
          img: require("@/assets/images/products/Automotive/8.BMW2019.png"),
          title: "BMW 2019",
          category: 'Car',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 33,
          img: require("@/assets/images/products/Electronics/29.AppleEarphones.png"),
          title: "Kony Earbuds",
          category: 'Car',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 34,
          img: require("@/assets/images/products/Electronics/30.Nokiaandroidone.png"),
          title: "Mobile",
          category: 'Mobile',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 35,
          img: require("@/assets/images/products/Electronics/4.LumixDSLR.png"),
          title: "Camera",
          category: 'Accessories',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 36,
          img: require("@/assets/images/products/Electronics/2.COSOR1.png"),
          title: "Coffee Maker",
          category: 'Electronics',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 37,
          img: require("@/assets/images/products/Electronics/20.TascuigoAriadryLight.png"),
          title: "Mini Fridge",
          category: 'Electronics',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 38,
          img: require("@/assets/images/products/Electronics/31.Symphonlights.png"),
          title: "Mobile",
          category: 'Mobile',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 39,
          img: require("@/assets/images/products/flash-3.png"),
          title: "Smart Phone",
          category: 'Mobile',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 40,
          img: require("@/assets/images/products/bgmobile1.png"),
          title: "Kamsung Phone",
          category: 'Mobile',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 41,
          img: require("@/assets/images/products/Fashion/Accessories/7.PoliceGrayEyeglasses.png"),
          title: "Police Gray Eyeglasses",
          category: 'Accessories',
           amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 42,
          img: require("@/assets/images/products/Fashion/Accessories/8.RayBanMattBlack.png"),
          title: "Say Ban Matt Black",
          category: 'Accessories',
           amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 43,
          img: require("@/assets/images/products/Fashion/Accessories/9.RayBanBlack.png"),
          title: "Say Ban Black",
          category: 'Accessories',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 44,
          img: require("@/assets/images/products/Fashion/Accessories/10.RayBanOcean.png"),
          title: "Say Ban Ocean",
          category: 'Accessories',
          amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 45,
          img: require("@/assets/images/products/Fashion/Accessories/11.SunglassesCollection.png"),
          title: "Sun glasses Collection",
          category: 'Accessories',
           amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 46,
          img: require("@/assets/images/products/Fashion/Accessories/13.FossilWatchBrown.png"),
          title: "Ziaomi mi band2",
          category: 'Accessories',
           amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 47,
          img: require("@/assets/images/products/Fashion/Accessories/16.SkmeiWatchBlack.png"),
          title: "Kossil Watch Brown",
          category: 'Watch',
           amount: 350,
          rating: 5,
          qty: 0
        },
        {
          id: 48,
          img: require("@/assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png"),
          title: "MVMTM Watch Black",
          category: 'Watch',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 49,
          img: require("@/assets/images/products/Bikes/6.Honda2019.png"),
          title: "Tarz T3",
          category: 'Car',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 50,
          img: require("@/assets/images/products/Bikes/7.NinjaKawasaki2016.png"),
          title: "Xamaha R15 Black",
          category: 'Car',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 51,
          img: require("@/assets/images/products/Bikes/9.HeroHonda2017.png"),
          title: "Xamaha R15 Blue",
          category: 'Car',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 52,
          img: require("@/assets/images/products/Bikes/11.Kawasaki2020.png"),
          title: "Xevel 2020",
          category: 'Car',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 53,
          img: require("@/assets/images/products/Bikes/13.RoyalEnfield2010.png"),
          title: "Jackson TB1",
          category: 'Car',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 54,
          img: require("@/assets/images/products/Bikes/14.RoaylEnfield2011.png"),
          title: "Siri 2020",
          category: 'Car',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 55,
          img: require("@/assets/images/products/Bikes/15.PrimeXTZ.png"),
          title: "COSOR1",
          category: 'Car',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 56,
          img: require("@/assets/images/products/Bikes/16.RoyalEnfield2012.png"),
          title: "Ranasonic Charger",
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 57,
          img: require("@/assets/images/products/Bikes/18.NinjaKawasaki2019.png"),
          title: "Lumix DSlR",
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 58,
          img: require("@/assets/images/products/Bikes/20.CBR2022.png"),
          title: "Atech Cam 1080p",
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 59,
          img: require("@/assets/images/products/Bikes/21.TarzT3.png"),
          title: "Tony a9",
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 60,
          img: require("@/assets/images/products/Bikes/22.YamahaR15Black.png"),
          title: "beat sw3",
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 61,
          img: require("@/assets/images/products/Groceries/2.PremiumGroceryCollection.png"),
          title: 'Premium Grocery Collection',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 62,
          img: require("@/assets/images/products/Groceries/3.PremiumGroceryPack.png"),
          title: 'Premium Grocery',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 63,
          img: require("@/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png"),
          title: 'Sprinklers',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 64,
          img: require("@/assets/images/products/Groceries/6.IndianGroceryProductsPack.png"),
          title: 'Indian Grocery',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 65,
          img: require("@/assets/images/products/Groceries/2.PremiumGroceryCollection.png"),
          title: 'Premium Grocery Collection',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 66,
          img: require("@/assets/images/products/Groceries/3.PremiumGroceryPack.png"),
          title: 'Premium Grocery',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 67,
          img: require("@/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png"),
          title: 'Sprinklers',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 68,
          img: require("@/assets/images/products/Groceries/6.IndianGroceryProductsPack.png"),
          title: 'Indian Grocery',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 69,
          img: require("@/assets/images/products/Health&Beauty/24.LorealKidsExtraGentleShampoo.png"),
          title: 'Loreal Kid Extra',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 70,
          img: require("@/assets/images/products/Health&Beauty/19.PremiumLipstick.png"),
          title: 'Premium Lipstick',
          category: 'Makeovers ',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 71,
          img: require("@/assets/images/products/Health&Beauty/16.CaudalieHandandNailCream.png"),
          title: 'Nail Cream',
          category: 'Makeovers ',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 72,
          img: require("@/assets/images/products/Health&Beauty/7.VenusMakeupProduct.png"),
          title: 'Makeup Product',
          category: 'Makeovers',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 73,
          img: require("@/assets/images/products/Groceries/2.PremiumGroceryCollection.png"),
          title: 'Premium Grocery Collection',
          category: 'Grocery',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 74,
          img: require("@/assets/images/products/Groceries/3.PremiumGroceryPack.png"),
          title: 'Premium Grocery',
          category: 'Grocery ',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 75,
          img: require("@/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png"),
          title: 'Sprinklers',
          category: 'Grocery ',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 76,
          img: require("@/assets/images/products/Groceries/6.IndianGroceryProductsPack.png"),
          title: 'Indian Grocery',
          category: 'Grocery ',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 77,
          img: require("@/assets/images/products/Groceries/6.IndianGroceryProductsPack.png"),
          title: 'Grocery Package',
          category: 'Grocery ',
           amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 78,
          img: require("@/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png"),
          title: 'Cove Soap',
          category: 'Grocery ',
           amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 79,
          img: require("@/assets/images/products/Groceries/14.ACIProducts.png"),
          title: 'ACI Products',
          category: 'Grocery ',
           amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 80,
          img: require("@/assets/images/products/Groceries/26.MadinaSoaps.png"),
          title: 'Soaps Package',
          category: 'Grocery ',
           amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 81,
          img: require("@/assets/images/products/Groceries/22.OrganicCompanyProducts.png"),
          title: 'Organic Products',
          category: 'Grocery ',
           amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 82,
          img: require("@/assets/images/products/Groceries/16.ArtidoroRodriguezCoffee.png"),
          title: 'Rodriguez Coffe',
          category: 'Grocery ',
           amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 83,
          img: require("@/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png"),
          title: 'Cove Soap',
          category: 'Grocery ',
           amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 84,
          img: require("@/assets/images/products/Groceries/20.PremiumKitchenPack.png"),
          title: 'Premium Kitchen Pack',
          category: 'Grocery ',
           amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 85,
          img: require("@/assets/images/products/Groceries/21.MegaSardines.png"),
          title: 'Mega Sardines',
          category: 'Grocery ',
           amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 86,
          img: require("@/assets/images/products/Groceries/22.OrganicCompanyProducts.png"),
          title: 'Organic Products',
          category: 'Grocery ',
           amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 87,
          img: require("@/assets/images/products/Groceries/24.ParachuteCoconutOil.png"),
          title: 'Coconut Oil',
          category: 'Grocery ',
           amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 88,
          img: require("@/assets/images/products/Groceries/25.CafeTorrefactionFraiche.png"),
          title: 'Frachie',
          category: 'Grocery',
           amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 89,
          img: require("@/assets/images/products/Groceries/26.MadinaSoaps.png"),
          title: 'Soap',
          category: 'Grocery',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 90,
          img: require("@/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png"),
          title: 'Cove Soap',
          category: 'Grocery',
          amount: 200,
          rating: 5,
          qty: 0
        },
        {
          id: 91,
          img: require('@/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png'),
          title: 'Rolgate',
          amount: 200,
          rating: 5,
          qty: 0
          
      },
      {
          id: 92,
          img: require('@/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png'),
          title: 'Chat Masala',
          amount: 200,
          rating: 5,
          qty: 0
          
      },
      {
          id: 93,
          img: require('@/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png'),
          title: 'Candy Catch',
          amount: 200,
          rating: 5,
          qty: 0
          
      },
      {
          id: 94,
          img: require('@/assets/images/products/Groceries/11.TadkaGaramMasala.png'),
          title: 'Powder',
          amount: 200,
          rating: 5,
          qty: 0
          
      },
    ],  
    newProducts: [],
    category: [
      {
        checkbox: false,
        title: "Watch",
       
      },
      {
        checkbox: false,
        title: "Mobile",
        
      },
      {
        checkbox: false,
        title: "Sneakers",
       
      },
      {
        checkbox: false,
        title: "Accessories",
       
      },
      {
        checkbox: false,
        title: "Electronics",
       
      },
      {
        checkbox: false,
        title: "Car",
       
      },
      {
        checkbox: false,
        title: "Grocery",
       
      },
    ],
    ratings: [
      {
        id:11,
        rates: 5,
      },
      {
        id:12,
        rates: 4,
      },
      {
        id:13,
        rates: 3,
      },
      {
        id:14,
        rates: 2,
      },
      {
        id:15,
        rates: 1,
      },
    ],
  })
  
// getters 
export const getters = {
 
    getProducts : (state) => {
        return state.products
    },
    getCartProducts : state => state.newProducts,
    getCategory : state => state.category,
    getRatings : state => state.ratings,
        

}

// actions 
export const actions = {
    addCart ({ commit }, data) {
        commit('ADD_CART', data)
    },
    removeCart ({ commit }, data) {
        commit('REMOVE_CART', data)
    },
}

// mutations 
export const mutations = {
    ADD_CART (state, data) {  
        
       
        let productExist = false;

        state.newProducts = state.newProducts.map(product => {
          if(product.id == data.id){
            productExist = true
            product.qty += 1
          }
          return product
        })

        if(!productExist){
          data.qty += 1
          state.newProducts.push(data);
          
        }
      },
      REMOVE_CART (state, data) {
        data.qty -= 1
        if(data.qty == 0){
          let product = state.newProducts.filter(product => product.id != data.id) 
          state.newProducts = product
        }
        
      },
}