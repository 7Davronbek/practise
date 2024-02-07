import {create} from "zustand";
import axios from "axios";

interface ICommentType {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

interface CommentStore {
    isLoading: boolean,
    error?: string,
    comment: ICommentType[] | null,
    getComments: () => void
}

export const useCommentStore = create<CommentStore>((set) => ({
    isLoading: true,
    error: "",
    comment: null,
    getComments: async () => {
        try {
            set({isLoading: true})
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/comments")
            set({isLoading: false, comment: data})
        } catch (err) {
            console.log(err)
            set({error: "Bad request", isLoading: false})
        }
    }
}));