import reducer, { setPlay } from './playSlice';

interface IPlayState {
  value: boolean;
}

it('should toggle playing', () => {
  const previousState: IPlayState = { value: true };
  expect(reducer(previousState, setPlay(false))).toEqual({
    value: false,
  });
});
