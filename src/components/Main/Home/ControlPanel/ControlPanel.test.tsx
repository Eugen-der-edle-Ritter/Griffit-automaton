import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { store } from '@/app/store';

import { ControlPanel } from './ControlPanel';

jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest
    .fn()
    .mockReturnValueOnce({ past: [], future: [] })
    .mockReturnValueOnce({ isPlaying: true }),
}));

describe('ControlPanel test cases', () => {
  it('ControlPanel dispatching', () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { asFragment } = render(
      <Provider store={store}>
        <ControlPanel />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();

    const buttons = screen.getAllByRole('button');
    buttons.forEach((el) => userEvent.click(el));

    expect(mockDispatch).toHaveBeenCalledTimes(2);
  });
});
