import { createSlice } from '@reduxjs/toolkit';
import undoable from 'redux-undo';

import { Cell } from '@/modules/types';

export const cellsSlice = createSlice({
  name: 'cells',
  initialState: {
    value: [] as Cell[][],
  },
  reducers: {
    setCells: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCells } = cellsSlice.actions;

export default undoable(cellsSlice.reducer);
