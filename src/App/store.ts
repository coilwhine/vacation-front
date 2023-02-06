import { configureStore } from "@reduxjs/toolkit";
import authTokenReducer from "./authTokenSlice";
import authFormReducr from "./authFormsSlice"

export default configureStore({
    reducer: {
        authToken: authTokenReducer,
        authForm: authFormReducr
    }
})