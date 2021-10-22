import reducer, { setColors } from './colorSlice';

interface IColorState {
  value: string[];
}

it('should change color palete', () => {
  const previousState: IColorState = { value: ['#000', '#111', '#333'] };
  expect(reducer(previousState, setColors(['#fff', '#aaa', '#ccc']))).toEqual({
    value: ['#fff', '#aaa', '#ccc'],
  });
});
