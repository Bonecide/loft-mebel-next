import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value : []
}

export const purchaseSlice = createSlice({
    
    name: 'purchase',
    initialState,
    reducers : {
       addPurchase : (state,action) => {
        state.value.push (action.payload)
       },
       
    }
});
export const { addPurchase } = purchaseSlice.actions

export default purchaseSlice.reducer