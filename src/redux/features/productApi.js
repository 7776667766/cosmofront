import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `http://localhost:7000/api/product/all`,
      providesTags:['Products']
    }),
    getProductType: builder.query({
      query: ({ type, query }) => `http://localhost:7000/api/product/${type}?${query}`,
      providesTags:['ProductType']
    }),
    getOfferProducts: builder.query({
      query: (type) => `http://localhost:7000/api/product/offer?type=${type}`,
      providesTags:['OfferProducts']
    }),
    getPopularProductByType: builder.query({
      query: (type) => `http://localhost:7000/api/product/popular/${type}`,
      providesTags:['PopularProducts']
    }),
    getTopRatedProducts: builder.query({
      query: () => `http://localhost:7000/api/product/top-rated`,
      providesTags:['TopRatedProducts']
    }),
    // get single product
    getProduct: builder.query({
      query: (id) => `http://localhost:7000/api/product/single-product/${id}`,
      providesTags: (result, error, arg) => [{ type: "Product", id: arg }],
      invalidatesTags: (result, error, arg) => [
        { type: "RelatedProducts", id:arg },
      ],
    }),
    // get related products
    getRelatedProducts: builder.query({
      query: (id) => `http://localhost:7000/api/product/related-product/${id}`,
      providesTags: (result, error, arg) => [
        { type: "RelatedProducts", id: arg },
      ],
    }),
  }),
});

// router.get('/offer', productController.getOfferTimerProducts);
// // top rated products


// router.get('/top-rated', productController.getTopRatedProducts);
// // reviews products
// router.get('/review-product', productController.reviewProducts);
// // get popular products by type
// router.get('/popular/:type', productController.getPopularProductByType);
// // get Related Products
// router.get('/related-product/:id', productController.getRelatedProducts);
// // get Single Product
// router.get("/single-product/:id", productController.getSingleProduct);
// // stock Product
// router.get("/stock-out", productController.stockOutProducts);
// // get Single Product
// router.patch("/edit-product/:id", productController.updateProduct);
// // get Products ByType
// router.get('/:type', productController.getProductsByType);
// // get Products ByType 
// router.delete('/:id', productController.deleteProduct);


export const {
  useGetAllProductsQuery,
  useGetProductTypeQuery,
  useGetOfferProductsQuery,
  useGetPopularProductByTypeQuery,
  useGetTopRatedProductsQuery,
  useGetProductQuery,
  useGetRelatedProductsQuery,
} = productApi;
