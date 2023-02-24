import { configureStore } from "@reduxjs/toolkit";
import authTokenReducer from "./authTokenSlice";
import authFormReducer from "./authFormsSlice";
import renderReducer from "./renderSlice";
import colorModeReducer from "./colorModeSlice";

export default configureStore({
    reducer: {
        authToken: authTokenReducer,
        authForm: authFormReducer,
        render: renderReducer,
        colorMode: colorModeReducer
    }
})