import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

import { store } from '@/automaton/automaton';

import { RuleSwitcher } from './RuleSwitcher';

jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('RuleSwitcher test cases', () => {
  it('RuleSwitcher changing value', () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { asFragment } = render(
      <Provider store={store}>
        <RuleSwitcher label="test" options={['Hash', 'Demons', 'Venus']} />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.change(screen.getByTestId('select'), {
      target: { value: 'Demons' },
    });

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
