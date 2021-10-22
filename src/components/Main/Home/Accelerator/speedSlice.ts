import { createSlice } from '@reduxjs/toolkit';

export const speedSlice = createSlice({
  name: 'speed',
  initialState: {
    value: 50,
  },
  reducers: {
    setSpeed: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSpeed } = speedSlice.actions;

export default speedSlice.reducer;
