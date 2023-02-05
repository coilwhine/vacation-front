import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const authFormTogglerSlice = createSlice({
    name: 'authForm',
    initialState: {
        value: 'login'
    },
    reducers: {
        formToggler: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
            return
        }
    }
})

export const { formToggler } = authFormTogglerSlice.actions

export default authFormTogglerSlice.reducer