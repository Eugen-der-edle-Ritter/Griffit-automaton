import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { store } from '@/app/store';

import { ColorRandomizer } from './ColorRandomizer';

jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('ColorRandomizer test cases', () => {
  it('ColorRandomizer dispatch color change', () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { asFragment } = render(
      <Provider store={store}>
        <ColorRandomizer />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();

    userEvent.click(screen.getByRole('button'));

    expect(mockDispatch).toHaveBeenCalled();
  });
});
