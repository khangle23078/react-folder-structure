import { createSlice } from '@reduxjs/toolkit'
import { ICategory } from '../../interfaces/Category';

interface categoryState {
   data: ICategory[],
   itemPerPage: number
   totalItem: number,
   totalPage: number,
}

const initialState = {
   data: [],
   itemPerPage: 0,
   totalItem: 0,
   totalPage: 0
} as categoryState

const categorySlice = createSlice({
   name: 'category',
   initialState,
   reducers: {}
});

export const { } = categorySlice.actions

export default categorySlice.reducer