import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },

  reducers: {
    IncrementCounter: (state) => {
      state.value += 1;
    },

    DecrementCounter: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { IncrementCounter, DecrementCounter } = counterSlice.actions;
//export default counterSlice.reducer;
export const counterReducer = counterSlice.reducer;


