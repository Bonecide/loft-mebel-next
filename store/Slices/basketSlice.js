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
        Purchase: (state) => {
            state.splice(0,arr.length);
        }
    }
});
export const { AddBasket, BasketDelete,Purchase } = BasketSlice.actions

export default BasketSlice.reducer