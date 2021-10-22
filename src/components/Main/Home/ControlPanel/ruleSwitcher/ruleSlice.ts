import { createSlice } from '@reduxjs/toolkit';
import { Rule } from '@/modules/types';

export const ruleSlice = createSlice({
  name: 'rule',
  initialState: {
    value: 'Hash' as Rule,
  },
  reducers: {
    setRule: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRule } = ruleSlice.actions;

export default ruleSlice.reducer;
