import home_1 from "@assets/img/menu/menu-home-1.jpg";
import home_2 from "@assets/img/menu/menu-home-2.jpg";
import home_3 from "@assets/img/menu/menu-home-3.jpg";
import home_4 from "@assets/img/menu/menu-home-4.jpg";

const menu_data = [
  {
    id: 2,
    products: true,
    title: "Products",
    link: "/shop",
    product_pages: [
      {
        title: "Shop Page",
        link: "/shop",
        mega_menus: [
          { title: "Categories", link: "/shop-category" },
          { title: "All Products", link: "/shop" },
        ],
      },
      {
        title: "Products",
        link: "/product-details",
        mega_menus: [
          { title: "Best Selling", link: "/product-details-video" },
          { title: "Bundles and Deals", link: "/product-details-countdown" },
          {
            title: "Gifts and free Delivery",
            link: "/product-details-swatches",
          },
        ],
      },
    ],
  },

  {
    id: 5,
    sub_menu: true,
    title: "Catagories",
    link: "/catagories",
    sub_menus: [
      { title: "Nails", link: "/blog" },
      { title: "Primer and Fixers", link: "/blog-grid" },
      { title: "Sponges and Beauty Blenders", link: "/blog-list" },
      { title: "Face Contouring", link: "/blog-details" },
      { title: "Face Makeup", link: "/blog-details-2" },
      { title: "Lip Makeup", link: "/blog-details-2" },
      { title: "Brushes", link: "/blog-details-2" },
      { title: "Kits", link: "/blog-details-2" },
      { title: "Makeup Remover", link: "/blog-details-2" },
    ],
  },
  {
    id: 6,
    single_link: true,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;

// mobile_menu
export const mobile_menu = [
  {
    id: 1,
    homes: true,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    sub_menu: true,
    title: "Products",
    link: "/shop",
    sub_menus: [
      { title: "Best Selling", link: "/product-details-video" },
      { title: "Bundles and Deals", link: "/product-details-countdown" },
      { title: "Gifts and free Delivery", link: "/product-details-swatches" },
    ],
  },
  {
    id: 3,
    sub_menu: true,
    title: "Catagories",
    link: "/catagories",
    sub_menus: [
      { title: "Nails", link: "/blog" },
      { title: "Primer and Fixers", link: "/blog-grid" },
      {
        title: "Sponges and Beauty Blenders",
        link: "/shop?category=sponges-and-beauty-blenders",
      },
      { title: "Face Contouring", link: "/blog-details" },
      { title: "Face Makeup", link: "/blog-details-2" },
      { title: "Lip Makeup", link: "/blog-details-2" },
      { title: "Brushes", link: "/blog-details-2" },
      { title: "Kits", link: "/blog-details-2" },
      { title: "Makeup Remover", link: "/blog-details-2" },
    ],
  },

  {
    id: 4,
    sub_menu: true,
    title: "Cart",
    link: "/cart",
    sub_menus: [
      { title: "Shopping Cart", link: "/cart" },
      { title: "Compare", link: "/compare" },
      { title: "Wishlist", link: "/wishlist" },
      { title: "Checkout", link: "/checkout" },
      { title: "My account", link: "/profile" },
    ],
  },
  // {
  //   id: 4,
  //   sub_menu: true,
  //   title: 'More Pages',
  //   link: '/login',
  //   sub_menus: [
  //     { title: 'Login', link: '/login' },
  //     { title: 'Register', link: '/register' },
  //     { title: 'Forgot Password', link: '/forgot' },
  //     { title: '404 Error', link: '/404' },
  //   ],
  // },
  // {
  //   id: 4,
  //   single_link: true,
  //   title: 'Coupons',
  //   link: '/coupon',
  // },
  // {
  //   id: 5,
  //   sub_menu: true,
  //   title: 'Blog',
  //   link: '/blog',
  //   sub_menus: [
  //     { title: 'Blog Standard', link: '/blog' },
  //     { title: 'Blog Grid', link: '/blog-grid' },
  //     { title: 'Blog List', link: '/blog-list' },
  //     { title: 'Blog Details', link: '/blog-details' },
  //     { title: 'Blog Details Full Width', link: '/blog-details-2' },
  //   ]
  // },
  // {
  //   id: 5,
  //   single_link: true,
  //   title: 'Contact',
  //   link: '/contact',
  // },
];


