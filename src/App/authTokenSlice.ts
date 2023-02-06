import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { TokenModel } from "../Models/UserModel";

let token = window.localStorage.getItem('token');
let initialState = null;

if (token) {

    let userToken = jwtDecode<TokenModel>(token);

    initialState = {
        sub: userToken.sub,
        email: userToken.email,
        firstName: userToken.firstName,
        lastName: userToken.lastName,
        userRole: userToken.userRole
    }
}

export const authTokenSlice = createSlice({
    name: 'authToken',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            const userNewToken = jwtDecode<TokenModel>(action.payload);
            state = {
                sub: userNewToken.sub,
                email: userNewToken.email,
                firstName: userNewToken.firstName,
                lastName: userNewToken.lastName,
                userRole: userNewToken.userRole
            } as any
            window.localStorage.setItem('token', action.payload)
            return state
        },

        logout: (state) => {
            window.localStorage.removeItem('token')
            return null
        }
    }
})

export const { login, logout } = authTokenSlice.actions

export default authTokenSlice.reducer