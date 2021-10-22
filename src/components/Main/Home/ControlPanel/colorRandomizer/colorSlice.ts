import { createSlice } from '@reduxjs/toolkit';

export const colorSlice = createSlice({
  name: 'colors',
  initialState: {
    value: [
      '#113',
      '#014',
      '#b16',
      '#54f',
      '#74f',
      '#fff',
      '#add',
      '#4fc',
      '#185',
      '#8c4',
      '#ef6',
      '#4bd',
      '#27f',
      '#33f',
      '#059',
      '#567',
    ],
  },
  reducers: {
    setColors: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setColors } = colorSlice.actions;

export default colorSlice.reducer;
