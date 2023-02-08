import { configureStore } from "@reduxjs/toolkit";
import authTokenReducer from "./authTokenSlice";
import authFormReducr from "./authFormsSlice";
import renderReducr from "./renderSlice copy";

export default configureStore({
    reducer: {
        authToken: authTokenReducer,
        authForm: authFormReducr,
        render: renderReducr
    }
})