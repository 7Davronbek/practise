import {create} from "zustand";
import {getUsers} from "../userService.ts";
import {toast} from "react-toastify";

interface IUserType {
    id: number,
    name: string
}

interface UserStore {
    isLoading: boolean,
    user: IUserType[] | null,
    getUsers: () => void
}

export const useUserStore = create<UserStore>((set) => ({
    isLoading: false,
    user: null,
    getUsers: async () => {
        set({isLoading: true})
        await getUsers({limit: 10, page: 1})
            .then((res) => {
                if (res.code !== "error") {
                    set({isLoading: false, user: res.data})
                } else {
                    toast.error("Internal error")
                }
            }).catch(() => {
                toast.error("Internal error")
            }).finally(() => {
                set({isLoading: false})
            })
    }
}))