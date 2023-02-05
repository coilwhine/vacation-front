import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authTokenSlice = createSlice({
    name: 'authToken',
    initialState: {
        value: false
    },
    reducers: {
        authToken: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
            return
        }
    }
})

export const { authToken } = authTokenSlice.actions

export default authTokenSlice.reducer