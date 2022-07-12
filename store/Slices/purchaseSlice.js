import { createSlice } from '@reduxjs/toolkit'
const initialState =  []

export const purchaseSlice = createSlice({
    
    name: 'purchase',
    initialState,
    reducers : {
       addPurchase : (state,action) => {
        state.push(action.payload)
       },
       
    }
});
export const { addPurchase } = purchaseSlice.actions

export default purchaseSlice.reducer