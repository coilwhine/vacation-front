import { configureStore } from "@reduxjs/toolkit";
import authTokenReducer from "./authTokenSlice";
import formTogglerReducer from "./authFormSlice";

export default configureStore({
    reducer: {
        authToken: authTokenReducer,
        authForm: formTogglerReducer
    }
})