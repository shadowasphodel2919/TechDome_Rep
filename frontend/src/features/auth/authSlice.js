import { createSlice } from "@reduxjs/toolkit";

//authSlice for setting credentials and logOut method> basically will set the token 
const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null},
    reducers: {
        setCredentials: (state,action) => {
            const {accessToken} = action.payload
            state.token = accessToken
        }, 
        logOut: (state, action) => {
            state.token = null
        },
    }
})

export const {setCredentials, logOut} = authSlice.actions
export default authSlice.reducer
export const selectCurrentToken = (state) => state.auth.token