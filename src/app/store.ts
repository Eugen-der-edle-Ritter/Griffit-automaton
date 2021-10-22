import { configureStore } from '@reduxjs/toolkit';

import cellsReducer from '@/components/Main/Home/cellsSlice';
import playReducer from '@/components/Main/Home/ControlPanel/playToggler/playSlice';
import ruleReducer from '@/components/Main/Home/ControlPanel/ruleSwitcher/ruleSlice';
import speedReducer from '@/components/Main/Home/Accelerator/speedSlice';
import colorReducer from '@/components/Main/Home/ControlPanel/colorRandomizer/colorSlice';

export const store = configureStore({
  reducer: {
    cells: cellsReducer,
    play: playReducer,
    rule: ruleReducer,
    speed: speedReducer,
    colors: colorReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

store.subscribe(() => {
  localStorage.setItem(
    'cellsState',
    JSON.stringify(store.getState().cells.present.value)
  );
});

export type RootState = ReturnType<typeof store.getState>;
