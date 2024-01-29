// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import {configureStore} from "@reduxjs/toolkit";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// import {authSlice} from "@/redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {authSlice} from "../redux/authSlice.ts";
import {userSlice} from "../pages/request-handler/store/userSlice.ts";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;
