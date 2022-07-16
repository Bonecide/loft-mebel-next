import { createSlice } from '@reduxjs/toolkit'
import item from '../../fake-data/catalog.json'
const initialState = { 
    data: item
}

export const catalogSlice = createSlice({
    
    name: 'catalog',
    initialState,
    reducers : {
        filterCatalog : (state ,action) => {
            state.data = action.payload
            
        },
        
       
    }
});
export const { filterCatalog } = catalogSlice.actions

export default catalogSlice.reducer