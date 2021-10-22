import reducer, { setSpeed } from './speedSlice';

interface ISpeedState {
  value: number;
}

it('should change speed', () => {
  const previousState: ISpeedState = { value: 0 };
  expect(reducer(previousState, setSpeed(42))).toEqual({
    value: 42,
  });
});
