import axios, { ResponseType } from "axios";
import { LoginFormData } from "../Components/Content/AuthForms/LoginForm/LoginForm";
import { RegistrationFormData } from "../Components/Content/AuthForms/RegistrationForm/RegistrationForm";
import fetchURL from "../Utils/fetchURL";

class AuthServices {
    async getAllUsers() {
        const response = await axios.get<ResponseType>(`${fetchURL.authFetchURL}users`)
        return response.data;
    }

    async getUserById(id: string) {
        const response = await axios.get<ResponseType>(`${fetchURL.authFetchURL}${id}`)
        return response.data;
    }

    async loginUser(data: LoginFormData) {
        const response = await axios.post<ResponseType>(`${fetchURL.authFetchURL}login`, data);
        return response.data;
    }

    async registerNewUser(data: RegistrationFormData) {
        const response = await axios.post<ResponseType>(`${fetchURL.authFetchURL}register`, data)
        return response.data;
    }
}

const authServices = new AuthServices()
export default authServices;