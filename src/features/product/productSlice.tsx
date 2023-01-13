import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAll } from '../../api/product';
import { IProduct } from '../../interfaces/Product';


interface productState {
   isLoading: boolean,
   isError: boolean,
   error: string | undefined,
   data: IProduct[],
   itemPerPage: number
   totalItem: number,
   totalPage: number,
}

const initialState = {
   isLoading: false,
   isError: false,
   error: '',
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
         rejectWithValue(error)
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
      builder.addCase(getProducts.fulfilled, ({ isLoading, data }, action) => {
         isLoading = false;
         // data = action.payload
      })
      builder.addCase(getProducts.rejected, ({ isError, error, isLoading }, action) => {
         isLoading = true;
         isError = true;
         error = action.error.message;
      })
   },
});

export const { } = productSlice.actions

export default productSlice.reducer