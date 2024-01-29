import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUsers} from "../userService.ts";
import {toast} from "react-toastify";
import {AxiosError} from "axios";

interface IUserType {
    id: number,
    name: string
}

interface IUserState {
    isLoading: boolean,
    user: IUserType[],
    error: string
}

const initialState: IUserState = {
    isLoading: false,
    user: [],
    error: ""
}

export const getUsersJson = createAsyncThunk('user/getUsers', async () => {
    try {
        const response = await getUsers({});
        if(response.code === "error") {
            toast.error("error")
            throw new AxiosError("Something went wrong");
        }
        return  response?.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersJson.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUsersJson.fulfilled, (state, {payload}) => {
            state.user = payload;
            state.isLoading = false;
        });
        builder.addCase(getUsersJson.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message ?? 'An error occurred';
        })
    }
})

// const getUsersJson = createAsyncThunk("user/getUsers", async () => {
//     try {
//       await getUsers({})
//     } catch (err) {
//         console.log(err)
//     }
// });

export const userAction = {
    ...userSlice.actions,
    getUsersJson
}

export default userSlice.reducer;