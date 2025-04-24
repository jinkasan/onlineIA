const navigations = [
  {
    icon: require('~/assets/images/icons/dress.svg'),
    title: 'Fashion',
    href: '/fashion',
    menuComponent: 'MegaMenu1',
    menuData: {
      categories: [
        {
          title: 'Man Clothes',
          href: '/product/search/man-clothes',
          subCategories: [
            {
              title: 'Shirt',
              href: '/product/search/shirt',
              imgUrl: require('~/assets/images/products/categories/shirt.png'),
            },
            {
              title: 'T- shirt',
              href: '/product/search/t-shirt',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
            {
              title: 'Pant',
              href: '/product/search/pant',
              imgUrl: require('~/assets/images/products/categories/pant.png'),
            },
            {
              title: 'Underwear',
              href: '/product/search/underwear',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
          ],
        },
        {
          title: 'Accessories',
          href: '/product/search/accessories',
          subCategories: [
            {
              title: 'Belt',
              href: '/product/search/belt',
              imgUrl: require('~/assets/images/products/categories/belt.png'),
            },
            {
              title: 'Hat',
              href: '/product/search/Hat',
              imgUrl: require('~/assets/images/products/categories/hat.png'),
            },
            {
              title: 'Watches',
              href: '/product/search/Watches',
              imgUrl: require('~/assets/images/products/categories/watch.png'),
            },
            {
              title: 'Sunglasses',
              href: '/product/search/Sunglasses',
              imgUrl: require('~/assets/images/products/categories/sunglass.png'),
            },
          ],
        },
        {
          title: 'Shoes',
          href: '/product/search/shoes',
          subCategories: [
            {
              title: 'Sneakers',
              href: '/product/search/Sneakers',
              imgUrl: require('~/assets/images/products/categories/sneaker.png'),
            },
            {
              title: 'Sandals',
              href: '/product/search/Sandals',
              imgUrl: require('~/assets/images/products/categories/sandal.png'),
            },
            {
              title: 'Formal',
              href: '/product/search/Formal',
              imgUrl: require('~/assets/images/products/categories/shirt.png'),
            },
            {
              title: 'Casual',
              href: '/product/search/Casual',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
          ],
        },
        {
          title: 'Bags',
          href: '/product/search/bags',
          subCategories: [
            {
              title: 'Backpack',
              href: '/product/search/backpack',
              imgUrl: require('~/assets/images/products/categories/backpack.png'),
            },
            {
              title: 'Crossbody Bags',
              href: '/product/search/Crossbody Bags',
              imgUrl: require('~/assets/images/products/categories/bag.png'),
            },
            {
              title: 'Side Bags',
              href: '/product/search/Side Bags',
              imgUrl: require('~/assets/images/products/categories/mini-bag.png'),
            },
            {
              title: 'Slides',
              href: '/product/search/Slides',
              imgUrl: require('~/assets/images/products/categories/belt.png'),
            },
          ],
        },
        {
          title: 'Woman Clothes',
          href: '/product/search/woman-clothes',
          subCategories: [
            {
              title: 'Shirt',
              href: '/product/search/shirt',
              imgUrl: require('~/assets/images/products/categories/shirt.png'),
            },
            {
              title: 'T- shirt',
              href: '/product/search/t-shirt',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
            {
              title: 'Pant',
              href: '/product/search/pant',
              imgUrl: require('~/assets/images/products/categories/pant.png'),
            },
            {
              title: 'Underwear',
              href: '/product/search/underwear',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
          ],
        },
        {
          title: 'Accessories',
          href: '/product/search/accessories',
          subCategories: [
            {
              title: 'Belt',
              href: '/product/search/belt',
              imgUrl: require('~/assets/images/products/categories/belt.png'),
            },
            {
              title: 'Hat',
              href: '/product/search/Hat',
              imgUrl: require('~/assets/images/products/categories/hat.png'),
            },
            {
              title: 'Watches',
              href: '/product/search/Watches',
              imgUrl: require('~/assets/images/products/categories/watch.png'),
            },
            {
              title: 'Sunglasses',
              href: '/product/search/Sunglasses',
              imgUrl: require('~/assets/images/products/categories/sunglass.png'),
            },
          ],
        },
        {
          title: 'Shoes',
          href: '/product/search/shoes',
          subCategories: [
            {
              title: 'Sneakers',
              href: '/product/search/Sneakers',
              imgUrl: require('~/assets/images/products/categories/sneaker.png'),
            },
            {
              title: 'Sandals',
              href: '/product/search/Sandals',
              imgUrl: require('~/assets/images/products/categories/sandal.png'),
            },
            {
              title: 'Formal',
              href: '/product/search/Formal',
              imgUrl: require('~/assets/images/products/categories/shirt.png'),
            },
            {
              title: 'Casual',
              href: '/product/search/Casual',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
          ],
        },
        {
          title: 'Bags',
          href: '/product/search/bags',
          subCategories: [
            {
              title: 'Backpack',
              href: '/product/search/backpack',
              imgUrl: require('~/assets/images/products/categories/backpack.png'),
            },
            {
              title: 'Crossbody Bags',
              href: '/product/search/Crossbody Bags',
              imgUrl: require('~/assets/images/products/categories/bag.png'),
            },
            {
              title: 'Side Bags',
              href: '/product/search/Side Bags',
              imgUrl: require('~/assets/images/products/categories/mini-bag.png'),
            },
            {
              title: 'Slides',
              href: '/product/search/Slides',
              imgUrl: require('~/assets/images/products/categories/belt.png'),
            },
          ],
        },
      ],
      rightImage: {
        imgUrl: require('~/assets/images/promotion/offer-1.png'),
        href: '/sale-page-1',
      },
    },
  },
  {
    icon: require('~/assets/images/icons/laptop.svg'),
    title: 'Electronics',
    href: '/product/search/electronics',
    menuComponent: 'MegaMenu1',
    menuData: {
      categories: [
        {
          title: 'Man Clothes',
          href: '/product/search/man-clothes',
          subCategories: [
            {
              title: 'Shirt',
              href: '/product/search/shirt',
              imgUrl: require('~/assets/images/products/categories/shirt.png'),
            },
            {
              title: 'T- shirt',
              href: '/product/search/t-shirt',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
            {
              title: 'Pant',
              href: '/product/search/pant',
              imgUrl: require('~/assets/images/products/categories/pant.png'),
            },
            {
              title: 'Underwear',
              href: '/product/search/underwear',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
          ],
        },
        {
          title: 'Accessories',
          href: '/product/search/accessories',
          subCategories: [
            {
              title: 'Belt',
              href: '/product/search/belt',
              imgUrl: require('~/assets/images/products/categories/belt.png'),
            },
            {
              title: 'Hat',
              href: '/product/search/Hat',
              imgUrl: require('~/assets/images/products/categories/hat.png'),
            },
            {
              title: 'Watches',
              href: '/product/search/Watches',
              imgUrl: require('~/assets/images/products/categories/watch.png'),
            },
            {
              title: 'Sunglasses',
              href: '/product/search/Sunglasses',
              imgUrl: require('~/assets/images/products/categories/sunglass.png'),
            },
          ],
        },
        {
          title: 'Shoes',
          href: '/product/search/shoes',
          subCategories: [
            {
              title: 'Sneakers',
              href: '/product/search/Sneakers',
              imgUrl: require('~/assets/images/products/categories/sneaker.png'),
            },
            {
              title: 'Sandals',
              href: '/product/search/Sandals',
              imgUrl: require('~/assets/images/products/categories/sandal.png'),
            },
            {
              title: 'Formal',
              href: '/product/search/Formal',
              imgUrl: require('~/assets/images/products/categories/shirt.png'),
            },
            {
              title: 'Casual',
              href: '/product/search/Casual',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
          ],
        },
        {
          title: 'Bags',
          href: '/product/search/bags',
          subCategories: [
            {
              title: 'Backpack',
              href: '/product/search/backpack',
              imgUrl: require('~/assets/images/products/categories/backpack.png'),
            },
            {
              title: 'Crossbody Bags',
              href: '/product/search/Crossbody Bags',
              imgUrl: require('~/assets/images/products/categories/bag.png'),
            },
            {
              title: 'Side Bags',
              href: '/product/search/Side Bags',
              imgUrl: require('~/assets/images/products/categories/mini-bag.png'),
            },
            {
              title: 'Slides',
              href: '/product/search/Slides',
              imgUrl: require('~/assets/images/products/categories/belt.png'),
            },
          ],
        },
        {
          title: 'Woman Clothes',
          href: '/product/search/woman-clothes',
          subCategories: [
            {
              title: 'Shirt',
              href: '/product/search/shirt',
              imgUrl: require('~/assets/images/products/categories/shirt.png'),
            },
            {
              title: 'T- shirt',
              href: '/product/search/t-shirt',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
            {
              title: 'Pant',
              href: '/product/search/pant',
              imgUrl: require('~/assets/images/products/categories/pant.png'),
            },
            {
              title: 'Underwear',
              href: '/product/search/underwear',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
          ],
        },
        {
          title: 'Accessories',
          href: '/product/search/accessories',
          subCategories: [
            {
              title: 'Belt',
              href: '/product/search/belt',
              imgUrl: require('~/assets/images/products/categories/belt.png'),
            },
            {
              title: 'Hat',
              href: '/product/search/Hat',
              imgUrl: require('~/assets/images/products/categories/hat.png'),
            },
            {
              title: 'Watches',
              href: '/product/search/Watches',
              imgUrl: require('~/assets/images/products/categories/watch.png'),
            },
            {
              title: 'Sunglasses',
              href: '/product/search/Sunglasses',
              imgUrl: require('~/assets/images/products/categories/sunglass.png'),
            },
          ],
        },
        {
          title: 'Shoes',
          href: '/product/search/shoes',
          subCategories: [
            {
              title: 'Sneakers',
              href: '/product/search/Sneakers',
              imgUrl: require('~/assets/images/products/categories/sneaker.png'),
            },
            {
              title: 'Sandals',
              href: '/product/search/Sandals',
              imgUrl: require('~/assets/images/products/categories/sandal.png'),
            },
            {
              title: 'Formal',
              href: '/product/search/Formal',
              imgUrl: require('~/assets/images/products/categories/shirt.png'),
            },
            {
              title: 'Casual',
              href: '/product/search/Casual',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
          ],
        },
        {
          title: 'Bags',
          href: '/product/search/bags',
          subCategories: [
            {
              title: 'Backpack',
              href: '/product/search/backpack',
              imgUrl: require('~/assets/images/products/categories/backpack.png'),
            },
            {
              title: 'Crossbody Bags',
              href: '/product/search/Crossbody Bags',
              imgUrl: require('~/assets/images/products/categories/bag.png'),
            },
            {
              title: 'Side Bags',
              href: '/product/search/Side Bags',
              imgUrl: require('~/assets/images/products/categories/mini-bag.png'),
            },
            {
              title: 'Slides',
              href: '/product/search/Slides',
              imgUrl: require('~/assets/images/products/categories/belt.png'),
            },
          ],
        },
      ],
      bottomImage: {
        imgUrl: require('~/assets/images/promotion/offer-5.png'),
        href: '/',
      },
    },
  },
  {
    icon: require('~/assets/images/icons/motorbike.svg'),
    title: 'Bikes',
    href: '/product/search/bikes',
    menuComponent: 'MegaMenu2',
    menuData: [
      {
        icon: require('~/assets/images/icons/man.svg'),
        title: 'Man',
        href: '/product/search/fashion',
        megaMenu: 'MegaMenu1',
        menuData: {
          categories: [
            {
              title: 'Man Clothes',
              href: '/product/search/man-clothes',
              subCategories: [
                {
                  title: 'Shirt',
                  href: '/product/search/shirt',
                  imgUrl: require('~/assets/images/products/categories/shirt.png'),
                },
                {
                  title: 'T- shirt',
                  href: '/product/search/t-shirt',
                  imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
                },
                {
                  title: 'Pant',
                  href: '/product/search/pant',
                  imgUrl: require('~/assets/images/products/categories/pant.png'),
                },
                {
                  title: 'Underwear',
                  href: '/product/search/underwear',
                  imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
                },
              ],
            },
            {
              title: 'Accessories',
              href: '/product/search/accessories',
              subCategories: [
                {
                  title: 'Belt',
                  href: '/product/search/belt',
                  imgUrl: require('~/assets/images/products/categories/belt.png'),
                },
                {
                  title: 'Hat',
                  href: '/product/search/Hat',
                  imgUrl: require('~/assets/images/products/categories/hat.png'),
                },
                {
                  title: 'Watches',
                  href: '/product/search/Watches',
                  imgUrl: require('~/assets/images/products/categories/watch.png'),
                },
                {
                  title: 'Sunglasses',
                  href: '/product/search/Sunglasses',
                  imgUrl: require('~/assets/images/products/categories/sunglass.png'),
                },
              ],
            },
            {
              title: 'Shoes',
              href: '/product/search/shoes',
              subCategories: [
                {
                  title: 'Sneakers',
                  href: '/product/search/Sneakers',
                  imgUrl: require('~/assets/images/products/categories/sneaker.png'),
                },
                {
                  title: 'Sandals',
                  href: '/product/search/Sandals',
                  imgUrl: require('~/assets/images/products/categories/sandal.png'),
                },
                {
                  title: 'Formal',
                  href: '/product/search/Formal',
                  imgUrl: require('~/assets/images/products/categories/shirt.png'),
                },
                {
                  title: 'Casual',
                  href: '/product/search/Casual',
                  imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
                },
              ],
            },
            {
              title: 'Bags',
              href: '/product/search/bags',
              subCategories: [
                {
                  title: 'Backpack',
                  href: '/product/search/backpack',
                  imgUrl: require('~/assets/images/products/categories/backpack.png'),
                },
                {
                  title: 'Crossbody Bags',
                  href: '/product/search/Crossbody Bags',
                  imgUrl: require('~/assets/images/products/categories/bag.png'),
                },
                {
                  title: 'Side Bags',
                  href: '/product/search/Side Bags',
                  imgUrl: require('~/assets/images/products/categories/mini-bag.png'),
                },
                {
                  title: 'Slides',
                  href: '/product/search/Slides',
                  imgUrl: require('~/assets/images/products/categories/belt.png'),
                },
              ],
            },
          ],
        },
      },
      {
        icon: require('~/assets/images/icons/woman.svg'),
        title: 'Woman',
        href: '/product/search/electronics',
        megaMenu: 2,
      },
      {
        icon: require('~/assets/images/icons/baby-boy.svg'),
        title: 'Baby Boy',
        href: '/product/search/home&garden',
        megaMenu: 3,
      },
      {
        icon: require('~/assets/images/icons/baby-girl.svg'),
        title: 'Baby Girl',
        href: '/product/search/bikes',
        megaMenu: 'MegaMenu1',
      },
    ],
  },
  {
    icon: require('~/assets/images/icons/plant-pot.svg'),
    title: 'Home & Garden',
    href: '/product/search/home&garden',
    menuComponent: 'MegaMenu1',
    menuData: {
      categories: [
        {
          title: 'Man Clothes',
          href: '/product/search/man-clothes',
          subCategories: [
            {
              title: 'Shirt',
              href: '/product/search/shirt',
              imgUrl: require('~/assets/images/products/categories/shirt.png'),
            },
            {
              title: 'T- shirt',
              href: '/product/search/t-shirt',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
            {
              title: 'Pant',
              href: '/product/search/pant',
              imgUrl: require('~/assets/images/products/categories/pant.png'),
            },
            {
              title: 'Underwear',
              href: '/product/search/underwear',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
          ],
        },
        {
          title: 'Accessories',
          href: '/product/search/accessories',
          subCategories: [
            {
              title: 'Belt',
              href: '/product/search/belt',
              imgUrl: require('~/assets/images/products/categories/belt.png'),
            },
            {
              title: 'Hat',
              href: '/product/search/Hat',
              imgUrl: require('~/assets/images/products/categories/hat.png'),
            },
            {
              title: 'Watches',
              href: '/product/search/Watches',
              imgUrl: require('~/assets/images/products/categories/watch.png'),
            },
            {
              title: 'Sunglasses',
              href: '/product/search/Sunglasses',
              imgUrl: require('~/assets/images/products/categories/sunglass.png'),
            },
          ],
        },
        {
          title: 'Shoes',
          href: '/product/search/shoes',
          subCategories: [
            {
              title: 'Sneakers',
              href: '/product/search/Sneakers',
              imgUrl: require('~/assets/images/products/categories/sneaker.png'),
            },
            {
              title: 'Sandals',
              href: '/product/search/Sandals',
              imgUrl: require('~/assets/images/products/categories/sandal.png'),
            },
            {
              title: 'Formal',
              href: '/product/search/Formal',
              imgUrl: require('~/assets/images/products/categories/shirt.png'),
            },
            {
              title: 'Casual',
              href: '/product/search/Casual',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
          ],
        },
        {
          title: 'Bags',
          href: '/product/search/bags',
          subCategories: [
            {
              title: 'Backpack',
              href: '/product/search/backpack',
              imgUrl: require('~/assets/images/products/categories/backpack.png'),
            },
            {
              title: 'Crossbody Bags',
              href: '/product/search/Crossbody Bags',
              imgUrl: require('~/assets/images/products/categories/bag.png'),
            },
            {
              title: 'Side Bags',
              href: '/product/search/Side Bags',
              imgUrl: require('~/assets/images/products/categories/mini-bag.png'),
            },
            {
              title: 'Slides',
              href: '/product/search/Slides',
              imgUrl: require('~/assets/images/products/categories/belt.png'),
            },
          ],
        },
        {
          title: 'Woman Clothes',
          href: '/product/search/woman-clothes',
          subCategories: [
            {
              title: 'Shirt',
              href: '/product/search/shirt',
              imgUrl: require('~/assets/images/products/categories/shirt.png'),
            },
            {
              title: 'T- shirt',
              href: '/product/search/t-shirt',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
            {
              title: 'Pant',
              href: '/product/search/pant',
              imgUrl: require('~/assets/images/products/categories/pant.png'),
            },
            {
              title: 'Underwear',
              href: '/product/search/underwear',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
          ],
        },
        {
          title: 'Accessories',
          href: '/product/search/accessories',
          subCategories: [
            {
              title: 'Belt',
              href: '/product/search/belt',
              imgUrl: require('~/assets/images/products/categories/belt.png'),
            },
            {
              title: 'Hat',
              href: '/product/search/Hat',
              imgUrl: require('~/assets/images/products/categories/hat.png'),
            },
            {
              title: 'Watches',
              href: '/product/search/Watches',
              imgUrl: require('~/assets/images/products/categories/watch.png'),
            },
            {
              title: 'Sunglasses',
              href: '/product/search/Sunglasses',
              imgUrl: require('~/assets/images/products/categories/sunglass.png'),
            },
          ],
        },
        {
          title: 'Shoes',
          href: '/product/search/shoes',
          subCategories: [
            {
              title: 'Sneakers',
              href: '/product/search/Sneakers',
              imgUrl: require('~/assets/images/products/categories/sneaker.png'),
            },
            {
              title: 'Sandals',
              href: '/product/search/Sandals',
              imgUrl: require('~/assets/images/products/categories/sandal.png'),
            },
            {
              title: 'Formal',
              href: '/product/search/Formal',
              imgUrl: require('~/assets/images/products/categories/shirt.png'),
            },
            {
              title: 'Casual',
              href: '/product/search/Casual',
              imgUrl: require('~/assets/images/products/categories/t-shirt.png'),
            },
          ],
        },
        {
          title: 'Bags',
          href: '/product/search/bags',
          subCategories: [
            {
              title: 'Backpack',
              href: '/product/search/backpack',
              imgUrl: require('~/assets/images/products/categories/backpack.png'),
            },
            {
              title: 'Crossbody Bags',
              href: '/product/search/Crossbody Bags',
              imgUrl: require('~/assets/images/products/categories/bag.png'),
            },
            {
              title: 'Side Bags',
              href: '/product/search/Side Bags',
              imgUrl: require('~/assets/images/products/categories/mini-bag.png'),
            },
            {
              title: 'Slides',
              href: '/product/search/Slides',
              imgUrl: require('~/assets/images/products/categories/belt.png'),
            },
          ],
        },
      ],
    },
  },
  {
    icon: require('~/assets/images/icons/gift-1.svg'),
    title: 'Gifts',
    href: '/product/search/gifts',
    menuComponent: 'MegaMenu2',
    menuData: [
      {
        icon: require('~/assets/images/icons/dress.svg'),
        title: 'Fashion',
        href: '/product/search/fashion',
      },
      {
        icon: require('~/assets/images/icons/laptop.svg'),
        title: 'Electronics',
        href: '/product/search/electronics',
      },
      {
        icon: require('~/assets/images/icons/dress.svg'),
        title: 'Home & Garden',
        href: '/product/search/home&garden',
      },
      {
        icon: require('~/assets/images/icons/motorbike.svg'),
        title: 'Bikes',
        href: '/product/search/bikes',
      },
      {
        icon: require('~/assets/images/icons/gift-1.svg'),
        title: 'Gifts',
        href: '/product/search/gifts',
      },
      {
        icon: require('~/assets/images/icons/voice-recorder.svg'),
        title: 'Music',
        href: '/product/search/music',
      },
      {
        icon: require('~/assets/images/icons/make-up.svg'),
        title: 'Health & Beauty',
        href: '/product/search/health&beauty',
      },
      {
        icon: require('~/assets/images/icons/track.svg'),
        title: 'Pets',
        href: '/product/search/pets',
      },
      {
        icon: require('~/assets/images/icons/teddy-bear.svg'),
        title: 'Baby Toys',
        href: '/product/search/baby-toys',
      },
      {
        icon: require('~/assets/images/icons/food.svg'),
        title: 'Groceries',
        href: '/product/search/groceries',
      },
      {
        icon: require('~/assets/images/icons/car.svg'),
        title: 'Automotive',
        href: '/product/search/automotive',
      },
    ],
  },
  {
    icon: require('~/assets/images/icons/voice-recorder.svg'),
    title: 'Music',
    href: '/product/search/music',
    menuComponent: 'MegaMenu1',
  },
  {
    icon: require('~/assets/images/icons/make-up.svg'),
    title: 'Health & Beauty',
    href: '/product/search/health&beauty',
    menuComponent: 'MegaMenu1',
  },
  {
    icon: require('~/assets/images/icons/track.svg'),
    title: 'Pets',
    href: '/product/search/pets',
    menuComponent: 'MegaMenu1',
  },
  {
    icon: require('~/assets/images/icons/teddy-bear.svg'),
    title: 'Baby Toys',
    href: '/product/search/baby-toys',
    menuComponent: 'MegaMenu1',
  },
  {
    icon: require('~/assets/images/icons/food.svg'),
    title: 'Groceries',
    href: '/product/search/groceries',
  },
  {
    icon: require('~/assets/images/icons/car.svg'),
    title: 'Automotive',
    href: '/product/search/automotive',
  },
]

export default navigations
