import { createSlice } from "@reduxjs/toolkit";

export const colorModeSlice = createSlice({
    name: 'colorMode',
    initialState: 'light',
    reducers: {
        light: (state) => {
            return state = 'light'
        },
        dark: (state) => {
            return state = 'dark'
        }
    }
})

export const { light, dark } = colorModeSlice.actions

export default colorModeSlice.reducer