import { createSlice } from '@reduxjs/toolkit'
const initialState =  {

    info  : {

    }

}

export const PersonalInfoSlice= createSlice({
    
    name: 'personal',
    initialState,
    reducers : {
        UpdateInfo : (state ,action) => {
            state.info = action.payload
            
        },
       
       
    }
});
export const { UpdateInfo } = PersonalInfoSlice.actions

export default PersonalInfoSlice.reducer