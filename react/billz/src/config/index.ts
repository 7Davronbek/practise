import axios from "axios";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {TOKEN} from "@/constants"

export default axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem(TOKEN)}`,
    }
});