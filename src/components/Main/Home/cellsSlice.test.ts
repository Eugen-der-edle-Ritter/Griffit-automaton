import { StateWithHistory } from 'redux-undo';

import { Cell } from '@/types';

import reducer, { setCells } from './cellsSlice';

it('should change cellsState', () => {
  const previousState: StateWithHistory<{ value: Cell[][] }> = {
    past: [],
    present: {
      value: [],
    },
    future: [],
  };
  expect(
    reducer(
      previousState,
      setCells([
        [2, 4],
        [4, 2],
      ])
    ).present.value
  ).toEqual([
    [2, 4],
    [4, 2],
  ]);
});
