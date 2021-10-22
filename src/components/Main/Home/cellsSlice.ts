import { createSlice } from '@reduxjs/toolkit';
import undoable from 'redux-undo';

import { transitionFill } from '@/modules/filling';
import { Cell } from '@/modules/types';

const cellsFromStorage = localStorage.getItem('cellsState');

export const cellsSlice = createSlice({
  name: 'cells',
  initialState: {
    value: (cellsFromStorage ? JSON.parse(cellsFromStorage) : []) as Cell[][],
  },
  reducers: {
    setCells: (state, action) => {
      state.value = action.payload;
    },
    nextCellsState: (state, action) => {
      state.value = transitionFill(action.payload, state.value, 16, 300, 300);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCells, nextCellsState } = cellsSlice.actions;

export default undoable(cellsSlice.reducer);
