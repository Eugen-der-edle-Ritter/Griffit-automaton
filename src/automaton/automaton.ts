import { configureStore, ThunkAction, AnyAction } from '@reduxjs/toolkit';

import cellsReducer, { setCells } from '@/components/Main/Home/cellsSlice';
import playReducer from '@/components/Main/Home/ControlPanel/playToggler/playSlice';
import ruleReducer from '@/components/Main/Home/ControlPanel/ruleSwitcher/ruleSlice';
import speedReducer from '@/components/Main/Home/Accelerator/speedSlice';
import colorReducer from '@/components/Main/Home/ControlPanel/colorRandomizer/colorSlice';

import { width, height, statesCount } from '@/constants/constants';

import { randomFill, transitionFill } from '@/modules/filling';

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

// store.subscribe(() => {
//   localStorage.setItem(
//     'cellsState',
//     JSON.stringify(store.getState().cells.present.value)
//   );
// });

export type RootState = ReturnType<typeof store.getState>;

export const randomUpdate =
  (): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) => {
    dispatch(setCells(randomFill(statesCount, height, width)));
  };

export const recursiveUpdate =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch, getState) => {
    const { play, speed, rule, cells } = getState();
    if (play.value) {
      setTimeout(() => {
        dispatch(
          setCells(
            transitionFill(
              rule.value,
              cells.present.value,
              statesCount,
              height,
              width
            )
          )
        );
        dispatch(recursiveUpdate());
      }, Math.floor(70 / speed.value) + 1);
    }
  };

export const runTimer =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch, getState) => {
    const isPlaying = getState().play.value;
    if (isPlaying) {
      dispatch(recursiveUpdate());
    }
  };
