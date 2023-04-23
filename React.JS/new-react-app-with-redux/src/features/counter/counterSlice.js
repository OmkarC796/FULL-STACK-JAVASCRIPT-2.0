const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    value: 0
}

// increment, decrement and increment by value
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducer:{
        increment:(state) => {
            state.value += 1;
        },

        decrement: (state) => {
            state.value -= 1;
        },

        incerementByValue: (state, action) => {
          state.value += action.payload;
        }
    }
})

