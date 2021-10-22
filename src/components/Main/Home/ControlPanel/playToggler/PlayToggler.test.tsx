import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { store } from '@/app/store';

import { PlayToggler } from './PlayToggler';

jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('PlayToggler test cases', () => {
  it('PlayToggler in play state', () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { asFragment } = render(
      <Provider store={store}>
        <PlayToggler value={true} />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();

    userEvent.click(screen.getByRole('button'));

    expect(mockDispatch).toHaveBeenCalled();
  });
  it('PlayToggler in pause state', () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { asFragment } = render(
      <Provider store={store}>
        <PlayToggler value={false} />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();

    userEvent.click(screen.getByRole('button'));

    expect(mockDispatch).toHaveBeenCalled();
  });
});
