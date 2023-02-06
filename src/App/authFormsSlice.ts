import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authFormSlice = createSlice({
    name: 'authForm',
    initialState: 'login',
    reducers: {
        formState: (state, action: PayloadAction<'login' | 'register'>) => {
            return state = action.payload
        }
    }
})

export const { formState } = authFormSlice.actions

export default authFormSlice.reducer