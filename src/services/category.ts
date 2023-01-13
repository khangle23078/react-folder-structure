import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const categoryApi = createApi({
   reducerPath: 'categoryApi',
   baseQuery: fetchBaseQuery({
      baseUrl: '/category'
   }),
   endpoints : (builder) => ({
      
   })
})