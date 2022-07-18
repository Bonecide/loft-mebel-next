import { createSlice } from '@reduxjs/toolkit'
const initialState =  []

export const wishListSlice = createSlice({
    
    name: 'wishlist',
    initialState,
    reducers : {
        Addwish : (state ,action) => {
            state.push(action.payload)
            
        },
        deleteWish: (state ,action) => {
            state.splice (action.payload , 1)
        }
    }
});
export const { Addwish, deleteWish } = wishListSlice.actions

export default wishListSlice.reducer