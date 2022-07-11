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
        state.value -= action.payload;
       }
    }
});
export const { increment, decrement } = PriceSlice.actions

export default PriceSlice.reducer