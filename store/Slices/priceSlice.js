import { createSlice } from '@reduxjs/toolkit'
const initialState =  {
    value : 0
}

export const PriceSlice = createSlice({
    
    name: 'price',
    initialState,
    reducers : {
       increment : (state,action) => {
        state.value += action.payload;
       },
       decrement : (state,action) => {
        state.value -+ action.payload
       },
       zeroing : (state) => {
        state.value = 0;
       }
    }
});
export const { increment, decrement,zeroing } = PriceSlice.actions

export default PriceSlice.reducer