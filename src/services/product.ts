import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { IProduct } from '../interfaces/Product'

export const productApi = createApi({
   reducerPath: 'productApi',
   baseQuery: fetchBaseQuery({
      baseUrl: '/products',
   }),
   endpoints: (builder) => ({
      getProducts: builder.query<IProduct[], null>({
         query: () => `/products`
      }),
      getProduct: builder.query<IProduct, string>({
         query: (id: string) => `/products/${id}`
      })
   })
})

