import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload.number1 + action.payload.number2;
    },
    subtract: (state, action) => {
      state.value = action.payload.number1 - action.payload.number2;
    },
    multiply: (state, action) => {
      state.value = action.payload.number1 * action.payload.number2;
    },
    divide: (state, action) => {
      const { number1, number2 } = action.payload;

      if (number2 === 0) {
        state.value = "Cannot divide by zero";
      } else {
        state.value = number1 / number2;
      }
    },
  },
});

export const { add, subtract, multiply, divide } = calculatorSlice.actions;
export default calculatorSlice.reducer;
