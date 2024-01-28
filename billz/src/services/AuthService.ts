// @ts-ignore
import axios from "@/config";
import {IUserType} from "../interface";

class AuthService {
    async login() {
        return await axios.get<IUserType>("/auth/login")
    }
}

export default new AuthService();