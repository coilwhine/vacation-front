import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const renderSlice = createSlice({
    name: 'render',
    initialState: 0,
    reducers: {
        setRender: (state, action: PayloadAction<any>) => {
            return state = action.payload
        }
    }
})

export const { setRender } = renderSlice.actions

export default renderSlice.reducer