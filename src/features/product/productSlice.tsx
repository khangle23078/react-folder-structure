import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAll } from '../../api/product';
import { IProduct } from '../../interfaces/Product';

interface productState {
   loading: boolean,
   error: boolean,
   data: IProduct[],
   itemPerPage: number
   totalItem: number,
   totalPage: number,
}

const initialState = {
   loading: true,
   error: false,
   data: [],
   itemPerPage: 0,
   totalItem: 0,
   totalPage: 0
} as productState

export const getProducts = createAsyncThunk(
   'products/getProductsList', async () => {
      try {
         await getAll();
      } catch (error) {
         console.log(error);
      }
   }
)


const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder.addCase(getProducts.pending, ({ loading }) => {
         loading = true;
      })
      builder.addCase(getProducts.fulfilled, ({ loading, data }, { payload }) => {
         loading = false;
         // data = payload;
      })
      builder.addCase(getProducts.rejected, ({ error, loading }, { payload }) => {
         loading = true;
         error = true;
      })
   },
});

export const { } = productSlice.actions

export default productSlice.reducer