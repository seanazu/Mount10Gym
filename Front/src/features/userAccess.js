import {createSlice } from '@reduxjs/toolkit'

const initalValue = {
    loggedIn:false,
    seconds:0,
    minutes:0,
    key:'', 
    username:''
}

export const userAccessSlice = createSlice({
    name:'userAccess',
    initialState:{value:initalValue},
    reducers:{
        login:(state,action) =>{
            state.value.loggedIn = true;
            state.value.username = action.payload.username;
            state.value.key = action.payload.key;
        },
        logout:(state, action) =>{
            state.value.loggedIn = false;
            state.value.username = '';
            state.value.key = '';
        }
    }

})

export const {login, logout} = userAccessSlice.actions;

export default userAccessSlice.reducer;