import React from 'react';
import { store } from '@/app/store';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import { Home } from './Home';

jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

/* mocking useEffect */
const useEffect = jest.spyOn(React, 'useEffect');

const mockUseEffect = () => {
  useEffect.mockImplementationOnce((f) => f());
};

it('Dispatch action inside useEffect hook', () => {
  const mockDispatch = jest.fn();

  (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

  mockUseEffect();
  expect(mockDispatch).toHaveBeenCalled();
});

it('Home section renders correctly', () => {
  const mockDispatch = jest.fn();

  (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
  (useSelector as jest.Mock).mockReturnValue([[], 'Hash']);
  const { asFragment } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  expect(asFragment).toMatchSnapshot();
});
