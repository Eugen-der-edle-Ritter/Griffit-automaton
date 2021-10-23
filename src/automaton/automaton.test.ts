import { runTimer, recursiveUpdate, RootState } from './automaton';

const baseInitialState: RootState = {
  cells: {
    past: [],
    present: {
      value: [
        [1, 2],
        [2, 1],
      ],
    },
    future: [],
  },
  play: {
    value: false,
  },
  rule: {
    value: 'Hash',
  },
  speed: {
    value: 1000,
  },
  colors: {
    value: ['#fff', '#aaa', '#ccc'],
  },
};

it('Check action randomUpdate', () => {
  const mockDispatch = jest.fn();
  runTimer()(mockDispatch, () => baseInitialState, undefined);
  expect(mockDispatch).toHaveBeenCalled();
});

it('Check action runTimer with state { isPlaying: true }', () => {
  const mockDispatch = jest.fn();
  runTimer()(
    mockDispatch,
    () => ({
      ...baseInitialState,
      play: {
        value: true,
      },
    }),
    undefined
  );
  expect(mockDispatch).toHaveBeenCalled();
});

it('Check action runTimer with state { isPlaying: false }', () => {
  const mockDispatch = jest.fn();
  runTimer()(
    mockDispatch,
    () => ({
      ...baseInitialState,
      play: {
        value: false,
      },
    }),
    undefined
  );
});

it('Check action recursiveUpdate with state { isPlaying: false }', () => {
  jest.useFakeTimers();
  const mockDispatch = jest.fn();
  recursiveUpdate()(
    mockDispatch,
    () => ({
      ...baseInitialState,
      play: {
        value: false,
      },
    }),
    undefined
  );
  jest.advanceTimersByTime(2000);
  expect(mockDispatch).not.toHaveBeenCalled();
});

it('Check action recursiveUpdate with state { isPlaying: true }', () => {
  jest.useFakeTimers();
  const mockDispatch = jest.fn();
  recursiveUpdate()(
    mockDispatch,
    () => ({
      ...baseInitialState,
      play: {
        value: true,
      },
    }),
    undefined
  );
  jest.advanceTimersByTime(2000);
  expect(mockDispatch).toHaveBeenCalled();
});
