// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import axios from "@/config";
import {IUserType} from "../interface";

class AuthService {
    async login() {
        return await axios.get<IUserType>("/auth/login")
    }
}

export default new AuthService();