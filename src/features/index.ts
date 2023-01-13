import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { categoryApi } from "../services/category";
import { productApi } from "../services/product";
import categorySlice from "./category/categorySlice";
import orderSlice from "./order/orderSlice";
import productSlice from "./product/productSlice";
import sliderSlice from "./slider/sliderSlice";

export const store = configureStore({
   reducer: {
      product: productSlice,
      category: categorySlice,
      order: orderSlice,
      slider: sliderSlice,
      [categoryApi.reducerPath]: categoryApi.reducer,
      [productApi.reducerPath]: productApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
         categoryApi.middleware,
         productApi.middleware
      )
})

setupListeners(store.dispatch)