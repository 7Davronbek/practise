// @ts-ignore
import {TOKEN} from "@/constant";
import {createSlice} from "@reduxjs/toolkit";

interface IAuthState {
    isLoading: boolean,
    user: string,
    error: string
}

const initialState: IAuthState = {
    isLoading: false,
    user: localStorage.getItem(TOKEN) || "",
    error: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = "";
            localStorage.removeItem(TOKEN)
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase()
    // }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;