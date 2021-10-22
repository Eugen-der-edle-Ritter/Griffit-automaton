import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

import { store } from '@/app/store';

import { Slider } from './Slider';

jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Slider test cases', () => {
  it('Click on slider', () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { asFragment } = render(
      <Provider store={store}>
        <Slider label="test" />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.change(screen.getByRole('slider'), { target: { value: 0 } });

    expect(mockDispatch).toHaveBeenCalled();
  });
});
