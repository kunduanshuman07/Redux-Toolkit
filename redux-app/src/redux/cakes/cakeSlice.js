import { createSlice } from "@reduxjs/toolkit"

export const cakeSlice = createSlice({
    name: "cake",
    initialState: {
        numOfCakes: 10,
    },
    reducers: {
        buyCake: (state) => {
            state.numOfCakes = state.numOfCakes -1;
        }
    }
})

export const { buyCake } = cakeSlice.actions;

export default cakeSlice.reducer;