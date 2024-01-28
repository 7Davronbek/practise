import axios from "axios";
import {requestHandler} from "../../hooks/requestHandler.ts";

interface User {
    id: number,
    name: string
}

interface GetUserParams {
    limit?: number,
    page?: number
}

export const getUsers = requestHandler<GetUserParams, User[]>((params) =>
    axios.get("https://jsonplaceholder.typicode.com/users", {params})
)
