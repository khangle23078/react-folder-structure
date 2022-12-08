import { createSlice } from '@reduxjs/toolkit'

interface orderState {
   data: any[],
   itemPerPage: number
   totalItem: number,
   totalPage: number,
}

const initialState = {
   data: [],
   itemPerPage: 0,
   totalItem: 0,
   totalPage: 0
} as orderState


const orderSlice = createSlice({
   name: 'order',
   initialState,
   reducers: {}
});

export const { } = orderSlice.actions

export default orderSlice.reducer