import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    addtodoByAmount: (state, action) => {
      state.value.push(action.payload);
    },
    removetodoByAmount: (state, action) => {
        state.value= state.value.filter(x=>x.id !== action.payload)
      },
  },
});
export const { addtodoByAmount, removetodoByAmount } = todoSlice.actions;
export default todoSlice.reducer;
