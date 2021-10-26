import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

import { store } from '@/automaton/automaton';

import { ControlPanel } from './ControlPanel';

jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('ControlPanel test cases', () => {
  it('ControlPanel renders on pause', () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as jest.Mock).mockReturnValue({
      past: [1, 2, 3],
      future: [1, 2, 3],
      isPlaying: false,
    });

    const { asFragment } = render(
      <Provider store={store}>
        <ControlPanel />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByTestId('undo'));
    expect(mockDispatch).toHaveBeenCalled();

    fireEvent.click(screen.getByTestId('redo'));
    expect(mockDispatch).toHaveBeenCalled();
  });
  it('ControlPanel renders on pause', () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as jest.Mock).mockReturnValue({
      past: [1, 2, 3],
      future: [1, 2, 3],
      isPlaying: true,
    });

    const { asFragment } = render(
      <Provider store={store}>
        <ControlPanel />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
