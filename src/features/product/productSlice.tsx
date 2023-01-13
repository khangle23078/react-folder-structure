import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAll } from '../../api/product';
import { IProduct } from '../../interfaces/Product';


interface productState {
   isLoading: boolean,
   isError: boolean,
   error: null,
   data: IProduct[],
   itemPerPage: number
   totalItem: number,
   totalPage: number,
}

const initialState = {
   isLoading: false,
   isError: false,
   error: null,
   data: [],
   itemPerPage: 0,
   totalItem: 0,
   totalPage: 0
} as productState

export const getProducts = createAsyncThunk(
   'products/getProducts', async (_, { rejectWithValue }) => {
      try {
         await getAll();
      } catch (error) {
         console.log(error);
         console.log(rejectWithValue(error));
      }
   }
)


const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder.addCase(getProducts.pending, ({ isLoading }) => {
         isLoading = true;
      })
      builder.addCase(getProducts.fulfilled, ({ isLoading, data }, { payload }) => {
         isLoading = false;
         // data = payload;
      })
      builder.addCase(getProducts.rejected, ({ isError, error, isLoading }, { payload }) => {
         isLoading = true;
         isError = true;
      })
   },
});

export const { } = productSlice.actions

export default productSlice.reducer