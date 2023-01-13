import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { IProduct } from '../interfaces/Product'

export const productApi = createApi({
   reducerPath: 'productApi',
   baseQuery: fetchBaseQuery({
      baseUrl: '/products',
      prepareHeaders(headers, api) {
         const token = JSON.stringify(localStorage.getItem('accessToken')) || 'example token';
         if (token) {
            headers.set('Authorization', `Bearer ${token}`)
         }
      },
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


