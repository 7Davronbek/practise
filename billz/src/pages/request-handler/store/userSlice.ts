import {createSlice} from "@reduxjs/toolkit";

interface IUserType {
    id: number,
    name: string
}

interface IUserState {
    isLoading: boolean,
    user: IUserType[] | null,
    error: string
}

const initialState: IUserState = {
    isLoading: false,
    user: null,
    error: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})