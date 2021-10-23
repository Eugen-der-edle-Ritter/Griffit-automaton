import { createSlice } from '@reduxjs/toolkit';

export const playSlice = createSlice({
  name: 'play',
  initialState: {
    value: false,
  },
  reducers: {
    setPlay: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlay } = playSlice.actions;

export default playSlice.reducer;
