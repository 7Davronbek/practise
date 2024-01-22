import {configureStore} from "@reduxjs/toolkit";
// @ts-ignore
// import {authSlice} from "@/redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {authSlice} from "../redux/authSlice.ts";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;
