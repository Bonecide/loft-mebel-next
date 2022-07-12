import { createSlice } from '@reduxjs/toolkit'
const initialState =  []

export const BasketSlice = createSlice({
    
    name: 'basket',
    initialState,
    reducers : {
        AddBasket : (state ,action) => {
            state.push(action.payload)
            
        },
        BasketDelete: (state ,action) => {
            state.splice (action.payload , 1)
        },
        PurchaseGoods: (state) => {
            state.splice(0,state.length);
        }
    }
});
export const { AddBasket, BasketDelete,PurchaseGoods } = BasketSlice.actions

export default BasketSlice.reducer